import { AxiosError, AxiosResponse } from 'axios'
import { useInfiniteQuery, UseInfiniteQueryOptions, UseQueryOptions, useQuery } from '@tanstack/react-query'
import axiosClient from 'services/axiosClient'

export const TEACHER_LIST_URL = `/v1/commercial/teacher`

interface RetrieveTeachersResponse {
  _data: {
    teachers: null,
    totalTeachers: number
    pagination: any
  }
}
interface RetrieveTeachersQuery {
  pageIndex?: number
  pageSize?: number
  genders?: string[]
  teacherGroups?: string[]
  certificates?: string[]
  tags?: string[]
  daysOfWeek?: string[]
  timeSlots?: string[]
  learningTopics?: string[]
}

export const retrieveTeachers = (params: RetrieveTeachersQuery) => {
  const { pageIndex, pageSize, genders, teacherGroups, certificates, tags, daysOfWeek, timeSlots, learningTopics } =
    params
  const parseParams = {
    page: pageIndex,
    'page-size': pageSize,
    'timeSlot': timeSlots,
    'dayOfWeek': daysOfWeek,
    'tag': tags,
    'gender': genders,
    'certificate': certificates,
    'teacher_group': teacherGroups,
    'learningTopic': learningTopics,
  }
  return axiosClient.get<RetrieveTeachersResponse>(TEACHER_LIST_URL, {
    params: parseParams,
  })
}
export const useTeachers = (
  params?: RetrieveTeachersQuery,
  opts?: UseQueryOptions<AxiosResponse<RetrieveTeachersResponse>, AxiosError<any>>,
) => {
  return useQuery<AxiosResponse<RetrieveTeachersResponse>, AxiosError<any>>(
    [TEACHER_LIST_URL, params],
    () => retrieveTeachers(params),
    { ...opts },
  )
}

export const useInfiniteTeachers = (
  query?: RetrieveTeachersQuery,
  opts?: UseInfiniteQueryOptions<AxiosResponse<RetrieveTeachersResponse>, AxiosError<any>>,
) => {
  return useInfiniteQuery<AxiosResponse<RetrieveTeachersResponse>, AxiosError<any>>(
    [TEACHER_LIST_URL, query],
    ({ pageParam = { pageIndex: 1, hasMore: true } }) => retrieveTeachers({ pageIndex: pageParam.pageIndex, ...query }),
    {
      ...opts,
      getNextPageParam: (lastPage) => {
        const pagination = lastPage.data._data.pagination
        if (pagination.current === pagination.last) {
          return false
        }
        return {
          pageIndex: pagination.current + 1,
        }
      },
    },
  )
}

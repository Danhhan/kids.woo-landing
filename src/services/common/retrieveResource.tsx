import { AxiosError, AxiosResponse } from 'axios'
import { useInfiniteQuery, UseInfiniteQueryOptions, UseQueryOptions, useQuery } from '@tanstack/react-query'
import axiosClient from 'services/axiosClient'
import { Resource } from 'config/types/common'
import { PRE_REQUISITE_URL, retrievePreRequisite } from '.'

export const RESOURCE_URL = `/public/resources`

interface RetrieveResourceResponse {
  data: Resource
}

export const retrieveResource = () => {
  const params = {
    'countries[]': 1,
    'genders[]': 1,
    'working_field[]': 1,
    'learning_topics[]': 1,
    'teacher-groups': 1,
    'vietnamese-accent': 1,
    'english-accent': 1,
    teacher_tags: 1,
    certificates: 1,
  }
  return axiosClient.get<any>(RESOURCE_URL, { params: params })
}
export const useRetrieveResource = (opts?: UseQueryOptions<AxiosResponse<any>, AxiosError<any>>) => {
  const result1 = useQuery<AxiosResponse<any>, AxiosError<any>>([RESOURCE_URL], () => retrieveResource(), { ...opts })
  const result2 = useQuery<AxiosResponse<any>, AxiosError<any>>(
    [PRE_REQUISITE_URL],
    () => retrievePreRequisite(),
    { ...opts },
  )
  return [result1, result2]
}

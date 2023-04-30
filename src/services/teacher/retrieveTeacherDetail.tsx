import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import axiosClient from 'services/axiosClient'

export const TEACHER_DETAIL_URL = (id: number) => `/v1/commercial/teacher/${id}`

interface RetrieveTeacherDetailResponse {
  _data: {
    teacher: null
  }
}
interface RetrieveTeacherDetailQuery {
  id: number
}

export const retrieveTeacherDetail = (params: RetrieveTeacherDetailQuery) => {
  return axiosClient.get<RetrieveTeacherDetailResponse>(TEACHER_DETAIL_URL(params.id))
}

export const useTeacherDetail = (
  params: RetrieveTeacherDetailQuery,
  opts?: UseQueryOptions<AxiosResponse<RetrieveTeacherDetailResponse>, AxiosError<any>>,
) => {
  return useQuery<AxiosResponse<RetrieveTeacherDetailResponse>, AxiosError<any>>(
    [TEACHER_DETAIL_URL(params.id)],
    () => retrieveTeacherDetail(params),
    { ...opts },
  )
}

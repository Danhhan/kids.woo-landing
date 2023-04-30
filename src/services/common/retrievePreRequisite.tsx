import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import axiosClient from 'services/axiosClient'

export const PRE_REQUISITE_URL = `/v1/pre-requisites`

interface RetrievePreRquisiteResponse {
  _data: {
    days_of_week: string[]
    time_slot: null,
  }
}
export const retrievePreRequisite = () => {
  const params = {
    time_slot: 1,
    days_of_week: 1,
  }
  return axiosClient.get<RetrievePreRquisiteResponse>(PRE_REQUISITE_URL, { params: params })
}
export const useRetrievePreRequisite = (
  opts?: UseQueryOptions<AxiosResponse<RetrievePreRquisiteResponse>, AxiosError<any>>,
) => {
  return useQuery<AxiosResponse<RetrievePreRquisiteResponse>, AxiosError<any>>(
    [PRE_REQUISITE_URL],
    () => retrievePreRequisite(),
    { ...opts },
  )
}

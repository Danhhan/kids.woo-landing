import { DayOfWeek } from 'config/types/AvailableTime'
import axiosClient from 'services/axiosClient'

export const TEACHER_AVAILABLE_TIME_URL = (id: number) => `/v1/commercial/teacher/available-time/${id}`

interface RetrieveTeacherAvailableTimeResponse {
  _data: {
    schedule: DayOfWeek[]
  }
}
interface RetrieveTeacherAvailableTimeQuery {
  id: number
}

export const retrieveTeacherAvailableTimes = (params: RetrieveTeacherAvailableTimeQuery) => {
  return axiosClient.get<RetrieveTeacherAvailableTimeResponse>(TEACHER_AVAILABLE_TIME_URL(params.id))
}

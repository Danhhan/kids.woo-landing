export interface IContactInput {
  parent_name: string
  student_name: string
  parent_email: string
  parent_phone: string
  skill_improvement: string
  interest_course: string
  student_age: number
  utm_source: string
  utm_campaign: string
  utm_medium: string
}
export interface IContactResponse {
  status: string
  message: string
}

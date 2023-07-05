export interface IContactInput {
  represent_name: string
  child_name: string
  represent_email: string
  represent_phone: string
  skill_improvement: string
  interest_course: string
  child_age: number
  utm_source: string
  utm_campaign: string
  utm_medium: string
  utm_id?: number
  type: number
}
export interface IContactResponse {
  status: string
  message: string
}

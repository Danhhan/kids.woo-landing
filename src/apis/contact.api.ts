import { IContactInput } from 'types/IContact'
import clientRequest from 'utils/clientRequest'

export const createContactFn = async ({
  parent_name,
  student_name,
  parent_email,
  parent_phone,
  skill_improvement,
  interest_course,
  student_age,
  utm_source,
  utm_campaign,
  utm_medium,
}: IContactInput): Promise<any> => {
  const response = await clientRequest.post('api/contact', {
    parent_name,
    student_name,
    parent_email,
    parent_phone,
    skill_improvement,
    interest_course,
    student_age,
    utm_source,
    utm_campaign,
    utm_medium,
  })
  return response.data?.data
}

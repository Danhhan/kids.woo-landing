import moment from 'moment'
import { IContactInput } from 'types/IContact'
import clientRequest from 'utils/clientRequest'

export const createContactFn = async (contactInput: IContactInput): Promise<any> => {
  const body = {
    parent_name: contactInput?.represent_name,
    child_name: contactInput?.child_name,
    child_age: contactInput?.child_age,
    phone: contactInput?.represent_phone,
    skills: contactInput?.skill_improvement,
    course: contactInput?.interest_course,
    created_at: moment().format('YYYY-MM-DD'),
  }

  // const response = await clientRequest.post(
  //   'https://script.google.com/macros/s/AKfycbwFfk2xBHVGWR1GxGUmru__nLIi-ujv7H7NmN3u-TQsLkkLqotKxKiy-p-8SiXCgn23/exec',
  //   body,
  // )
  const response = await fetch(
    'https://script.google.com/macros/s/AKfycbwFfk2xBHVGWR1GxGUmru__nLIi-ujv7H7NmN3u-TQsLkkLqotKxKiy-p-8SiXCgn23/exec',
    {
      redirect: 'follow',
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
    },
  )
  return response
}

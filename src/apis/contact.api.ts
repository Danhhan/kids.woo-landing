import { IContactInput } from 'types/IContact'
import clientRequest from 'utils/clientRequest'

export const createContactFn = async (body: IContactInput): Promise<any> => {
  const response = await clientRequest.post('api/contact', body)
  return response.data?.data
}

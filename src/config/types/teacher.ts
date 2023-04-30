import { User } from './user'

export interface ITeacher {
  id: number,
  display_name: string,
  avatar: string,
  rating: string,
  tag?: {
    value?: number
    text?: string
  }
  age: number,
  experience: string,
  price: string,
  videoUrl: string,
}

export interface Schedule {
  day_of_week_from: number
  day_of_week_to: number
  time_format: string
  time_from: string
  time_to: string
}
export interface DayOfWeek {
  monday: Schedule | null
  tuesday: Schedule | null
  wednesday: Schedule | null
  thurday: Schedule | null
  friday: Schedule | null
  saturday: Schedule | null
  sunday: Schedule | null
}

interface ResourceItem {
  id: number
  name: string
}
export interface Resource {
  genders: ResourceItem[]
  teacherGroups: ResourceItem[]
  vietnameseAccents: ResourceItem[]
  englishAccents: ResourceItem[]
  certificates: ResourceItem[]
  countries: ResourceItem[]
  workingField: ResourceItem[]
  learningTopics: ResourceItem[]
  tags: any
}

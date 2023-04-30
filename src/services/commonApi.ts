import axiosClient from './axiosClient'

export const commmonApi = {
  getResources() {
    const params = {
      'countries[]': 1,
      'genders[]': 1,
      'working_field[]': 1,
      'learning_topics[]': 1,
      'teacher-groups': 1,
      'vietnamese-accent': 1,
      'english-accent': 1,
      'teacher_tags': 1,
      certificates: 1,
    }
    return axiosClient.get('public/resources', { params })
  },
}

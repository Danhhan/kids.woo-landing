import { ContextApi } from 'contexts/Localization/types'
import generateUId from 'utils/generateUI'
import { Benefit } from './type'

export const benefitListMock: (t: ContextApi['t']) => Benefit[] = (t) => [
  {
    id: generateUId(),
    img: 'images/home/benefit-img-1.png',
    title: 'Personalized learning path and teacher',
    desc: 'Personalization - The learning path and teachers are tailored to the current English proficiency level and language learning ability of the student.',
  },
  {
    id: generateUId(),
    img: 'images/home/benefit-img-2.png',
    title: 'Engaging and highly interactive learning method',
    desc: 'Students follow a customized learning path based on their interests and needs. We prioritize a relaxed learning atmosphere to facilitate better comprehension.',
  },
  {
    id: generateUId(),
    img: 'images/home/benefit-img-3.png',
    title: 'Flexible learning hours and teachers',
    desc: 'Students can choose suitable learning hours and teachers from 5am to 11pm every day of the week.',
  },
  {
    id: generateUId(),
    img: 'images/home/benefit-img-4.png',
    title: 'Learning progress report',
    desc: 'Students are evaluated and assessed every 30 lessons to adjust their learning path and achieve their goals as quickly as possible.',
  },
]

import { Language } from 'contexts/Localization/types';

export const EN: Language = {
  locale: 'en-US',
  language: 'English',
  code: 'en',
  iconCode: 'us',
};
export const VI: Language = {
  locale: 'vi-VN',
  language: 'Tiếng Việt',
  code: 'vi',
  iconCode: 'vn'
};

export const languages = {
  'en-US': EN,
  'vi-VN': VI,
};

export const languageList = Object.values(languages);

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: 'Login',
      'search-input': 'Enter the name of the singer, song',
      popular: 'Popular',
      'new-release': 'New release',
      favorite: 'Favorite',
      'music-title': 'Music',
      menu: {
        individual: 'Individual',
        discover: 'Discover',
        watching: 'Watching',
        'already-loved': 'Already loved',
        'listened-song': 'Listened song',
        uploaded: 'Uploaded',
      },
    },
  },
  vn: {
    translation: {
      login: 'Đăng nhập',
      'search-input': 'Nhập tên ca sĩ, bài hàt',
      popular: 'Thịnh hành',
      'new release': 'Mới phát hành',
      favorite: 'Yêu thích',
      'music-title': 'Âm nhạc',
      menu: {
        individual: 'Cá nhân',
        discover: 'Khám phá',
        watching: 'Đang theo dõi',
        'already-loved': 'Đã yêu thích',
        'listened-song': 'Bài hát đã nghe',
        uploaded: 'Đã tải lên',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      login: 'Login',
      username: 'Username',
      register: 'Register',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      'search-input': 'Enter the name of the singer, song',
      popular: 'Popular',
      'new-release': 'New release',
      favorite: 'Favorite',
      'music-title': 'Music',
      'play-list-title':'Playlist',
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
      username: 'Tên của bạn',
      login: 'Đăng nhập',
      register: 'Đăng ký',
      password: 'Mật khẩu',
      confirmPassword: 'Xác nhận mật khẩu',
      'search-input': 'Nhập tên ca sĩ, bài hàt',
      popular: 'Thịnh hành',
      'new-release': 'Mới phát hành',
      favorite: 'Yêu thích',
      'music-title': 'Âm nhạc',
      'play-list-title':'Danh sách playlist',
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
  lng: 'vn',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

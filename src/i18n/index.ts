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
      'create-playlist':"Create Playlist",
      "playlists":"Playlists",
      "playlists-music":"Playlists Music",
      'play-list-title':'Playlist',
      'download'  : 'Downloads',
      'mv': 'Watch MV',
      'add-playlist': 'Add Playlist',
      'remove-playlist': 'Remove from Playlist',
      'view':'views',
      "like": "likes",
      "upload-music":"Upload Music",
      "name-category":"Name Category",
      "name-singer":"Name singer",
      "logout":"Logout",
      'edit-playlist':"Edit Playlist",
      "save":"Save",
      "confirm":"Are you sure you want to delete this playList",
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
      'download'  : 'Tải xuống',
      "confirm":"Bạn có chắc chắc muốn xóa playList này không",
      "save":"Lưu",
      'mv': 'Xem MV',
      'add-playlist': 'Thêm vào Playlist',
      'remove-playlist': 'Xóa khỏi Playlist',
      'view':'lượt xem',
      "like": "lượt thích",
      "upload-music":"Tải nhạc lên",
      "name-category":"Tên thể loại",
      "name-singer":"Tên nghệ sĩ",
      "logout":"Đăng xuất",
      'playlists-music': "Danh sách phát nhạc",
      playlists: "Danh sách phát playlist",
      login: 'Đăng nhập',
      'create-playlist':"Tạo Playlist",
      'edit-playlist':"Sửa Playlist",
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

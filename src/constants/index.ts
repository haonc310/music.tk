import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdFavoriteBorder, MdLibraryMusic } from 'react-icons/md';
import { RiCompassDiscoverFill, RiFileUserLine, RiProfileLine } from 'react-icons/ri';

export enum ModalTypeEnum {
  ADD_LIST_MUSIC,
  LOGIN,
  REGISTER,
  EDIT_PLAYLIST,
  UPLOAD_MUSIC,
  EDIT_UPLOAD_MUSIC,
  NULL,
  OPEN_COMMENT,
  VIDEO_CLIP,
  CREATE_LIST,
  DELETE_PLAYLIST
}

export const homeMenu = [
  // {
  //   title: 'individual',
  //   href: '/profile',
  //   Icon: RiProfileLine,
  // },
  {
    title: 'discover',
    href: '/',
    Icon: RiCompassDiscoverFill,
  },
  // {
  //   title: 'watching',
  //   href: '/following',
  //   Icon: RiFileUserLine,
  // },
];

export const musicMenu = [
  {
    title: 'already-loved',
    href: '/favorite',
    Icon: MdFavoriteBorder,
  },
  {
    title: 'listened-song',
    href: '/listened-song',
    Icon: MdLibraryMusic,
  },
  // {
  //   title: 'uploaded',
  //   href: '/upload-music',
  //   Icon: AiOutlineCloudUpload,
  // },
];

export const bannerDefault = [
  'https://photo-zmp3.zadn.vn/banner/0/d/3/1/0d31409262ea007fd8909838ead4ba9a.jpg',
  'https://photo-zmp3.zadn.vn/banner/d/f/4/f/df4f2462b8b2a799caa699572c607282.jpg',
  'https://photo-zmp3.zadn.vn/banner/2/b/3/d/2b3d25f6f1aaa8d6f876a9e58e1338c5.jpg',
  'https://photo-zmp3.zadn.vn/banner/9/5/e/8/95e86abef57021304c30b9a9ec98bf84.jpg',
  'https://photo-zmp3.zadn.vn/banner/4/4/6/e/446e888537f27e9e4c569690b90a9bf3.jpg',
  'https://photo-zmp3.zadn.vn/banner/0/d/9/c/0d9ca3f0ae812e94c0fa618b66ac6fa4.jpg',
  'https://photo-zmp3.zadn.vn/banner/3/3/6/1/3361a0d09d7e557d849df9e3d0424827.jpg',
];

// export const REACT_APP_API_URL = "http://localhost:3001";
// http://localhost:3000/
// https://music-web-production.up.railway.app/api

//https://api-music-production-83d8.up.railway.app/api/
export const REACT_APP_API_URL = 'https://music-web-production.up.railway.app/api';
export const CLINT_ID_GOOGLE =
  '147148304416-51hpf6le8b4q73jp3qpg9hvopvp32hbb.apps.googleusercontent.com';

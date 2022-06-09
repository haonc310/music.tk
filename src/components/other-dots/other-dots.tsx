import { Dropdown, Menu } from 'antd';
import clsx from 'clsx';
import { saveAs } from 'file-saver';
import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { ModalTypeEnum } from '../../constants';
import { UseModal, UsePlaylist } from '../../hooks';
import './other-dots.scss';

const OtherDots = (props: any) => {
  const { toggle } = UseModal();
  const { link_mv, src_music, name_music, _id, check = false } = props;
  const { handleDeleteMusicPlaylist, resultPlaylist } = UsePlaylist();

  const { id_playlist_old } = resultPlaylist;
  const menu = (
    <Menu>
      <Menu.Item icon={<HiOutlineDotsHorizontal />}>
        <span onClick={() => saveAs(src_music, `${name_music}.mp3`)}>Tải xuống</span>
      </Menu.Item>
      <Menu.Item icon={<HiOutlineDotsHorizontal />}>
        <span
          onClick={() =>
            toggle({
              type: ModalTypeEnum.VIDEO_CLIP,
              link_mv,
              _id,
            })
          }
        >
          Xem MV
        </span>
      </Menu.Item>
      <Menu.Item
        icon={<HiOutlineDotsHorizontal />}
        onClick={() => {
          toggle({
            type: ModalTypeEnum.ADD_LIST_MUSIC,
            title: 'Thêm vào playlist',
            _id,
          });
        }}
      >
        <span>Thêm vào playlist</span>
      </Menu.Item>
      {check && (
        <Menu.Item
          icon={<HiOutlineDotsHorizontal />}
          onClick={() => {
            handleDeleteMusicPlaylist({ _id: id_playlist_old, _id_music: _id });
          }}
        >
          <span>Xóa khỏi playlist</span>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="topLeft">
      <HiOutlineDotsHorizontal className={clsx('text-white cursor-pointer')} size="2.5rem" />
    </Dropdown>
  );
};

export default OtherDots;

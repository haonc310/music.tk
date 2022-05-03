import { Dropdown, Menu } from 'antd';
import clsx from 'clsx';
import { saveAs } from 'file-saver';
import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { ModalTypeEnum } from '../../constants';
import { UseModal } from '../../hooks';
import './other-dots.scss';

const OtherDots = (props: any) => {
  const { toggle } = UseModal();
  const { link_mv, src_music, name_music } = props;
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
            })
          }
        >
          Xem MV
        </span>
      </Menu.Item>
      <Menu.Item icon={<HiOutlineDotsHorizontal />}>
        <span>Thêm vào playlist</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="topLeft">
      <HiOutlineDotsHorizontal className={clsx('text-white cursor-pointer')} size="2.5rem" />
    </Dropdown>
  );
};

export default OtherDots;

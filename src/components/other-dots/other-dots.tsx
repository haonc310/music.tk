import { Dropdown, Menu } from 'antd';
import clsx from 'clsx';
import React from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import './other-dots.scss';

const OtherDots = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<HiOutlineDotsHorizontal />} disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <HiOutlineDotsHorizontal
        className={clsx('text-white cursor-pointer')}
        size="2.5rem"
      />
    </Dropdown>
  );
};

export default OtherDots;

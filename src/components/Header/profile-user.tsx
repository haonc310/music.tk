import { Dropdown, Menu } from 'antd';
import React from 'react';
import { RiUpload2Line } from 'react-icons/ri';

export const ProfileUser = () => {
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
      <Menu.Item icon={<RiUpload2Line />} disabled>
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
    <div className="profile-user">
      <Dropdown overlay={menu}>
        <div className="profile-user-upload">
          <RiUpload2Line />
        </div>
      </Dropdown>
      <div className="profile-user-avatar">
        <img
          src="https://res.cloudinary.com/phuockaito/image/upload/v1627194964/user/4_fbupvc.png"
          alt=""
        />
      </div>
    </div>
  );
};

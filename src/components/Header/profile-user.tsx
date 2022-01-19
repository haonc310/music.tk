import { Dropdown, Menu } from 'antd';
import React from 'react';
import { RiUpload2Line } from 'react-icons/ri';
import { UseAccount } from '../../hooks';

export const ProfileUser = () => {
  const { handleLogout } = UseAccount();
  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={handleLogout}>Đăng xuất</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="profile-user">
      <div className="profile-user-upload">
        <RiUpload2Line />
      </div>

      <Dropdown overlay={menu} placement="bottomLeft">
        <div className="profile-user-avatar">
          <img
            src="https://res.cloudinary.com/phuockaito/image/upload/v1627194964/user/4_fbupvc.png"
            alt=""
          />
        </div>
      </Dropdown>
    </div>
  );
};

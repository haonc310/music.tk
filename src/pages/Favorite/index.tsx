import React, { useEffect } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { RiUpload2Line } from 'react-icons/ri';
import { UseFavoriteAccount } from '../../hooks';

const Favorite = () => {
  const { handleGetFavorite } = UseFavoriteAccount();
  useEffect(() => {
    handleGetFavorite({});
  }, []);
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
    <div>
      <Dropdown overlay={menu}>
        <Button type="primary">Hover</Button>
      </Dropdown>
    </div>
  );
};

export default Favorite;

import { Dropdown, Menu } from 'antd';
import { RiUpload2Line } from 'react-icons/ri';
import { UseAccount } from '../../hooks';
import { ModalTypeEnum } from '../../constants';
import { UseModal } from '../../hooks';
export const ProfileUser = () => {
  const { handleLogout } = UseAccount();
  const { toggle } = UseModal();
  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={handleLogout}>Đăng xuất</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="profile-user">
      <div
        className="profile-user-upload"
        onClick={() => toggle({ type: ModalTypeEnum.UPLOAD_MUSIC, title: 'Tải nhạc lên' })}
      >
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

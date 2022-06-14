import { Dropdown, Menu } from 'antd';
import { RiUpload2Line } from 'react-icons/ri';
import { UseAccount } from '../../hooks';
import { ModalTypeEnum } from '../../constants';
import { UseModal } from '../../hooks';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
export const ProfileUser = () => {
  const { t } = useTranslation();
  const { handleLogout } = UseAccount();
  const { toggle } = UseModal();
  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={handleLogout}>{t('logout')}</span>
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

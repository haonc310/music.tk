import React from 'react';
import { RiUpload2Line } from 'react-icons/ri';

export const ProfileUser = () => {
  return (
    <div className="profile-user">
      <div className="profile-user-upload">
        <RiUpload2Line />
      </div>
      <div className="profile-user-avatar">
        <img
          src="https://res.cloudinary.com/phuockaito/image/upload/v1627194964/user/4_fbupvc.png"
          alt=""
        />
      </div>
    </div>
  );
};

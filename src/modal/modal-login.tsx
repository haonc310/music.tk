import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import * as yup from 'yup';
import {
  InputField,
  PasswordField,
} from '../components/form-controls';
import { ModalTypeEnum } from '../constants';
import { UseAccount, UseModal } from '../hooks';
import './style.scss';

const ModalLogin = () => {
  const { t } = useTranslation();
  const { toggle, handleCloseModal } = UseModal();
  const { handleLogin } = UseAccount();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Vui lòng nhập email')
      .email('Email không hợp lệ'),
    password: yup
      .string()
      .required(`Vui lòng nhập ${t('password')} `)
      .min(8, `${t('password')} phải chứa ít nhất 8 kí tự`)
      .max(24, `${t('password')} tối thiếu 24 kí tự`),
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = form;
  const handleSubmitForm = async (values: any) => {
    await handleLogin(values);
  };
  return (
    <div
      className="modal-login"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="modal-login-header">
        <h3>{t('login')}</h3>
      </div>
      <form
        className="modal-login-form"
        action=""
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <InputField
          form={form}
          name="email"
          disable={false}
          placeholder="Email"
          icon={<AiOutlineMail />}
        />
        <PasswordField
          form={form}
          name="password"
          disable={false}
          placeholder={t('password')}
          icon={<RiLockPasswordLine />}
        />
        <div className="modal-login-group">
          <button type="submit">{t('login')}</button>
        </div>
      </form>
      <div
        className="link"
        onClick={() =>
          toggle({
            type: ModalTypeEnum.REGISTER,
          })
        }
      >
        {t('register')}
      </div>
    </div>
  );
};

export default ModalLogin;

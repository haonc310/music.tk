import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { AiOutlineMail } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import * as yup from 'yup';
import {
  InputField,
  PasswordField,
} from '../components/form-controls';
import { ModalTypeEnum } from '../constants';
import { UseModal } from '../hooks';
import './style.scss';

const ModalRegister = () => {
  const { t } = useTranslation();
  const { toggle } = UseModal();
  const schema = yup.object().shape({
    username: yup.string().required(`Vui lòng nhập ${t('username')}`),
    email: yup
      .string()
      .required('Vui lòng nhập email')
      .email('Email không hợp lệ'),
    password: yup
      .string()
      .required(`Vui lòng nhập ${t('password')} `)
      .min(8, `${t('password')} phải chứa ít nhất 8 kí tự`)
      .max(24, `${t('password')} tối thiếu 24 kí tự`),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        `${t('password')} không trùng khơp`
      ),
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
  const handleSubmitForm = (values: any) => {
    console.log(values);
  };

  return (
    <div
      className="modal-login"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="modal-login-header">
        <h3>{t('register')}</h3>
      </div>
      <form
        className="modal-login-form"
        action=""
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <InputField
          form={form}
          name="username"
          disable={false}
          placeholder={t('username')}
          icon={<FaUserAlt />}
        />
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
        <PasswordField
          form={form}
          name="confirmPassword"
          disable={false}
          placeholder={t('confirmPassword')}
          icon={<RiLockPasswordLine />}
        />
        <div className="modal-login-group">
          <button type="submit">Register</button>
        </div>
      </form>
      <div
        className="link"
        onClick={() =>
          toggle({
            type: ModalTypeEnum.LOGIN,
          })
        }
      >
        Login
      </div>
    </div>
  );
};

export default ModalRegister;

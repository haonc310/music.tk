import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { Controller } from 'react-hook-form';
export const PasswordField = (props: any) => {
  const { name, disable, form, icon, placeholder } = props;
  const {
    control,
    formState: { errors },
  } = form;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { name, value, onBlur, onChange } }) => (
        <div className="modal-login-group">
          <input
            type="password"
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            disabled={disable}
          />
          <div className="icon">{icon}</div>
          <ErrorMessage
            name={name}
            errors={errors}
            render={({ message }: any) => (
              <p className="error">{message}</p>
            )}
          />
        </div>
      )}
    />
  );
};

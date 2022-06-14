import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { AiOutlineMail } from 'react-icons/ai';
import * as yup from 'yup';
import { InputField } from '../components/form-controls';
import { ModalTypeEnum } from '../constants';
import { UseModal, UsePlaylist } from '../hooks';
const ModalEditPlayList = () => {
  const { t } = useTranslation();
  const { resultModal, toggle } = UseModal();
  const { _id, others } = resultModal;

  const { handleEditPlaylistName } = UsePlaylist();
  const schema = yup.object().shape({
    nameList: yup.string().required('Vui lòng nhập nameList'),
  });
  const form = useForm({
    defaultValues: {
      nameList: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const { handleSubmit, setValue } = form;

  const handleSubmitForm = async (e: any) => {
    const actionResult = await handleEditPlaylistName({
      _id,
      nameList: e.nameList,
    });
    if (actionResult) {
      toggle({
        title: '',
        type: ModalTypeEnum.NULL,
      });
    }
  };
  useEffect(() => {
    setValue('nameList', others.nameList);
  }, [_id]);
  return (
    <div className="modal-login" onClick={(event) => event.stopPropagation()}>
      <div className="modal-login-header">
        <h3>{t('edit-playlist')}</h3>
      </div>
      <div>
        <form className="modal-login-form" action="" onSubmit={handleSubmit(handleSubmitForm)}>
          <InputField
            form={form}
            name="nameList"
            disable={false}
            placeholder="Name"
            icon={<AiOutlineMail />}
          />

          <div className="modal-login-group">
            <button type="submit">{t('save')}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditPlayList;

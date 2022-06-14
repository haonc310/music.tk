import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { AiOutlineMail } from 'react-icons/ai';
import * as yup from 'yup';
import { InputField } from '../components/form-controls';
import { UsePlaylist } from '../hooks';
const ModalAddPlayList = () => {
  const { t } = useTranslation();

  const { handleCreatePlaylist } = UsePlaylist();
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
  const { handleSubmit } = form;

  const handleSubmitForm = async (e: any) => {
    handleCreatePlaylist({ nameList: e.nameList });
  };
  return (
    <div className="modal-login" onClick={(event) => event.stopPropagation()}>
      <div className="modal-login-header">
        <h3>{t('create-playlist')}</h3>
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
            <button type="submit">{t('create-playlist')}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddPlayList;

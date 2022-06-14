import { t } from 'i18next';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MdQueueMusic } from 'react-icons/md';
import { UseModal, UsePlaylist } from '../hooks';

const ModalPlayList = () => {
  const { t } = useTranslation();
  const { getPlaylistAPI, resultPlaylist, handleAddListMusic } = UsePlaylist();
  const { resultModal } = UseModal();
  console.log({ resultModal });

  const { data, loading } = resultPlaylist;
  useEffect(() => {
    getPlaylistAPI({});
  }, []);
  return (
    <div className="modal-login" onClick={(event) => event.stopPropagation()}>
      <div className="modal-login-header">
        <h3>{t('play-list-title')}</h3>
      </div>
      <div className="name-list">
        {data.map((item: any) => {
          return (
            <div
              className="name-list-item"
              onClick={() => {
                handleAddListMusic({ _id: item._id, _id_music: resultModal._id });
              }}
            >
              <MdQueueMusic />
              <span>{item.name_list}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ModalPlayList;

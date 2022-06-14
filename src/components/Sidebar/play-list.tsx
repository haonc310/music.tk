import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MdQueueMusic } from 'react-icons/md';
import { ModalTypeEnum } from '../../constants';
import { UseAccount, UseModal, UsePlaylist } from '../../hooks';

const PlayList = () => {
  const { t } = useTranslation();
  const { getPlaylistAPI, resultPlaylist, getByIdPlaylistAPI } = UsePlaylist();
  const { resultAccount } = UseAccount();
  const { accessToken } = resultAccount;

  const { data, loading } = resultPlaylist;

  const { toggle } = UseModal();

  useEffect(() => {
    getPlaylistAPI({});
  }, []);
  return (
    <>
      {accessToken && (
        <div className="menu-list">
          <p className="menu-title">{t('play-list-title')}</p>
          <div
            className="btn-create"
            onClick={() =>
              toggle({
                type: ModalTypeEnum.CREATE_LIST,
              })
            }
          >
            {t('create-playlist')}
          </div>
          <div className="name-list">
            {data.map((item: any) => {
              return (
                <div
                  className="name-list-item"
                  onClick={() => {
                    getByIdPlaylistAPI({ _id: item._id, nameList: item.name_list });
                  }}
                >
                  <MdQueueMusic />
                  <span>{item.name_list}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default PlayList;

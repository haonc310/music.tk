import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { MdQueueMusic } from 'react-icons/md';
import { ModalTypeEnum } from '../../constants';
import { UseAccount, UseModal, UsePlaylist } from '../../hooks';
import './styles.scss';
const PlayListRight = () => {
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
        <div className="sidebar-right-name-list">
          {data.map((item: any) => {
            return (
              <div className="sidebar-right-name-list-item">
                <div
                  className="sidebar-right-name-list-item-left"
                  onClick={() => {
                    getByIdPlaylistAPI({ _id: item._id, nameList: item.name_list });
                  }}
                >
                  <MdQueueMusic />
                  <span>{item.name_list}</span>
                </div>
                <div className="sidebar-right-name-list-item-right">
                  <div>
                    <FiEdit
                      size="1.8rem"
                      className="text-white"
                      onClick={() => {
                        toggle({
                          type: ModalTypeEnum.EDIT_PLAYLIST,
                          title: 'Đổi tên playlist',
                          _id: item._id,
                          others: { nameList: item.name_list },
                        });
                      }}
                    />
                  </div>
                  <div>
                    <AiFillDelete
                      size="1.8rem"
                      className="text-white"
                      onClick={() => {
                        toggle({
                          type: ModalTypeEnum.DELETE_PLAYLIST,
                          title: 'Xóa playlist',
                          _id: item._id,
                          others: { nameList: item.name_list },
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PlayListRight;

import { Button } from 'antd';
import { ModalTypeEnum } from '../constants';
import { UseModal, UsePlaylist } from '../hooks';

const ModalDeletePlayList = () => {
  const { resultModal, toggle } = UseModal();
  const { handleDeletePlaylist } = UsePlaylist();
  const { _id } = resultModal;
  const handleDelete = async () => {
    const actionResult = await handleDeletePlaylist({
      _id,
    });
    if (actionResult) {
      toggle({
        title: '',
        type: ModalTypeEnum.NULL,
      });
    }
  };
  return (
    <div className="modal-login" onClick={(event) => event.stopPropagation()}>
      <div className="modal-login-header">
        <h3>Delete Playlist</h3>
      </div>
      <div>
        <p className="confirm-delete">Bạn có chắc chắc muốn xóa playList này không</p>
        <div className="modal-login-group modal-delete">
          <button className="btn-min" type="submit" onClick={() => handleDelete()}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeletePlayList;

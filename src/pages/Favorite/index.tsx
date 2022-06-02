import React, { useEffect } from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { RiUpload2Line } from 'react-icons/ri';
import { favoriteAccountStore, useAppSelector, UseFavoriteAccount } from '../../hooks';
import { ListLoading } from '../../components/Loading';
import { MusicItem } from '../../components/CardMusic/music-item';

const Favorite = () => {
  const { handleGetFavorite } = UseFavoriteAccount();
  const resultFavoriteAccount = useAppSelector(favoriteAccountStore);
  const { loading, data }: any = resultFavoriteAccount;
  useEffect(() => {
    handleGetFavorite({});
  }, []);

  const cloneData = data?.map((item: any) => item?.music);
  

  return (
    <div className="favorite-page">
      {cloneData?.length && !loading ? (
        <div className="music">
          {cloneData?.map((music: any, index: number) => (
            <MusicItem music={music} key={index} index={index} data={cloneData} _id={music._id} />
          ))}
        </div>
      ) : null }
      {loading && (
        <ListLoading />
      )}
      {
        !cloneData?.length && !loading && (
          <h1>Không có bài hát nào</h1>
        )
      }
    </div>
  );
};

export default Favorite;

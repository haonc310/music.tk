import userEvent from '@testing-library/user-event';
import React, { useReducer, useRef } from 'react';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom';
import { MusicItem } from '../../components/CardMusic/music-item';
import { ListLoading } from '../../components/Loading';
import { onLogOutRemoveData } from '../../features/play-history';
import { UseAccount, useAppDispatch, useMusicHistory } from '../../hooks';

const Listened = () => {
  const dispatch = useAppDispatch()
  const navigation = useNavigate()
  const token = JSON.parse(localStorage.getItem('token')|| '')
  const { data, loading, pagination, handleGetData } = useMusicHistory();
  const previousPage = React.useRef<number>(1);
  const [page, setPage] = React.useState<number>(previousPage.current);
  const fetchMoreData = () => {
    if (data.length < pagination?._total) setPage(page + 1);
  };

  useEffect(() => {
    if(!token ) navigation('/')
  }, [token])

  useEffect(() => {
    const fetch = () => {
      if (!pagination?._total || previousPage.current < page ) {
        handleGetData({ _page: page, _limit: 30 });
      }
    };
    fetch();
  }, [page, pagination?._total]);
  useEffect(() => {
    handleGetData({ _page: page, _limit: 30 });
    return () => {
      
      console.log("Unmount")
      dispatch(onLogOutRemoveData())
    }
  },[])


  return (
    <div>
      {data?.length && !loading ? (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={data.length === pagination?._total ? false : true}
          loader={<ListLoading items={data.length || 30} />}
        >
          <div className="music">
            {data?.map((music: any, index: number) => (
              <MusicItem music={music} key={index} index={index} data={data} _id={music._id} />
            ))}
          </div>
        </InfiniteScroll>
      ) : null}

      {loading && <ListLoading />}
      {!data?.length && !loading && <h1>Không có bài hát nào</h1>}
    </div>
  );
};

export default Listened;

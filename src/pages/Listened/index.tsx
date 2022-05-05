import React from 'react';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MusicItem } from '../../components/CardMusic/music-item';
import { ListLoading } from '../../components/Loading';
import { useMusicHistory } from '../../hooks';

const Listened = () => {
  const { data, loading, pagination, handleGetData } = useMusicHistory();
  const previousPage = React.useRef<number>(1);
  const [page, setPage] = React.useState<number>(previousPage.current);
  const fetchMoreData = () => {
    if (data.length < pagination?._total) setPage(page + 1);
  };

  useEffect(() => {
    if (!pagination?._total || previousPage.current < page) {
      handleGetData({ _page: page, _limit: 30 });
    }
  }, [page, pagination?._total]);

  return (
    <div>
      {data?.length && !loading ? (
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={data.length === pagination?._total ? false : true}
          loader={<ListLoading items={data.length || 10} />}
        >
          <div className="music">
            {data?.map((music: any, index: number) => (
              <MusicItem music={music} key={index} index={index} data={data} _id={music._id} />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <ListLoading />
      )}
    </div>
  );
};

export default Listened;

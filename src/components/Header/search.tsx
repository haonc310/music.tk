import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Wrapper from './popper';
import MusicSearch from './music-search';
import { trendingStore, useAppSelector } from '../../hooks';
import nameMusicApi from '../../apis/api-nam-music';
import useDebounce from '../../hooks/use-Debounce';
import { useTranslation } from 'react-i18next';

// const cx = classNames.bind(styles);

function Search() {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<any>([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef(null);

  const debounced = useDebounce(searchValue, 500);

  const handleSearchMusic = async (search: string) => {
    try {
      const response = await nameMusicApi.search(search);
      const {data} = response;
      setSearchResult(data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!debounced.trim()) {
        setSearchResult([]);
        return;
    }
    handleSearchMusic(debounced);
  }, [ debounced])

  const handleChange = (e: any) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className="search-result" {...attrs}>
            <Wrapper>
              {searchResult.map((music: any) => (
                <MusicSearch music={music} handleHiedResult={handleHideResult} />
              ))}
            </Wrapper>
          </div>
        )}
        onClickOutside={handleHideResult}
      >
        <div className="search">
          <input
            ref={inputRef}
            value={searchValue}
            placeholder={t('search-input')}
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => setShowResult(true)}
          />
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;

import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Wrapper from './popper';
import MusicSearch from './music-search';
import { trendingStore, useAppSelector } from '../../hooks';



// const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState<any>([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const result = useAppSelector(trendingStore)
    const {data} = result

    useEffect(() => {
        setSearchResult(data)
    }, [data])

    const inputRef = useRef(null);

    

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        // inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

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
                visible={showResult && searchResult.length >0 }
                render={(attrs) => (
                    <div className='search-result'  {...attrs}>
                        <Wrapper> 
                            <h4 className='search-title'>Musics</h4>
                            {searchResult.map((music: any) => (
                                <MusicSearch music={music} handleHiedResult={handleHideResult}/>
                            ))}
                        </Wrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className='search'>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
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
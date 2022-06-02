import { UseMusic } from "../../hooks";
type Props = {
    music: any;
    handleHiedResult: () => void;
}
const MusicSearch = ({music, handleHiedResult}: Props) => {
    const { handleOnIndexMusic } = UseMusic();

    const tempData = { data: [music], index:0,_id: music._id };

    
    return (
        <div className="music-search-item"
        onClick={() => {
            handleOnIndexMusic(tempData);
            handleHiedResult();
        }}
        >
            <img src={music.image_music} alt="" className="music-search-item-img" />
            <p  className="music-search-item-name">{music.name_music}</p>
        </div>
    )
}

export default MusicSearch
import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Blank Space', duration: '4:33' },
        { title: 'No Lie', duration: '3:49' },
        { title: 'Havana', duration: '6:43' },
        { title: 'Bad Romance', duration: '5:08' },
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
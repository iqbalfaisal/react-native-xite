import {IGenre, IVideo, AlbumActionTypes, SET_ALBUM} from '../types';

interface AlbumState {
  videos: IVideo[];
  genres: IGenre[];
}

const INITIAL_STATE: AlbumState = {
  videos: [],
  genres: [],
};

export default function AlbumReducer(
  state: AlbumState = INITIAL_STATE,
  action: AlbumActionTypes,
): AlbumState {
  console.log(action);

  switch (action.type) {
    case SET_ALBUM:
      return {
        ...state,
        videos: action.album.videos,
        genres: action.album.genres,
      };

    default:
      return state;
  }
}

import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {IRootState} from '../reducers';

export interface IVideo {
  id: number;
  artist: string;
  title: string;
  release_year: number;
  genre_id: number;
  image_url: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IAlbum {
  videos: IVideo[];
  genres: IGenre[];
}

export const SET_ALBUM = 'SET_ALBUM';

interface SetAlbumAction {
  type: typeof SET_ALBUM;
  album: IAlbum;
}

export type AlbumActionTypes = SetAlbumAction;

export type TDispatch = ThunkDispatch<IRootState, {}, AlbumActionTypes>;

export type TActionCreator<T = void> = ThunkAction<
  T,
  IRootState,
  {},
  AlbumActionTypes
>;

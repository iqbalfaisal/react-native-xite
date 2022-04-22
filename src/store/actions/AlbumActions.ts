import {Dispatch} from 'redux';

import * as api from '../../services/Album';

import {SET_ALBUM, AlbumActionTypes} from '../types';

export const fetchAlbum = () => {
  return async function (dispatch: Dispatch<AlbumActionTypes>) {
    await api.getAlbum(async (response: any) => {
      dispatch({type: SET_ALBUM, album: response});
    });
  };
};

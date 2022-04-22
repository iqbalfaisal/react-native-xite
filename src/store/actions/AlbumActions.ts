import {Dispatch} from 'redux';

import {RenderError} from '../../components';
import * as api from '../../services/Album';

import {SET_ALBUM, AlbumActionTypes} from '../types';

export const fetchAlbum = () => {
  return async function (dispatch: Dispatch<AlbumActionTypes>) {
    await api.getAlbum(async (response: any) => {
      if (!response.success) {
        RenderError(response.message);
      } else {
        dispatch({type: SET_ALBUM, album: response.data});
      }
    });
  };
};

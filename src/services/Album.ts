import BaseApi from './BaseApi';
import Config from './Config';

const {Album} = Config.END_POINTS;

export function getAlbum(callback: Function) {
  return BaseApi.get(Album, callback);
}

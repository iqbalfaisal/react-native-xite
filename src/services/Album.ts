import BaseApi from './BaseApi';
import Config from './Config';

const {Album} = Config.REST_URIS;

export function getAlbum(callback: Function) {
  return BaseApi.get(Album, callback);
}

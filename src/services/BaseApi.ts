import axios from 'axios';
import {RenderError} from '../components';
import {store} from '../store';
import {SET_LOADING_STATE} from '../store/types';
import Config from './Config';
const baseURL = Config.ROOT_URL;

class BaseApi {
  static setDefaults() {
    const d = axios.defaults;
    d.baseURL = baseURL;
  }

  static handleStatus(callback: Function, response: any) {
    const me = this;
    const result = response.data;
    if (response.status !== 200) {
      me.handleException(response);
    } else {
      me.handleResponse(callback, result);
    }
  }

  static transformResponse() {
    return {
      transformResponse: [
        function (data: any) {
          return data ? JSON.parse(data) : {};
        },
      ],
    };
  }

  static handleException(ex: Error) {
    store.dispatch({type: SET_LOADING_STATE, loading: false});

    RenderError(ex.message);
  }

  static handleResponse(callback: Function, response: any) {
    store.dispatch({type: SET_LOADING_STATE, loading: false});

    callback(response);
  }

  static async get(api: string, callback: Function) {
    const me = this;
    store.dispatch({type: SET_LOADING_STATE, loading: true});

    await axios
      .get(api, this.transformResponse())
      .then(response => {
        me.handleStatus(callback, response);
      })
      .catch(e => {
        me.handleException(e);
      });
  }
}

export default BaseApi;

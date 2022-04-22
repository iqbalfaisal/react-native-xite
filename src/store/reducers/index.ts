import {combineReducers} from 'redux';
import AlbumReducer from './AlbumReducer';
import LoaderReducer from './LoaderReducer';

export const rootReducer = combineReducers({
  AlbumReducer,
  LoaderReducer,
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;

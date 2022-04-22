import {createSelector} from 'reselect';
import _ from 'lodash';

import {IRootState} from '../reducers';
import {IGenre, IVideo} from '../types';

export const videosSelector = (state: IRootState) => state.AlbumReducer.videos;
export const genresSelector = (state: IRootState) => state.AlbumReducer.genres;

export const selectVideos = createSelector(
  [videosSelector],
  videos => videos || [],
);
export const selectGenres = createSelector(
  [genresSelector],
  genres => genres || [],
);

export const selectVideosByGenres = (videos: IVideo[], genres: IGenre[]) =>
  _.filter(videos, ({genre_id}: {genre_id: number}) => {
    return _.find(genres, {id: genre_id});
  });

export const selectVideosByText = createSelector(
  [selectVideos, selectVideosByGenres],
  (state, VideosByGenres, text) =>
    VideosByGenres.filter(({title}: {title: string}) => {
      return title.toLowerCase().match(text);
    }),
);

import {createSelector} from 'reselect';
import _ from 'lodash';

import {IRootState} from '../reducers';
import {IVideo} from '../types';

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

export const selectVideosByGenres = (videos: IVideo[], genres: number[]) =>
  _.filter(videos, ({genre_id}: {genre_id: number}) => {
    return _.includes(genres, genre_id);
  });

export const selectVideosByTitle = (videos: IVideo[], name: string) =>
  videos.filter(({title}: {title: string}) => {
    return title.toLowerCase().match(name);
  });

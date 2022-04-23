import AlbumReducer from '../src/store/reducers/AlbumReducer';
import {SET_ALBUM} from '../src/store/types';

const fakeData = {
  genres: [
    {id: 5, name: 'Pop'},
    {id: 6, name: 'Electronic/Dance'},
    {id: 8, name: 'Rock'},
  ],
  videos: [
    {
      id: 501437,
      artist: 'Pants Velour',
      title: 'All In',
      release_year: 2014,
      genre_id: 14,
      image_url:
        'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg',
    },
    {
      id: 501649,
      artist: 'El Koala',
      title: 'Veni paca to',
      release_year: 2014,
      genre_id: 8,
      image_url:
        'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501649/images/app/w522_h292.jpg',
    },
  ],
};

test('should return the initial state', () => {
  expect(
    AlbumReducer(undefined, {
      type: SET_ALBUM,
      album: fakeData,
    }),
  ).toEqual({
    videos: fakeData.videos,
    genres: fakeData.genres,
  });
});

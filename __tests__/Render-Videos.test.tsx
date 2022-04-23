import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureStore from 'redux-mock-store';

import {Provider} from 'react-redux';
import {RenderVideos} from '../src/components';

configure({adapter: new Adapter()});

const mockStore = configureStore([]);

const initialState = {};

const fakeVideo = [
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
];

describe('Testing RenderVideos component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Provider store={mockStore(initialState)}>
        <RenderVideos videos={fakeVideo} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

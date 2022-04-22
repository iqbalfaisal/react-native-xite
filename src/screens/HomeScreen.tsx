import * as React from 'react';
import {Center} from 'native-base';

import {useDispatch, useSelector} from 'react-redux';
import {fetchAlbum, videosSelector} from '../store';
import {RenderVideos} from '../components';
import {TDispatch} from '../store/types';

export default function HomeScreen() {
  const videos = useSelector(videosSelector);

  const dispatch = useDispatch<TDispatch>();

  React.useEffect(() => {
    dispatch(fetchAlbum());
  });

  return (
    <Center flex={1}>
      <RenderVideos videos={videos} />
    </Center>
  );
}

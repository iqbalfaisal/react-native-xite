import * as React from 'react';
import {Center, Input} from 'native-base';

import {useDispatch, useSelector} from 'react-redux';
import {fetchAlbum, selectVideos} from '../store';
import {RenderVideos} from '../components';
import {TDispatch} from '../store/types';

export default function HomeScreen() {
  const videos = useSelector(selectVideos);

  const dispatch = useDispatch<TDispatch>();

  React.useEffect(() => {
    dispatch(fetchAlbum());
  }, []);

  return (
    <Center flex={1}>
      <Input size="xl" mt="20" placeholder="Search" />
      <RenderVideos videos={videos} />
    </Center>
  );
}

import * as React from 'react';
import {FlatList} from 'react-native';
import {VideoCard} from '.';
import {IVideo} from '../store/types';

type IRenderNotes = {
  videos: IVideo[];
};

export default function RenderNotes({videos}: IRenderNotes) {
  return (
    <FlatList
      style={{width: '100%', padding: 4}}
      data={videos}
      renderItem={({item}) => <VideoCard video={item} />}
      keyExtractor={video => video.id.toString()}
    />
  );
}

import React, {useEffect, useMemo, useState} from 'react';
import {Center, Input} from 'native-base';
import MultiSelect from 'react-native-multiple-select';
import {useDispatch, useSelector} from 'react-redux';

import {
  fetchAlbum,
  selectGenres,
  selectVideos,
  selectVideosByGenres,
  selectVideosByTitle,
} from '../store';
import {RenderVideos} from '../components';
import {TDispatch} from '../store/types';
import {View} from 'react-native';

export default function HomeScreen() {
  const videos = useSelector(selectVideos);
  const genres = useSelector(selectGenres);

  const [selectedGenres, setSelectedGenres] = useState([] as number[]);
  const [search, setSearch] = useState('');

  const filterVideosByGenres = useMemo(
    () => selectVideosByGenres(videos, selectedGenres),
    [videos, selectedGenres],
  );

  const filterVideos = useMemo(
    () => selectVideosByTitle(filterVideosByGenres, search),
    [filterVideosByGenres, search],
  );

  const dispatch = useDispatch<TDispatch>();

  useEffect(() => {
    dispatch(fetchAlbum());
  }, []);

  const onSelectedItemsChange = (selectedItems: number[]) => {
    setSelectedGenres(selectedItems);
  };

  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <Center safeAreaTop flex={1}>
      <View style={{width: '100%'}}>
        <Input
          value={search}
          onChangeText={onSearch}
          size="xl"
          placeholder="Search genres by title..."
        />
        <MultiSelect
          hideTags
          items={genres}
          uniqueKey="id"
          onSelectedItemsChange={onSelectedItemsChange}
          selectedItems={selectedGenres}
          selectText="Genres"
          searchInputPlaceholderText="Search Genres..."
          displayKey="name"
          searchInputStyle={{height: 60}}
        />
      </View>
      <RenderVideos
        videos={
          search !== '' || filterVideos.length > 0 ? filterVideos : videos
        }
      />
    </Center>
  );
}

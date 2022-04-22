import * as React from 'react';
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from 'native-base';
import {IVideo} from '../store/types';

type IVideoCard = {
  video: IVideo;
};

export default function NoteCard({video}: IVideoCard) {
  const {artist, release_year, title, image_url} = video;
  return (
    <Box alignItems="center">
      <Box overflow="hidden">
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: image_url,
              }}
              alt="image"
            />
          </AspectRatio>
        </Box>
        <Stack p="2" space={2}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {title}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1">
              {artist}
            </Text>
          </Stack>
          <HStack alignItems="center" space={2} justifyContent="space-between">
            <HStack alignItems="center">
              <Text color="coolGray.600" fontWeight="400">
                {release_year}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}

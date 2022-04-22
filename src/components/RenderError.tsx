import {Toast} from 'native-base';

const RenderError = (error: string) => {
  Toast.show({
    title: error,
    placement: 'bottom',
  });
};

export default RenderError;

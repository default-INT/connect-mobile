import { Dimensions, PixelRatio } from 'react-native';

// For iPhone 6/7/8 in portrait orientation.
const MIN_SCREEN_WIDTH = 375;
// iPhone X/XS/11 Pro device in portrait orientation
const MAX_SCREEN_HEIGHT = 812;
const { width, height } = Dimensions.get('window');
const scaleHorizontal = width / MIN_SCREEN_WIDTH;
const scaleVertical = height / MAX_SCREEN_HEIGHT;

// eslint-disable-next-line max-len
// https://medium.com/@HelloMoto69/react-native-responsive-scaling-font-dimensions-pixels-5dcccd8f7124
export const scale = (size: number, scaleSize: number) => {
  const newSize = size * scaleSize;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const scaleWidth = (size: number) => scale(size, scaleHorizontal);
const scaleHeight = (size: number) => scale(size, scaleVertical);

export const s = {
  width: scaleWidth,
  height: scaleHeight,
  max: (size: number) => {
    const scaledWidth = scaleWidth(size);
    const scaledHeight = scaleHeight(size);

    if (scaledWidth > scaledHeight) return scaledWidth;

    return scaledHeight;
  },
  min: (size: number) => {
    const scaledWidth = scaleWidth(size);
    const scaledHeight = scaleHeight(size);

    if (scaledWidth > scaledHeight) return scaledHeight;

    return scaledWidth;
  },
};

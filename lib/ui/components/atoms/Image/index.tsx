import type {ImageSourcePropType, StyleProp, ImageStyle} from 'react-native';
import React from 'react';
import Animated, {AnimatedStyle, SharedValue} from 'react-native-reanimated';

type Props = {
  source:
    | ImageSourcePropType
    | SharedValue<ImageSourcePropType | undefined>
    | undefined;
  style: StyleProp<AnimatedStyle<StyleProp<ImageStyle>>>;
  heroTag?: string;
};

const ImageAnimated: React.FC<Props> = ({source, style, heroTag}) => {
  return (
    <Animated.Image
      sharedTransitionTag={heroTag}
      source={source}
      style={style}
    />
  );
};

export default ImageAnimated;

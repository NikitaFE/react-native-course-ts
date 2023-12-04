import { FC, PropsWithChildren } from 'react';
import {
  Pressable,
  PressableAndroidRippleConfig,
  ViewStyle,
} from 'react-native';
import { styles } from './CustomTouchable.styles';
import { COLORS } from '../../theme/colors';

type CustomTouchableProps = {
  outerStyles?: ViewStyle;
  androidRipple?: PressableAndroidRippleConfig;
  onPress: () => void;
};

const CustomTouchable: FC<PropsWithChildren<CustomTouchableProps>> = ({
  outerStyles = {},
  androidRipple,
  children,
  onPress,
}) => {
  return (
    <Pressable
      android_ripple={
        androidRipple ?? { color: COLORS.black, borderless: true }
      }
      style={({ pressed }) => [pressed && styles.pressed, outerStyles]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};

export default CustomTouchable;

import { FC, ReactNode } from 'react';
import { TextInput, View, ViewStyle } from 'react-native';
import { styles } from './Input.styles';
import CustomTouchable from '../CustomTouchable/CustomTouchable';
import { COLORS } from '../../theme/colors';

type InputProps = {
  value: string;
  placeholder: string;
  outerStyles?: ViewStyle;
  icon?: ReactNode;
  onIconPress?: () => void;
  onChangeText: (value: string) => void;
};

const Input: FC<InputProps> = ({
  value,
  placeholder,
  icon,
  outerStyles = {},
  onIconPress,
  onChangeText,
}) => {
  const renderIcon = () => {
    if (!icon) return null;

    if (onIconPress) {
      return <CustomTouchable onPress={onIconPress}>{icon}</CustomTouchable>;
    }

    return icon;
  };

  return (
    <View style={[styles.wrapper, outerStyles]}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={COLORS.placeholder}
        onChangeText={onChangeText}
      />
      {renderIcon()}
    </View>
  );
};

export default Input;

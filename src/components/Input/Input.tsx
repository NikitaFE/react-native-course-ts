import { FC, ReactNode } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './Input.styles';

type InputProps = {
  value: string;
  placeholder: string;
  icon: ReactNode;
  onChangeText: (value: string) => void;
};

const Input: FC<InputProps> = (props) => {
  const { value, placeholder, onChangeText } = props;

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#b2bec3"
        onChangeText={onChangeText}
      />
      {props.icon}
    </View>
  );
};

export default Input;

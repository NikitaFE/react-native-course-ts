import { StyleSheet } from 'react-native';
import { COLORS } from './src/theme/colors';

export const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

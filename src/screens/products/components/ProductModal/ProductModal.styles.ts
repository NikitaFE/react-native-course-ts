import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/colors';

export const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.modalOverlay,
  },
  modal: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  title: {
    alignSelf: 'flex-start',
    marginBottom: 16,
    fontSize: 28,
    fontWeight: '700',
  },
  slide: {
    width: 300,
    height: 600,
    alignSelf: 'center',
  },
});

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
    width: 160,
    padding: 20,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  title: {
    marginBottom: 16,
    fontSize: 20,
    fontWeight: '700',
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  button: {
    alignSelf: 'flex-end',
  },
});

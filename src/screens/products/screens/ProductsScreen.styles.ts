import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomLoader: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  drawerButton: {
    position: 'absolute',
    top: '50%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: COLORS.red,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 1,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
});

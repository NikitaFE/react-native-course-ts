import { StyleSheet } from 'react-native';
import { COLORS } from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cartBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: COLORS.white,
  },
  totalSum: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
  sumTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  sumCount: {
    fontSize: 16,
  },
  checkoutButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.green,
    borderRadius: 6,
  },
  checkoutButtonText: {
    marginLeft: 'auto',
    fontWeight: '700',
    color: COLORS.white,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    marginBottom: 16,
  },
});

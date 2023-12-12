import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    marginBottom: 8,
    borderRadius: 16,
  },
  titleWrapper: {
    alignSelf: 'flex-start',
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: '700',
  },
  newLabel: {
    position: 'absolute',
    top: -10,
    right: -25,
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: COLORS.red,
    borderRadius: 2,
    transform: 'rotate(15deg)',
  },
  newLabelText: {
    fontWeight: '700',
    color: COLORS.white,
  },
  description: {
    flex: 1,
    marginBottom: 16,
  },
  productsBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prices: {
    flexDirection: 'row',
    gap: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
  },
  oldPrice: {
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.green,
    borderRadius: 4,
  },
  buyText: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.white,
  },
});

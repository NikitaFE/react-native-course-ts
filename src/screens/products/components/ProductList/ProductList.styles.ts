import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  productsWrapper: {
    flex: 1,
    paddingHorizontal: 16,
    marginHorizontal: -16,
    overflow: 'hidden',
  },
  productList: {
    overflow: 'visible',
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  empty: {
    textAlign: 'center',
  },
});

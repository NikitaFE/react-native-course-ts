import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  search: {
    marginBottom: 16,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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

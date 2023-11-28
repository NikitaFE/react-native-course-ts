import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#a8a8a8',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  newLabel: {
    position: 'absolute',
    top: -10,
    right: -7,
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: '#e84118',
    borderRadius: 2,
  },
  newLabelText: {
    fontWeight: '700',
    color: '#ffffff',
  },
  productDetails: {
    flex: 1,
  },
  productTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
    marginBottom: 12,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
  },
  prices: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
  oldPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
  },
  productBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  description: {
    flex: 1,
  },
  buyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#4cd137',
    borderRadius: 4,
  },
  buyText: {
    fontWeight: '700',
    color: '#ffffff',
  },
});

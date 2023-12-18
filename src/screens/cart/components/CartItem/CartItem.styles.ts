import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../theme/colors';

export const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    shadowColor: COLORS.defaultShadow,
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
  info: {
    flex: 1,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    gap: 16,
  },
  infoTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  infoBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
  },
  countWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  countButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 6,
  },
  countButtonDisabled: {
    borderColor: COLORS.lightGray,
  },
  countButtonIncrease: {
    borderColor: COLORS.blue,
  },
  countButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  countButtonTextDisabled: {
    color: COLORS.lightGray,
  },
  countButtonTextIncrease: {
    color: COLORS.blue,
  },
  count: {
    fontSize: 16,
  },
});

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  swiper: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  slider: {
    marginBottom: 16,
  },
  dots: {
    height: 14,
  },
  dot: {
    width: 12,
    height: 12,
    marginHorizontal: 4,
    backgroundColor: 'gray',
    borderRadius: 6,
  },
  activeDot: {
    backgroundColor: 'black',
  },
});

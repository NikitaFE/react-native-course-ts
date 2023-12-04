import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 16,
    minHeight: 44,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
});

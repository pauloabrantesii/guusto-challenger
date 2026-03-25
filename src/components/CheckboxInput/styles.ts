import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#6C63FF',
  },
  unchecked: {
    backgroundColor: 'transparent',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

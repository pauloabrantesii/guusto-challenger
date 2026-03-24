import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    flex: 1,
    fontSize: 15,
    color: '#1A1A2E',
    marginLeft: 12,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#A0A0A0',
  },
});

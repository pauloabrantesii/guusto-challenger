import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textBlock: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    color: '#1F2937',
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
    fontWeight: '500',
  },
  meta: {
    marginTop: 6,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
    color: '#9CA3AF',
  },
  metaCompleted: {
    color: '#B8BCC4',
  },
  checkboxWrap: {
    paddingTop: 2,
  },
});

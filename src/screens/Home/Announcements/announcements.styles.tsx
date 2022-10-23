import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 12,
    marginTop: 36,
  },
  heading: {
    fontSize: 14,
    fontWeight: '600',
  },
  announcementItem: {
    paddingHorizontal: 6,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#72C9E7',
    borderWidth: 2,
    marginVertical: 4,
    alignItems: 'flex-end',
    borderRadius: 6,
  },
  announcement: {
    fontSize: 12,
  },
  madeBy: {
    fontSize: 10,
  },
  announcementWrapper: {
    maxHeight: 142,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  heading: {
    fontSize: 14,
    fontWeight: '600',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginVertical: 16,
  },
  icon: {
    height: 30,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

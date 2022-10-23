import React, {ReactNode} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ScreenWrapper = ({children}: {children: ReactNode}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  wrapper: {
    flex: 1,
  },
});

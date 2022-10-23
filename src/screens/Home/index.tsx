import React from 'react';
import {StyleSheet} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import Announcements from './Announcements';
import HomiesDisplay from './HomiesDisplay';

const Home = () => {
  return (
    <ScreenWrapper>
      <HomiesDisplay />
      <Announcements />
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});

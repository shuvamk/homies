import React from 'react';

import ScreenWrapper from '../../components/ScreenWrapper';
import Announcements from './Announcements';
import HomiesDisplay from './HomiesDisplay';
import QuickActions from './QuickActions';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <ScreenWrapper>
      <HomiesDisplay />
      <QuickActions navigation={navigation} />
      <Announcements />
    </ScreenWrapper>
  );
};

export default Home;

import React from 'react';

import ScreenWrapper from '../../components/ScreenWrapper';
import Announcements from './Announcements';
import HomiesDisplay from './HomiesDisplay';
import QuickActions from './QuickActions';

const Home = () => {
  return (
    <ScreenWrapper>
      <HomiesDisplay />
      <QuickActions />
      <Announcements />
    </ScreenWrapper>
  );
};

export default Home;

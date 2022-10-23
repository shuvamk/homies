import {FlatList, Text, View} from 'react-native';
import React from 'react';
import Avatar from '../../../components/Avatar';

import styles from './homiesDisplay.style';

const HOMIES = [
  {
    id: 1,
    name: 'Shuvam',
    avatar: require('../../../assets/homies/avatar1.png'),
  },
  {
    id: 2,
    name: 'Bodmas',
    avatar: require('../../../assets/homies/avatar2.png'),
  },
  {
    id: 3,
    name: 'Chora',
    avatar: require('../../../assets/homies/avatar3.png'),
  },
  {
    id: 4,
    name: 'Bumper',
    avatar: require('../../../assets/homies/avatar4.png'),
  },
];

const HomiesDisplay = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Hi, Shuvam</Text>
      <FlatList
        horizontal={true}
        data={HOMIES}
        renderItem={homie => <Avatar homie={homie.item} />}
        contentContainerStyle={styles.avatarList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomiesDisplay;

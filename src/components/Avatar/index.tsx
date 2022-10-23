import {Image, Text, View} from 'react-native';
import React from 'react';
import {Homie} from '../../common/types';
import styles from './avatar.styles';

const Avatar = (props: {homie: Homie}) => {
  const {homie} = props;

  return (
    <View style={styles.wrapper}>
      <Image source={homie.avatar} style={styles.avatarImage} />
      <Text style={styles.avatarName}>{homie.name}</Text>
    </View>
  );
};

export default Avatar;

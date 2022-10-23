import {FlatList, Text, View} from 'react-native';
import React from 'react';
import styles from './announcements.styles';
import {Announcement} from '../../../common/types';

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    announcement: 'Bijli ka bill bhar dena before 13th',
    madeBy: 'Shuvam',
  },
  {
    id: 2,
    announcement: 'Bijli ka bill bhar dena before 13th',
    madeBy: 'Shuvam',
  },
  {
    id: 3,
    announcement: 'Bijli ka bill bhar dena before 13th',
    madeBy: 'Shuvam',
  },
  {
    id: 4,
    announcement: 'Bijli ka bill bhar dena before 13th',
    madeBy: 'Shuvam',
  },
  {
    id: 5,
    announcement: 'Bijli ka bill bhar dena before 13th',
    madeBy: 'Shuvam',
  },
  {
    id: 6,
    announcement: 'Bijli ka bill bhar dena before 13th',
    madeBy: 'Shuvam',
  },
  {
    id: 7,
    announcement: 'Bijli ka bill bhar dena before 13th',
    madeBy: 'Shuvam',
  },
  {
    id: 8,
    announcement: 'Bijli ka bill bhar dena before 13th',
    madeBy: 'Shuvam',
  },
  {
    id: 9,
    announcement: 'Bijli ka bill bhar dena before 13th',
    madeBy: 'Shuvam',
  },
];

const AnnouncementItem = (props: {announcement: Announcement}) => {
  const {announcement} = props;
  return (
    <View style={styles.announcementItem}>
      <Text style={styles.announcement}>{announcement.announcement}</Text>
      <Text style={styles.madeBy}>{announcement.madeBy}</Text>
    </View>
  );
};

const Announcements = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Announcements</Text>
      <FlatList
        data={ANNOUNCEMENTS}
        renderItem={item => <AnnouncementItem announcement={item.item} />}
        contentContainerStyle={styles.announcementWrapper}
      />
    </View>
  );
};

export default Announcements;

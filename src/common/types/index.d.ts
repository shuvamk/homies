import {ImageSourcePropType} from 'react-native';

export type Homie = {
  id: string | number;
  name: string;
  avatar: ImageSourcePropType;
};

export type Announcement = {
  id: string | number;
  announcement: string;
  madeBy: string;
};

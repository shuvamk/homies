import {StyleSheet, Text, View} from 'react-native';
import React, {ReactNode} from 'react';
import styles from './header.style';

const Header = (props: HeaderProps) => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};

type HeaderProps = {
  showBackBtn?: boolean;
  title: string;
  rightNode?: ReactNode;
};

export default Header;

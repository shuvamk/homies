import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import styles from './shopping.styles';

const ShoppingList = () => {
  return (
    <ScreenWrapper>
      <View style={styles.headingWrapper}>
        <Text>Shopping</Text>
        <Button
          btnText="Add New"
          onPress={() => 'New Item Added'}
          type="secondary"
        />
      </View>
    </ScreenWrapper>
  );
};

export default ShoppingList;

import {Image, Text, View} from 'react-native';
import React from 'react';
import Button from '../../../components/Button';
import styles from './quickActions.style';
import Lottie from 'lottie-react-native';

const QuickActions = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Quick Actions</Text>
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Button
            type="primary"
            btnText="Shopping List"
            onPress={() => console.log('EXPENSE BUTTON')}
            topNode={
              <Image
                style={styles.icon}
                source={require('./assets/shopping.png')}
              />
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            type="primary"
            btnText="Split Expense"
            onPress={() => console.log('EXPENSE BUTTON')}
            topNode={
              <Image
                style={styles.icon}
                source={require('./assets/shopping.png')}
              />
            }
          />
        </View>
        <View style={styles.button}>
          <Button
            type="primary"
            btnText="Add Task"
            onPress={() => console.log('Add Task Button')}
            topNode={
              <Image
                style={styles.icon}
                source={require('./assets/shopping.png')}
              />
            }
          />
        </View>
      </View>
    </View>
  );
};

export default QuickActions;

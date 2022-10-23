import {Image, Text, View} from 'react-native';
import React from 'react';
import Button from '../../../components/Button';
import styles from './quickActions.style';

const QuickActions = (props: any) => {
  const {navigation} = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Quick Actions</Text>
      <View style={styles.buttonWrapper}>
        <View style={styles.button}>
          <Button
            type="primary"
            btnText="Shopping List"
            onPress={() => navigation.navigate('Shopping')}
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
            onPress={() => navigation.navigate('Expenses')}
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
            onPress={() => navigation.navigate('Tasks')}
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

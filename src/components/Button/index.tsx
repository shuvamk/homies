import {Image, ImageSourcePropType, Text, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import styles from './button.style';

const Button = (props: ButtonProps) => {
  const {btnText, onPress, type, topNode} = props;

  const getButtonStyles = () => {
    switch (type) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'tertiary':
        return styles.tertiary;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} style={getButtonStyles()}>
      {topNode}
      <Text>{btnText}</Text>
    </TouchableOpacity>
  );
};

type ButtonProps = {
  btnText: string;
  onPress: () => void;
  topNode?: ReactNode;
  leftNode?: ReactNode;
  rightNode?: ReactNode;
  BottomNode?: ReactNode;
  type: 'primary' | 'secondary' | 'tertiary';
};

export default Button;

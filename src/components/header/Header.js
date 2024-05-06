import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = props => {

  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <Text style={styles.textLeftStyle }>
          {props.titleLeft}
        </Text>
        <TouchableOpacity onPress={props.onPress}>
          <Text style={styles.textRightStyle}>
            {props.titleRight}
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Header;

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const TextLabel = props => {

  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <Text style={[styles.textLeftStyle, props.textStyle]}>
          {props.titleLeft}
        </Text>
        <TouchableOpacity onPress={props.onPress} >
          <Text style={[styles.textRightStyle, props.textStyle]}>
            {props.titleRight}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextLabel;

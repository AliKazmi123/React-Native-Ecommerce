import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './styles';
const PrimaryButton = ({ onPress, title, loading, buttonContainerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.container}>
        <View style={[styles.buttonContainer, buttonContainerStyle]}>
          {loading == true ?
            (
              <View style={styles.loaderView}>
                <ActivityIndicator
                  size="small"
                  color={'#FFF'} />
              </View>
            )
            : (
              <Text style={styles.textStyle}>
                {title}
              </Text>
            )}
        </View>
      </View>
    </TouchableOpacity>

  );
};

export default PrimaryButton;

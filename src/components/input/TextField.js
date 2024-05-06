import React from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const TextField = ({ title, password = false, value, onChangeText, icon, errorText, shouldShowError = false, onPress, keyBoardType = 'default', maxLength, enabled = true }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sectionStyle}>
        <TextInput
          style={styles.textInputStyle}
          placeholder={title}
          underlineColorAndroid="transparent"
          secureTextEntry={password}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyBoardType}
          maxLength={maxLength}
          placeholderTextColor={'rgba(0, 0, 0, 0.6)'}
          editable={enabled}
        />
        {icon ?
          <TouchableOpacity onPress={enabled ? onPress: null} >
            <Image
              source={icon}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
          :
          null
        }
      </View>
      {
        errorText || shouldShowError ?
          <Text style={shouldShowError ? styles.textErrorStyle : styles.textUnderlineStyle}>
            {errorText}
          </Text>
          : null
      }
    </View>
  );
};

export default TextField;

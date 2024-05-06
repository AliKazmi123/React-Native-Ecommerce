import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { RadioButton } from 'react-native-paper';
const PostRadioButton = props => {

	return (
		<View style={styles.radioContainer} >
			<View style={styles.radioButtonStyle}>
				<RadioButton
					value={props.title}
					status={props.checked ? 'checked' : 'unchecked'}
					onPress={props.onPress}
					color={'black'}
					uncheckedColor={'black'}
				/>
				<Text style={styles.radioTextStyle} >{props.title}</Text>
			</View>
		</View>

	);
};

export default PostRadioButton;

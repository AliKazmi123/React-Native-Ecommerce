import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Alert, TextInput, TouchableWithoutFeedback, Modal } from 'react-native';
import { TextField } from '../../../../components';
import { connect } from 'react-redux';
import { Header } from '../../../../components';
import { PrimaryButton } from '../../../../components';
import { TextLabel } from '../../../../components';
import { validatorRegister } from '../../../../utils/validators';
import styles from '../../styles';
import { strings } from '../../../../res';
import { signUpWithEmail } from '../../../../modules/actions';
import { useDispatch } from "react-redux";
import { moduleSelector } from '../../../../modules/selectors';

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SignUp = ({ navigation, module }) => {

	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState(null);
	const dispatch = useDispatch();

	useEffect( () => {
		setLoading(module?.loading)
	}, [module?.loading])

	const register = () => {
		const errors = validatorRegister(email, password, name);
		if (errors && errors.size > 0) {
			setErrors(errors.toJS());
		} else {
			setLoading(true)
			setErrors(null);
			const signUpData = {
				name: name,
				email: email,
				password: password,
			}
			dispatch(signUpWithEmail(signUpData));
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView style={styles.keyboardAvoidingView}>
				<ScrollView >
					<Header titleLeft={strings.register} />
					<View style={styles.sectionContainer}>
						<TextField title={strings.name}
							value={name}
							onChangeText={text => setName(text)}
							errorText={errors?.name}
							shouldShowError={errors && errors.name}
						/>

						<TextField title={strings.email}
							value={email}
							onChangeText={text => setEmail(text)}
							errorText={errors?.email}
							shouldShowError={errors && errors.email}
							keyBoardType={'email-address'}
						/>

						<TextField
							title={strings.password}
							password={true}
							value={password}
							onChangeText={text => setPassword(text)}
							errorText={errors && errors.password ? errors.password : strings.password_validation}
							shouldShowError={errors && errors.password}
						/>

					</View>
					<PrimaryButton
						title={strings.register}
						onPress={() => register()}
						buttonContainerStyle={{ marginTop: hp('5.5%') }}
						loading={loading}
					/>

					<TextLabel
						titleLeft={strings.already_have_an_account}
						titleRight={strings.sign_in}
						onPress={() => navigation.navigate('Login')}
						textStyle={{ color: 'rgba(0, 0, 0, 0.6)' }}
					/>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}


function mapStateToProps(state) {
	return {
		module: moduleSelector(state),
	}
}

function mapDispatchToProps(dispatch) {
	return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
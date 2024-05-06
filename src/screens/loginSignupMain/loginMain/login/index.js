import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, View, KeyboardAvoidingView  } from 'react-native';
import FlashMessage from "react-native-flash-message";

import { connect } from 'react-redux';
import { Header, PrimaryButton, TextLabel, TextField } from '../../../../components';
import { validatorSignIn } from '../../../../utils/validators';
import styles from '../../styles';
import { strings } from '../../../../res';
import { signInWithEmail } from '../../../../modules/actions';
import { useDispatch } from "react-redux";
import { moduleSelector } from '../../../../modules/selectors';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const Login = ({ navigation, module }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false)
	const [errors, setErrors] = useState(null);
	const dispatch = useDispatch();

	useEffect( () => {
		setLoading(module?.loading)
	}, [module?.loading])

	const signIn = () => {
		const errors = validatorSignIn(email, password);
		if (errors && errors.size > 0) {
			setErrors(errors.toJS());
		} else {
			setLoading(true);
			setErrors(null);
			const signindata = {
				email: email,
				password: password,
			}
			dispatch(signInWithEmail(signindata));
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView style={styles.keyboardAvoidingView}>
				<ScrollView>
					<Header titleLeft={strings.sign_in} />
					<View style={styles.sectionContainer}>
						<TextField
							title={strings.email}
							value={email}
							onChangeText={(text) => setEmail(text)}
							errorText={errors?.email}
							shouldShowError={errors && errors.email}
							keyBoardType={'email-address'}
						/>
						<TextField
							title={strings.password}
							password
							value={password}
							onChangeText={(text) => setPassword(text)}
							errorText={errors && errors.password ? errors.password : strings.password_validation}
							shouldShowError={errors && errors.password}
						/>
					</View>
					<PrimaryButton
						title={strings.sign_in}
						onPress={() => signIn()} 
						buttonContainerStyle={{marginTop: hp('5.5%')}}
						loading={loading}
						/>
					<TextLabel
						titleLeft={strings.new_here}
						titleRight={strings.register}
						onPress={() => navigation.navigate('SignUp')}
						textStyle={{color: 'rgba(0, 0, 0, 0.6)'}}
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
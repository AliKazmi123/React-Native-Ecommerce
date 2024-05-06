import React, { useState } from 'react';
import { ScrollView, SafeAreaView, Text, View, TouchableOpacity, Image, KeyboardAvoidingView, Alert, TextInput, TouchableWithoutFeedback, Modal } from 'react-native';
import { TextField } from '../../../components';
import { connect } from 'react-redux';
import { Header } from '../../../components';
import { PrimaryButton } from '../../../components';
import { uploadIcon } from '../../../utils/imagesPath'
import { PostRadioButton } from '../../../components';
import styles from './styles';
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from "react-redux";
import strings from '../../../res/strings';
import { RadioButton } from 'react-native-paper';
import { userSelector } from '../../../modules/selectors';
import { createPost } from '../../../modules/actions';
import { useDispatch } from "react-redux";
import { showMessage } from 'react-native-flash-message';

const Create = ({ navigation, user }) => {
	const [imageUrl, setImageUrl] = useState()
	const [imageName, setImageName] = useState()
	const [postVisibility, setPostVisibility] = React.useState('public')
	const [title, setTitle] = useState('title1')
	const [description, setDescription] = useState('description1')
	const [price, setPrice] = useState(10)
	const dispatch = useDispatch();

	const uploadPhoto = () => {
		ImagePicker.openPicker({
			width: 300,
			height: 400,
			cropping: true
		}).then(image => {
			setImageUrl(image.path)
			setImageName(image.filename)
		});
	}

	const createNewPost = () => {
		if (!user || user.uid || !title || !description || !price) {
			showMessage({
				message: strings.enter_valid_data,
				type: 'danger',
			  });
			return;
		}
		dispatch(createPost(user?.uid, title, description, price, postVisibility, imageUrl))
	}
	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView style={styles.keyboardAvoidingView}>
				<ScrollView>
					<Header
						titleLeft={strings.no_post}
						titleRight={strings.cancel}
						onPress={() => navigation.goBack()} />

					<View style={styles.sectionContainer}>
						<TextField
							title={strings.title}
							maxLength={160}
							value={title}
							onChangeText={(text) => setTitle(text)}
						/>

						<TextField
							title={strings.description}
							maxLength={500}
							value={description}
							onChangeText={(text) => setDescription(text)}
						/>

						<TextField
							title={strings.price}
							keyBoardType={'numeric'}
							value={price}
							onChangeText={(number) => setPrice(number)} />

						<TextField
							title={strings.upload_photo}
							icon={uploadIcon}
							value={imageName}
							onPress={uploadPhoto}
							enabled={false}
						/>
						<View style={{ flexDirection: "row", alignItems: 'center' }}>
							<RadioButton.Group
								onValueChange={postVisibility => setPostVisibility(postVisibility)}
								value={postVisibility}
								>
								<RadioButton.Item
									label={strings.public}
									value="public"
									color='black'
									uncheckedColor='black'
									status={postVisibility === 'public' ? 'checked' : 'unchecked'}
									style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }}
								/>
								<RadioButton.Item
									label={strings.private}
									value="private"
									color='black'
									uncheckedColor='black'
									status={postVisibility === 'private' ? 'checked' : 'unchecked'}
									style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }}
									/>
							</RadioButton.Group>
						</View>
					</View>
					<PrimaryButton
						onPress={() => createNewPost()}
						title={strings.btn_create_post}
					/>
				</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
}


function mapStateToProps(state) {
	return {
		user: userSelector(state)
	}
}

function mapDispatchToProps(dispatch) {
	return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
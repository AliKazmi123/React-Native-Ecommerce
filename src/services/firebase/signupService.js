
import auth from '@react-native-firebase/auth'
import { createUserService } from './createUserService';

export async function signupService({name, email, password}) {
    try {
		await auth().createUserWithEmailAndPassword(email, password);
		let user = auth().currentUser;
		createUserService(user.uid, name, email);
		return {
			user: user
		};
	} catch (e) {
		return null;
	}
}
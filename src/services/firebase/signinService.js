import auth from '@react-native-firebase/auth'

export async function signInService({email, password}) {
    try {
        await auth().signInWithEmailAndPassword(email, password);
        let user = auth().currentUser;
        return {
            user: user
        };
    } catch (e) {
        return null;
    }
}
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export async function createNewPostService(post) {
    try {
        await firestore()
        .collection('Posts')
        .add(post)
    } catch (e) {
        return null;
    }
}
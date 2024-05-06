
import firestore from '@react-native-firebase/firestore';

const FetchComments = (postId) => {
        return firestore()
            .collection('Posts')
            .doc(postId)
            .collection('Comments')
            .get()
            .then(commentsSnapshot => {
                return commentsSnapshot.docs;
            });
}

export default FetchComments

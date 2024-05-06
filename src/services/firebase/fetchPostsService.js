

import { useDispatch } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { setPosts } from '../../modules/actions';

export const fetchPostsService = async () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var createdTime = date + " , " + time;
    let postsList = [];
    return await firestore()
        .collection('Posts')
        .where('postVisibility', '==', 'public')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const post = {
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    price: doc.data().price,
                    postVisibility: doc.data().postVisibility,
                    postCreatorId: doc.data().postCreatorId,
                    imageURL: doc.data().imageURL,
                    comments: 0
                };
                postsList.push(post);
            });
            return { 
                posts: postsList
            };
        });

}
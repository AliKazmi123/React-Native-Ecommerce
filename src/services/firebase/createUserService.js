import firestore from '@react-native-firebase/firestore';

export const createUserService = async (uid, name, email) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var createdTime = date + " , " + time;
    await firestore()
        .collection('Users')
        .doc(uid)
        .set({
            name: name,
            email: email,
            createdTime: createdTime
        })
}

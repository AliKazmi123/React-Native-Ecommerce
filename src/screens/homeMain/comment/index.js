import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, SafeAreaView, View, KeyboardAvoidingView, FlatList, Text, Pressable } from 'react-native';
import { connect } from 'react-redux';
import { Header } from '../../../components';
import styles from './styles';
import { PostCard } from '../../../components';
import { TextField } from '../../../components';
import { CommentCard } from '../../../components';
import { useSelector } from "react-redux";
import { send } from '../../../utils/imagesPath';
import { useDispatch } from 'react-redux';
import strings from '../../../res/strings';

const Comment = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const item = route.params;
    const comments = useSelector((state) => state?.comments);
    const [message, setMessage] = useState("");

    const [image, setImage] = useState(require('../../../assets/images/no_image.png'))

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.keyboardAvoidingView}>
                <ScrollView >
                    <Header
                        titleLeft={strings.comment}
                        titleRight={strings.home}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={styles.sectionContainer}>
                        <PostCard
                            title={item?.title}
                            description={item?.description}
                            totalComments={comments?.length}
                            price={item?.price}
                            photo={item?.imageUrl !== '' ? item.imageUrl : image}
                            />
                        <TextField
                            title={strings.write_your_message}
                            value={message}
                            onChangeText={(text) => setMessage(text)}
                            icon={message != '' ? send : null}
                            onPress={() => {}}
                        />
                    </View>
                    <FlatList
                        data={comments}
                        extraData={comments}
                        renderItem={({ index, item }) => {
                            return (
                                <CommentCard
                                    title={item.name}
                                    comment={item.message}
                                />
                            )
                        }}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
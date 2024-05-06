import React, { useEffect, useState } from 'react';
import { ScrollView, SafeAreaView, View, KeyboardAvoidingView, FlatList, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Header } from '../../../components';
import styles from './styles';
import { PostCard } from '../../../components';
import { useSelector } from "react-redux";
import fetchPostsService from '../../../services/firebase/fetchPostsService';
import { fetchAllPosts } from '../../../modules/actions';
import { strings } from '../../../res';
import { useDispatch } from "react-redux";
import { postsSelector } from '../../../modules/selectors';

const Home = ({ navigation, posts }) => {
	const [image, setImage] = useState(require('../../../assets/images/no_image.png'))
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch();

	useEffect (()=> {
		setLoading(true);
		dispatch(fetchAllPosts());
	}, []);

	useEffect (()=> {
		setLoading(false);
	}, [posts]);

	const fetchComments = (item) => {
		navigation.navigate('Comment', item)
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.sectionContainer}>
				<Header
					titleLeft={strings.feed}
					titleRight={strings.create_post}
					onPress={() => navigation.navigate('Create')} />
				{
					loading ?
						<View style={styles.loaderContainer}>
							<ActivityIndicator />
						</View>
						:
						posts?.length > 0
					?
					<FlatList
						data={posts}
						renderItem={({ index, item }) => {
							return (
								<PostCard
									title={item?.title || strings.no_title}
									description={item?.description}
									totalComments={item?.comments}
									price={item?.price}
									photo={item?.imageUrl !== '' ? item?.imageUrl : image}
									onPress={() => fetchComments(item)}
								/>
							)
						}}
					/>
					:
					<View style={styles.noDataContainer}>
						<Text style={styles.noData}>{strings.no_data}</Text>
					</View>
					}
			</View>
		</SafeAreaView>
	);
}


function mapStateToProps(state) {
	return {
		posts: postsSelector(state),
	}
}

function mapDispatchToProps(dispatch) {
	return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
import React from 'react';
import { View, Image, TouchableOpacity, Text, Dimensions } from 'react-native'
import { Card } from 'react-native-paper';
import { comment } from '../../utils/imagesPath';
import styles from './styles'

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height

const PostCard = ({ title, description, totalComments, price, onPress, photo }) => {
    return (
        <View style={styles.container}>
            <Card style={styles.cardContainer}>
                <Card.Actions style={styles.titleContainer}>
                    <Text
                        style={styles.titleText}
                        adjustsFontSizeToFit  >
                        {title}</Text>
                </Card.Actions>

                <Card.Cover source={{ uri: photo }} />
                <Card.Actions style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}  >
                        {description}
                    </Text>
                </Card.Actions>


                <Card.Actions >
                    <View style={styles.bottomView}>
                        <TouchableOpacity onPress={onPress}>

                            <View style={styles.commentView}>

                                <Image
                                    source={comment}
                                    style={styles.iconView}
                                />
                                <Text style={styles.commentText}> {totalComments} comments</Text>
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.priceText} >${price} USD</Text>
                    </View>

                </Card.Actions>
            </Card>
        </View>

    )
}
export default PostCard
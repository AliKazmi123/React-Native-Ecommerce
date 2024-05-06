import React from 'react';
import { View, Image, TouchableOpacity,Text ,Dimensions} from 'react-native'
import { Card, Paragraph } from 'react-native-paper';
import styles from './styles'

let width=Dimensions.get('window').width
let height=Dimensions.get('window').height

const CommentCard = ({title,comment}) => {
    return (
            <View style={styles.cardCommentContainer}>
            <Card style={styles.cardComment}>
                <View style={styles.cardViewComment}>
                    <View style={styles.titleCardComment}>
                    <Text style={styles.titleText} adjustsFontSizeToFit  >
                        {title+" : "}</Text>
                        </View>
                        <Text style={styles.descriptionCommentText}  >
                {comment}</Text>

                </View>

            </Card>
        </View>

    )
}
export default CommentCard
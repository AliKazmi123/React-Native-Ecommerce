import { StyleSheet, Dimensions } from 'react-native'
import { fontSize, fontFamily } from '../../res';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height

export default StyleSheet.create({
    container: { 
        marginTop: 10, 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    cardContainer: { 
        width: '85%', 
        margin: wp('1%'), 
    },
    cardViewComment: { 
        width: '70%', 
        margin: wp('1%'), 
        flexDirection: 'row', 
    },
    titleCardComment: { 
        width: '30%', 
        flexDirection: 'row', 
    },
    cardComment: { 
        width: '90%', 
        margin: wp('1%'), 
        flexDirection: 'row', 
        padding: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        elevation: 3 
    },
    cardCommentContainer: { 
        marginTop: 5, 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    titleContainer: { 
        width: '100%', 
        padding: 5, 
        margin: wp('1%')
    },
    titleText: { 
        fontSize: fontSize.fontSize18, 
        fontStyle: 'normal', 
        fontFamily: fontFamily.AvenirMedium,
        fontWeight: '500'
    },
    priceText: { 
        color: '#ED5353', 
        fontSize: fontSize.fontSize14, 
        fontFamily: fontFamily.AvenirExtraBold, 
    },
    commentText: { 
        fontSize: fontSize.fontSize14, 
        fontFamily: fontFamily.AvenirRegular, 
        fontStyle: 'italic', 
    },
    descriptionContainer: { 
        width: '90%' 
    },
    descriptionText: { 
        fontSize: fontSize.fontSize14, 
        fontFamily: fontFamily.AvenirMedium, 
        fontStyle: 'normal', 
        color: '#AAAAAA' 
    },
    descriptionCommentText: { 
        fontSize: fontSize.fontSize18, 
        fontFamily: fontFamily.AvenirRegular, 
        fontStyle: 'normal', 
        color: '#AAAAAA' 
    },
    bottomView: { 
        width: '90%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
    },
    iconView: { 
        height: hp('1.75%'), 
        width: wp('4%') 
    },
    commentView: { 
        flexDirection: 'row' 
    },
});

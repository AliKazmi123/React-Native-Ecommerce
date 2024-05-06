import { StyleSheet } from 'react-native'
import { fontSize, fontFamily } from '../../res'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('1.5%')
    },
    sectionStyle: {
        flexDirection: 'row',
        width: '85%',
    },
    textRightStyle: {
        fontSize: fontSize.fontSize18,
        textDecorationLine: 'underline',
        color: 'black',
        fontStyle: 'normal',
        fontFamily: fontFamily.AvenirSemiBold,
        bottom: 1
    },
    textLeftStyle: {
        fontSize: fontSize.fontSize18,
        fontStyle: 'normal',
        fontFamily: fontFamily.AvenirRegular,
    },
})
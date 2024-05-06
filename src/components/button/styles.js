import { StyleSheet } from 'react-native'
import { fontSize, fontFamily } from '../../res'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: 'black',
        shadowColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('85%'),
        height: hp('6.5%'),
    },
    textStyle: {
        fontSize: fontSize.fontSize24, 
        color: '#fff', 
        fontStyle: 'normal', 
        fontFamily: fontFamily.AvenirRegular,
        fontWeight: '800'
    },
    radioContainer: { 
        flex: 1 
    },
    radioButtonStyle: { 
        flexDirection: 'row', 
        width: '50%' 
    },
    radioTextStyle: { 
        fontSize: fontSize.fontSize20, 
        top: 4, 
        fontStyle: 'normal', 
        left: 5, 
        fontFamily: fontFamily.AvenirRegular
    },
    loaderView: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
})

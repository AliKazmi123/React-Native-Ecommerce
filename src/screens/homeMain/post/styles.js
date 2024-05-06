import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    sectionContainer: {
        alignItems: 'center',
        padding: 5,
        flex: 1
    },
    keyboardAvoidingView: {
        flex: 1
    },
    radioButtonStyle: {
        flexDirection: 'row',
        width: '85%',
        justifyContent:'space-between',
        marginTop: hp('2.5%'),
        marginBottom: hp('2.5%'),
    }
})

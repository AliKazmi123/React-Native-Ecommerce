import { StyleSheet } from 'react-native'
import { fontSize, fontFamily } from '../../../res'
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
        flex: 1,
    },
    noDataContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noData: {
        fontSize: fontSize.fontSize18,
        fontWeight: '400',
        fontFamily: fontFamily.AvenirRegular,
        color: '#979797'
    },
    loaderView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

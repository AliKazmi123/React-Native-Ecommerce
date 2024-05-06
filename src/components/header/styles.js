import { StyleSheet, Dimensions } from 'react-native'
import { fontSize, fontFamily } from '../../res'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    marginTop: hp('2.75%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  sectionStyle: {
    flexDirection: 'row',
    width: '85%',
    justifyContent: 'space-between',
  },
  textLeftStyle: { 
    fontSize: fontSize.fontSize30, 
    color: 'rgba(0, 0, 0, 0.6)', 
    fontStyle: 'normal', 
    fontWeight: '800',
    fontFamily: fontFamily.AvenirRegular
  },
  textRightStyle: { 
    fontSize: fontSize.fontSize18, 
    fontStyle: 'normal', 
    fontFamily: fontFamily.AvenirRegular,
    top: 5, 
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 0.6)', 
  }
})

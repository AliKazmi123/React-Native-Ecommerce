import { StyleSheet } from 'react-native'
import { fontSize, fontFamily } from '../../res'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    padding: wp('1%'),
    width: wp('85%'),
    height: hp('7%'),
    marginTop: hp('1.2%'),
    marginBottom: hp('1.2%'),
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#979797',
  },
  imageStyle: {
    padding: 10,
    margin: wp('1%'),
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textUnderlineStyle: { 
    fontStyle: 'italic', 
    fontSize: fontSize.fontSize14, 
    marginTop: hp('0.75%'),
    fontFamily: fontFamily.AvenirRegular,
    color: 'rgba(0, 0, 0, 0.6)'
  },
  textErrorStyle: { 
    fontStyle: 'italic', 
    fontSize: fontSize.fontSize14, 
    marginTop: hp('0.75%'),
    color: 'red', 
    fontFamily: fontFamily.AvenirRegular
  },
  textInputStyle: { 
    flex: 1,
    height: hp('7%'),
    fontSize: fontSize.fontSize20, 
    fontStyle: "normal", 
    fontFamily: fontFamily.AvenirRegular,
    color: '#000'
  }
})
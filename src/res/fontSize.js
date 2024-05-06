import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { PixelRatio } from 'react-native'

const fontSize = {
  fontSize30: hp('3.45%'),//PixelRatio.getFontScale() > 1.0 ? hp('4.17%') : hp('4.22%'), //31
  fontSize28: PixelRatio.getFontScale() > 1.0 ? hp('3.60%') : hp('3.89%'), //28
  fontSize25: hp('2.6%'),//PixelRatio.getFontScale() > 1.0 ? hp('3.34%') : hp('3.61%'), //26
  fontSize24: hp('2.55%'),//PixelRatio.getFontScale() > 1.0 ? hp('3.32%') : hp('3.59%'), //26
  fontSize20: hp('2.30%'),//PixelRatio.getFontScale() > 1.0 ? hp('2.5%') : hp('2.78%'),  //20
  fontSize18: hp('2.25%'),//PixelRatio.getFontScale() > 1.0 ? hp('2.4%') : hp('2.50%'),  //18
  fontSize16: PixelRatio.getFontScale() > 1.0 ? hp('2.03%') : hp('2.2%'), //16
  fontSize14: hp('1.5%'),//PixelRatio.getFontScale() > 1.0 ? hp('1.67%') : hp('1.94%'),//14
  fontSize12: PixelRatio.getFontScale() > 1.0 ? hp('1.57%') : hp('1.67%'), //12
  fontSize10: PixelRatio.getFontScale() > 1.0 ? hp('1.13%') : hp('1.4%'), //10
  fontSize8: PixelRatio.getFontScale() > 1.0 ? hp('1.00%') : hp('1.11%')  //8
}

export default {...fontSize};
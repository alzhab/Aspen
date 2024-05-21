import { withUtilsText } from '../../../instruments/theme/HOC/withTextView'
import { withUtilsView } from '../../../instruments/theme/HOC/withUtilsView'
import {
  Text as TextLib,
  TouchableOpacity as TouchableOpacityLib,
  View as ViewLib,
} from 'react-native'
import { withUtilsPressable } from '../../../instruments/theme/HOC/withUtilsPressable'
import Animated from 'react-native-reanimated'

export const Text = withUtilsText(Animated.createAnimatedComponent(TextLib))
export const View = withUtilsView(Animated.createAnimatedComponent(ViewLib))
export const TouchableOpacity = withUtilsPressable(
  Animated.createAnimatedComponent(TouchableOpacityLib),
)

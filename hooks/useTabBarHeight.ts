import { SharedValue, interpolate, useDerivedValue } from 'react-native-reanimated'
import { usePlacesBottomSheetSharedValue } from './usePlacesBottomSheetSharedValue'

const TOP_INSET = -94

export const useTabBarHeight = (): SharedValue<number> => {
  const placesBottomSheetHeight = usePlacesBottomSheetSharedValue()
  // const tabBarHeight = useContext(AnimatedContext).get('tabBarHeight')

  const tabBarHeight = useDerivedValue(() => {
    if (!placesBottomSheetHeight) return 100
    return interpolate(placesBottomSheetHeight.value, [TOP_INSET, 574], [100, 0])
  }, [placesBottomSheetHeight])

  return tabBarHeight
}

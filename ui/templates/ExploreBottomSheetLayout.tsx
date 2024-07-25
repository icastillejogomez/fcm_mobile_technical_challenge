import { StyleSheet } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import { useTabBarHeight, useThemeSpacing } from '@/hooks'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

type ExploreBottomSheetLayoutProps = {}

export const ExploreBottomSheetLayout: FC<PropsWithChildren<ExploreBottomSheetLayoutProps>> = ({
  children,
}) => {
  // Declare hooks
  const spacing = useThemeSpacing()
  const tabBarHeight = useTabBarHeight()

  const animatedStyles = useAnimatedStyle(() => {
    return {
      paddingBottom: tabBarHeight.value,
    }
  })

  return (
    <Animated.View
      style={[
        styles.container,
        {
          paddingTop: spacing.medium,
        },
        animatedStyles,
      ]}>
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
})

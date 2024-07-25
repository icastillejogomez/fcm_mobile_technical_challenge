import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useThemePalette } from '@/hooks'

type TabBarProps = {
  height: number
}

export const TabBar: FC<BottomTabBarProps & TabBarProps> = (props) => {
  // Destructure props
  const { state, descriptors, navigation, height } = props

  // Declare hooks
  const palette = useThemePalette()

  return (
    <SafeAreaView
      style={[
        styles.container,
        { height, borderColor: palette.tabBar.border, backgroundColor: palette.tabBar.background },
      ]}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const Label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name

          const isFocused = state.index === index
          const Icon = options.tabBarIcon

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params)
            }
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              activeOpacity={0.8}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tabBarElement}>
              <>
                {Icon && (
                  <Icon
                    color={isFocused ? palette.tabBar.iconTint : palette.tabBar.icon}
                    size={20}
                    focused={isFocused}
                  />
                )}
                {typeof Label === 'string' && (
                  <Text
                    style={{
                      color: isFocused ? palette.tabBar.labelTint : palette.tabBar.label,
                      fontSize: 10,
                      textAlign: 'center',
                    }}>
                    {Label}
                  </Text>
                )}
              </>
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
  },
  tabBarElement: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingTop: 12,
  },
})

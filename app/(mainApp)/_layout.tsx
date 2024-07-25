import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemePalette } from '@/hooks'
import { TabBar } from '@/ui'

export default function MainAppLayout() {
  const insets = useSafeAreaInsets()
  const palette = useThemePalette()
  const tabBarHeight = 85

  return (
    <>
      <Tabs
        safeAreaInsets={insets}
        tabBar={(props) => {
          return <TabBar {...props} height={tabBarHeight} />
        }}
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#f00',
        }}>
        <Tabs.Screen
          name="places"
          options={{
            // headerStatusBarHeight: 40,
            headerTitle: 'Explore',
            header: (props) => {
              console.log('props', JSON.stringify(props, null, 2))
              return (
                <View
                  style={{
                    backgroundColor: palette.background.header,
                    paddingTop: insets.top,
                    paddingBottom: 16,
                    paddingLeft: insets.left,
                    paddingRight: insets.right,
                    justifyContent: 'center',
                  }}>
                  <StatusBar style="auto" />
                  {typeof props.options.headerTitle === 'string' && (
                    <Text
                      style={{
                        color: palette.text.default,
                        textAlign: 'center',
                        fontSize: 18,
                        fontWeight: '600',
                      }}>
                      {props.options.headerTitle}
                    </Text>
                  )}
                </View>
              )
            },
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Image
                  source={require('../../assets/icons/search.png')}
                  style={{ width: size, height: size }}
                  tintColor={color}
                />
              )
            },
            tabBarLabel: 'Explore',
          }}
        />
        <Tabs.Screen
          name="bookmarks"
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Image
                  source={require('../../assets/icons/bookmark.png')}
                  style={{ width: size, height: size }}
                  tintColor={color}
                />
              )
            },
            tabBarLabel: 'Bookmarks',
          }}
        />
        <Tabs.Screen
          name="bookings"
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Image
                  source={require('../../assets/icons/search.png')}
                  style={{ width: size, height: size }}
                  tintColor={color}
                />
              )
            },
            tabBarLabel: 'Bookings',
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Image
                  source={require('../../assets/icons/search.png')}
                  style={{ width: size, height: size }}
                  tintColor={color}
                />
              )
            },
            tabBarLabel: 'Messages',
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return (
                <Image
                  source={require('../../assets/icons/profile.png')}
                  style={{ width: size, height: size }}
                  tintColor={color}
                />
              )
            },
            tabBarLabel: 'Profile',
          }}
        />
      </Tabs>
      <StatusBar />
    </>
  )
}

const styles = StyleSheet.create({})

import { Text, View, Image } from 'react-native'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemePalette } from '@/hooks'
import { Header, TabBar } from '@/ui'

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
        sceneContainerStyle={{
          backgroundColor: palette.background.primary,
        }}
        screenOptions={{
          headerShown: true,
        }}>
        <Tabs.Screen
          name="places"
          options={{
            // headerStatusBarHeight: 40,
            headerTitle: 'Explore',
            header: (props) => {
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
            tabBarIcon: ({ color, size }) => {
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
            header: (props) => {
              return <Header {...props} />
            },
            headerTitle: 'Bookmarks',
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
            header: (props) => {
              return <Header {...props} />
            },
            headerTitle: 'Bookings',
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
            header: (props) => {
              return <Header {...props} />
            },
            headerTitle: 'Messages',
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
            header: (props) => {
              return <Header {...props} />
            },
            headerTitle: 'Profile',
            tabBarLabel: 'Profile',
          }}
        />
      </Tabs>
      <StatusBar />
    </>
  )
}

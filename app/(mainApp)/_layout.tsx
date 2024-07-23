import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { Tabs } from 'expo-router'

export default function MainAppLayout() {
  const tabBarHeight = 85
  return (
    <Tabs
      tabBar={({ state, descriptors, navigation }) => {
        return (
          <SafeAreaView style={[{ height: tabBarHeight, display: 'flex', flexDirection: 'row' }]}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
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

                const onLongPress = () => {
                  navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                  })
                }

                return (
                  <TouchableOpacity
                    key={index}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 8,
                      paddingTop: 12,
                    }}>
                    <>
                      {Icon && (
                        <Icon
                          color={isFocused ? '#673ab7' : '#222'}
                          size={20}
                          focused={isFocused}
                        />
                      )}
                      {typeof Label === 'string' && (
                        <Text
                          style={{
                            color: isFocused ? '#673ab7' : '#222',
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
      }}
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#f00',
      }}>
      <Tabs.Screen
        name="places"
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
  )
}

const styles = StyleSheet.create({})

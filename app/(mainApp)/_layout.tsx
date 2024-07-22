import React from 'react'
import { StyleSheet } from 'react-native'
import { Tabs } from 'expo-router'

export default function MainAppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="places" />
      <Tabs.Screen name="bookings" />
      <Tabs.Screen name="bookmarks" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
}

const styles = StyleSheet.create({})

import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { MainApplicationLayout } from '@/ui'

const ProfileScreen = () => {
  return (
    <MainApplicationLayout style={styles.container}>
      <Text>ProfileScreen</Text>
    </MainApplicationLayout>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

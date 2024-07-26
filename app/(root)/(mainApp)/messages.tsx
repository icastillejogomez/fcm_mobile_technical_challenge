import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { MainApplicationLayout } from '@/ui'

const MessagesScreen = () => {
  return (
    <MainApplicationLayout style={styles.container}>
      <Text>MessagesScreen</Text>
    </MainApplicationLayout>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})

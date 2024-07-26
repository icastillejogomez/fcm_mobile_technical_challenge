import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { MainApplicationLayout } from '@/ui'

const BookingsPage = () => {
  return (
    <MainApplicationLayout style={styles.container}>
      <Text>BookingsPage</Text>
    </MainApplicationLayout>
  )
}

export default BookingsPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

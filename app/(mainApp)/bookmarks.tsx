import { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Text, StyleSheet } from 'react-native'
import { MainApplicationLayout } from '@/ui'

const BookmarkScreen = () => {
  // Declare hooks
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Text style={{ color: 'white', textDecorationLine: 'underline' }}>Edit</Text>
      },
    })
  }, [navigation])

  return (
    <MainApplicationLayout style={styles.container}>
      <Text>BookmarkScreen</Text>
    </MainApplicationLayout>
  )
}

export default BookmarkScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})

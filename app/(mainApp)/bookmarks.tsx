import { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Text, View, StyleSheet } from 'react-native'

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
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <Text>BookmarkScreen</Text>
    </View>
  )
}

export default BookmarkScreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

import { StyleSheet } from 'react-native'
import { Redirect } from 'expo-router'

export default function IndexScreen(): JSX.Element {
  return <Redirect href="/cities" />
}

const styles = StyleSheet.create({})

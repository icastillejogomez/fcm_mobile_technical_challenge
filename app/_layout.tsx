import { useCallback, useEffect, useState } from 'react'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { View } from 'react-native'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

type ReadyState = {
  fontsLoaded: boolean
}

const initialReadyState: ReadyState = {
  fontsLoaded: false,
}

function isAppReady(readyState: ReadyState): boolean {
  return readyState.fontsLoaded
}

const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/',
  cache: new InMemoryCache(),
})

const FCMTravelGuideAppLayout = () => {
  // Declare hooks
  const [readyState, setReadyState] = useState<ReadyState>(initialReadyState)

  const loadFonts = useCallback(async () => {
    await Font.loadAsync({
      'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    // wait 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000 * 1))
  }, [])

  const hideSplashScreen = useCallback(async () => {
    await SplashScreen.hideAsync()
  }, [])

  useEffect(() => {
    loadFonts().finally(() => {
      setReadyState((prev) => ({ ...prev, fontsLoaded: true }))
    })
  }, [loadFonts])

  if (!isAppReady(readyState)) {
    return (
      <ApolloProvider client={apolloClient}>
        <Slot />
      </ApolloProvider>
    )
  }

  return (
    <ApolloProvider client={apolloClient}>
      <View style={{ flex: 1 }} onLayout={hideSplashScreen}>
        <Slot />
      </View>
    </ApolloProvider>
  )
}

export default FCMTravelGuideAppLayout

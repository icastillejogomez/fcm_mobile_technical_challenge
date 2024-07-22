import { useCallback, useEffect, useState } from 'react'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { View } from 'react-native'

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

const FCMTravelGuideAppLayout = () => {
  // Declare hooks
  const [readyState, setReadyState] = useState<ReadyState>(initialReadyState)

  const loadFonts = useCallback(async () => {
    await Font.loadAsync({
      'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    // wait 5 seconds
    await new Promise((resolve) => setTimeout(resolve, 1000 * 5))
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
    return <Slot />
  }

  return (
    <View style={{ flex: 1 }} onLayout={hideSplashScreen}>
      <Slot />
    </View>
  )
}

export default FCMTravelGuideAppLayout

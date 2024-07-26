import { useThemePalette } from '@/hooks'
import { Stack } from 'expo-router'

export default function ModalLayout() {
  const palette = useThemePalette()
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: palette.background.primary,
          position: 'relative',
        },
      }}>
      <Stack.Screen
        name="search"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}

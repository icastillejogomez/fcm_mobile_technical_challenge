import { FC, PropsWithChildren } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemeSpacing } from '@/hooks'

type MainApplicationLayoutProps = ViewProps

export const MainApplicationLayout: FC<PropsWithChildren<MainApplicationLayoutProps>> = ({
  children,
  ...props
}) => {
  // Declare hooks
  const insets = useSafeAreaInsets()
  const spacing = useThemeSpacing()

  return (
    <View
      style={[
        styles.container,
        {
          paddingLeft: insets.left + spacing.appHorizontalPadding / 2,
          paddingRight: insets.right + spacing.appHorizontalPadding / 2,
        },
        props.style,
      ]}
      {...props}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

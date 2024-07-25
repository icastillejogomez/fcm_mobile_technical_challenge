import { FC } from 'react'
import { StyleSheet, View } from 'react-native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemePalette, useThemeSpacing } from '@/hooks'
import { SearchInput } from '../molecules'
import { SearchFilterButton } from '../atoms'

export const ExploreHeader: FC<BottomTabHeaderProps> = (props) => {
  // Declare hooks
  const insets = useSafeAreaInsets()
  const spacing = useThemeSpacing()
  const palette = useThemePalette()

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: palette.background.header,
          paddingTop: insets.top,
          paddingHorizontal: spacing.appHorizontalPadding,
          borderBottomColor: palette.header.exploreHeader.border,
        },
      ]}>
      <View style={styles.searchContainer}>
        <SearchInput />
        <SearchFilterButton />
      </View>
      <View style={styles.placeTypesSelectorContainer}>
        <View style={styles.placeTypesSelector}></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    borderBottomWidth: 1,
  },
  searchContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchInput: {},
  placeTypesSelectorContainer: {
    height: 60,
    borderWidth: 1,
    borderColor: 'blue',
  },
  placeTypesSelector: {},
})

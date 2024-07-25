import { FC } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemePalette, useThemeSpacing } from '@/hooks'
import { SearchInput } from '../molecules'
import { SearchFilterButton } from '../atoms'

// Create an array with ten random places types
const placeTypes = [
  'Restaurant',
  'Monument',
  'Museum',
  'Park',
  'Beach',
  'Shopping',
  'Hotel',
  'Bar',
  'Nightlife',
  'Other',
]

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
          borderBottomColor: palette.header.exploreHeader.border,
        },
      ]}>
      <View style={[styles.searchContainer, { paddingHorizontal: spacing.appHorizontalPadding }]}>
        <SearchInput />
        <SearchFilterButton />
      </View>
      <View style={styles.placeTypesSelectorContainer}>
        <ScrollView
          style={[styles.placeTypesSelector, { paddingHorizontal: spacing.appHorizontalPadding }]}
          contentContainerStyle={styles.placeTypesScroll}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {placeTypes.map((placeType, index) => (
            <View key={index} style={styles.placeType}>
              <View style={styles.placeTypeImage} />
              <Text style={[styles.placeTypeText, { color: palette.text.default }]}>
                {placeType}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    borderBottomWidth: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  placeTypesSelectorContainer: {
    paddingBottom: 10,
  },
  placeTypesSelector: {
    paddingTop: 4,
  },
  placeTypesScroll: {
    gap: 32,
  },
  placeType: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    // width: 90,
  },
  placeTypeImage: {
    width: 35,
    height: 22,
    backgroundColor: 'grey',
  },
  placeTypeText: {
    fontSize: 12,
    fontWeight: '500',
  },
})

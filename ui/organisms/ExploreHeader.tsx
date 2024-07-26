import { FC } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemePalette, useThemeSpacing } from '@/hooks'
import { SearchInput } from '../molecules'
import { SearchFilterButton } from '../atoms'
import { Image } from 'expo-image'

const placeTypes = [
  {
    label: 'Restaurants',
    icon: require('../../assets/icons/dining-table.png'),
    key: 'restaurant',
  },
  {
    label: 'Monuments',
    icon: require('../../assets/icons/church.png'),
    key: 'monument',
  },
  {
    label: 'Beach',
    icon: require('../../assets/icons/beach.png'),
    key: 'beach',
  },
  {
    label: 'Car rental',
    icon: require('../../assets/icons/car-rental.png'),
    key: 'car-rental',
  },
  {
    label: 'Gas station',
    icon: require('../../assets/icons/gas-station.png'),
    key: 'gas-station',
  },
  {
    label: 'Hospital',
    icon: require('../../assets/icons/hospital.png'),
    key: 'hospital',
  },
  {
    label: 'Park',
    icon: require('../../assets/icons/park.png'),
    key: 'park',
  },
  {
    label: 'Hotel',
    icon: require('../../assets/icons/hotel.png'),
    key: 'hotel',
  },
  {
    label: 'Party',
    icon: require('../../assets/icons/party.png'),
    key: 'party',
  },
  {
    label: 'Shopping',
    icon: require('../../assets/icons/shopping-bag.png'),
    key: 'shopping-bag',
  },
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
          style={[styles.placeTypesSelector]}
          contentContainerStyle={[
            styles.placeTypesScroll,
            { paddingHorizontal: spacing.appHorizontalPadding },
          ]}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {placeTypes.map((placeType, index) => (
            <View key={index} style={styles.placeType}>
              <Image source={placeType.icon} style={styles.placeTypeImage} />
              <Text style={[styles.placeTypeText, { color: palette.text.default }]}>
                {placeType.label}
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
    gap: 4,
    // width: 90,
  },
  placeTypeImage: {
    width: 28,
    height: 28,
  },
  placeTypeText: {
    fontSize: 11,
    fontWeight: '500',
  },
})

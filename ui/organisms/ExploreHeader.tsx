import { FC, useCallback } from 'react'
import { ScrollView, StyleSheet, View, Text, Alert } from 'react-native'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useThemePalette, useThemeSpacing } from '@/hooks'
import { SearchInput } from '../molecules'
import { Image } from 'expo-image'
import { TouchableOpacity } from 'react-native-gesture-handler'

const placeTypes = [
  {
    label: 'Restaurants',
    icon: require('../../assets/icons/dining-table.svg'),
    key: 'restaurant',
  },
  {
    label: 'Monuments',
    icon: require('../../assets/icons/monument.svg'),
    key: 'monument',
  },
  {
    label: 'Beach',
    icon: require('../../assets/icons/beach.svg'),
    key: 'beach',
  },
  {
    label: 'Car rental',
    icon: require('../../assets/icons/car-rental.svg'),
    key: 'car-rental',
  },
  {
    label: 'Gas station',
    icon: require('../../assets/icons/gas-station.svg'),
    key: 'gas-station',
  },
  {
    label: 'Hospital',
    icon: require('../../assets/icons/hospital.svg'),
    key: 'hospital',
  },
  {
    label: 'Park',
    icon: require('../../assets/icons/park.svg'),
    key: 'park',
  },
  {
    label: 'Hotel',
    icon: require('../../assets/icons/hotel.svg'),
    key: 'hotel',
  },
  {
    label: 'Party',
    icon: require('../../assets/icons/party.svg'),
    key: 'party',
  },
  {
    label: 'Shopping',
    icon: require('../../assets/icons/shopping-bag.svg'),
    key: 'shopping-bag',
  },
]

export const ExploreHeader: FC<BottomTabHeaderProps> = (props) => {
  // Declare hooks
  const insets = useSafeAreaInsets()
  const spacing = useThemeSpacing()
  const palette = useThemePalette()

  const handlePress = useCallback((placeTypeKey: string) => {
    Alert.alert('Functionality not implemented yet')
  }, [])

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
            <TouchableOpacity
              key={index}
              style={styles.placeType}
              activeOpacity={0.8}
              onPress={() => handlePress(placeType.key)}>
              <Image
                source={placeType.icon}
                style={styles.placeTypeImage}
                tintColor={palette.text.default}
              />
              <Text style={[styles.placeTypeText, { color: palette.text.default }]}>
                {placeType.label}
              </Text>
            </TouchableOpacity>
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

import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native'
import React, { FC, PropsWithoutRef, useMemo, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BottomSheet, { BottomSheetVirtualizedList } from '@gorhom/bottom-sheet'
import { usePlaces, usePlacesBottomSheetSharedValue, useThemePalette } from '@/hooks'
import { ExploreBottomSheetLayout, ExploreBottomShetViewMapButton } from '@/ui'
import { PlacePrimitives } from '@/contexts/place/domain'

const ExploreScreen: FC<PropsWithoutRef<object>> = () => {
  const { data: places, loading } = usePlaces()

  const { height } = Dimensions.get('window')
  const bottomSheetRef = useRef<BottomSheet>(null)
  const insets = useSafeAreaInsets()
  const palette = useThemePalette()

  const contentHeightOnClose = useMemo(
    () =>
      Platform.select({
        ios: 45,
        android: 60,
        native: 45,
      }) ?? 45,
    [],
  )
  const snapBottom = useMemo(
    () => insets.bottom + contentHeightOnClose,
    [insets, contentHeightOnClose],
  )
  const snapTop = useMemo(() => height - insets.top + snapBottom, [height, insets, snapBottom])
  const snapPoints = useMemo(() => [snapBottom, snapTop], [snapBottom, snapTop])
  const animatedValue = usePlacesBottomSheetSharedValue()

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {places &&
          places.map((place, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: place.coordinates[0], longitude: place.coordinates[1] }}
              title={place.name}
              description={place.name}
            />
          ))}
      </MapView>
      <BottomSheet
        ref={bottomSheetRef}
        backgroundStyle={{ backgroundColor: palette.background.primary }}
        index={1}
        snapPoints={snapPoints}
        topInset={-snapBottom}
        bottomInset={0}
        footerComponent={ExploreBottomShetViewMapButton}
        animateOnMount={false}
        animatedPosition={animatedValue}>
        <View style={[styles.contentOnClose, { height: contentHeightOnClose }]}>
          <Text style={[styles.placesPlaceholder, { color: palette.text.default }]}>
            {loading
              ? 'Loading...'
              : places
                ? `${places.length} places to see`
                : 'There was an error loading the places'}
          </Text>
        </View>
        <ExploreBottomSheetLayout>
          {places && (
            <BottomSheetVirtualizedList<PlacePrimitives>
              data={places}
              keyExtractor={(item) => item.name}
              getItemCount={(data) => data.length}
              getItem={(data, index) => data[index]}
              renderItem={({ item }) => <Text>{item.name}</Text>}
              // contentContainerStyle={styles.contentContainer}
            />
          )}
        </ExploreBottomSheetLayout>
      </BottomSheet>
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  contentOnClose: {
    alignItems: 'center',
  },
  placesPlaceholder: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  sectionList: {
    paddingBottom: 100,
  },
})

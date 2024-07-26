import { StyleSheet, Text, View, Dimensions, Platform } from 'react-native'
import React, { FC, PropsWithoutRef, useMemo, useRef } from 'react'
import MapView from 'react-native-maps'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BottomSheet from '@gorhom/bottom-sheet'
import { usePlacesBottomSheetSharedValue, useThemePalette } from '@/hooks'
import { ExploreBottomSheetLayout, ExploreBottomShetViewMapButton } from '@/ui'

const CitiesScreen: FC<PropsWithoutRef<object>> = (props) => {
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
      <MapView style={styles.map} />
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
            180 places to see
          </Text>
        </View>
        <ExploreBottomSheetLayout>
          {/* <BottomSheetSectionList
            sections={sections}
            keyExtractor={(i) => i}
            contentContainerStyle={styles.sectionList}
            renderSectionHeader={renderSectionHeader}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          /> */}
        </ExploreBottomSheetLayout>
      </BottomSheet>
    </View>
  )
}

export default CitiesScreen

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

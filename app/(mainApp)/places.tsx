import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { FC, PropsWithoutRef, useCallback, useMemo, useRef } from 'react'
// import { useQuery, gql } from '@apollo/client'
import MapView from 'react-native-maps'

import { useSafeAreaInsets } from 'react-native-safe-area-context'
import BottomSheet, { BottomSheetSectionList } from '@gorhom/bottom-sheet'
import { usePlacesBottomSheetSharedValue } from '@/hooks'
import { ExploreBottomSheetLayout } from '@/ui'

// type QueryResult = {
//   allCities: City[]
// }

// type City = {
//   id: number
//   name: string
//   key: string
//   nativeName: string
//   currency: string
//   language: string
// }

const CitiesScreen: FC<PropsWithoutRef<object>> = (props) => {
  // const { loading, error, data } = useQuery<QueryResult>(gql`
  //   query {
  //     allCities {
  //       id
  //       name
  //       key
  //       nativeName
  //       currency
  //       language
  //     }
  //   }
  // `)

  const { height } = Dimensions.get('window')
  const bottomSheetRef = useRef<BottomSheet>(null)
  const insets = useSafeAreaInsets()

  const contentHeightOnClose = useMemo(() => 45, [])
  const snapBottom = useMemo(
    () => insets.bottom + contentHeightOnClose,
    [insets, contentHeightOnClose],
  )
  const snapTop = useMemo(() => height - insets.top + snapBottom, [height, insets, snapBottom])
  const snapPoints = useMemo(() => [snapBottom, snapTop], [snapBottom, snapTop])
  const animatedValue = usePlacesBottomSheetSharedValue()

  const sections = useMemo(
    () =>
      Array(10)
        .fill(0)
        .map((_, index) => ({
          title: `Section ${index}`,
          data: Array(10)
            .fill(0)
            .map((_, index) => `Item ${index}`),
        })),
    [],
  )

  const renderSectionHeader = useCallback(
    ({ section }: any) => (
      <View style={styles.sectionHeaderContainer}>
        <Text>{section.title}</Text>
      </View>
    ),
    [],
  )
  const renderItem = useCallback(
    ({ item }: any) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  )

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        topInset={-snapBottom}
        animateOnMount={false}
        animatedPosition={animatedValue}>
        <View style={[styles.contentOnClose, { height: contentHeightOnClose }]}>
          <Text>180 places to see</Text>
        </View>
        <ExploreBottomSheetLayout>
          <BottomSheetSectionList
            sections={sections}
            keyExtractor={(i) => i}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
          />
        </ExploreBottomSheetLayout>
      </BottomSheet>
    </View>
  )

  // return (
  //   <View style={{ flex: 1 }}>
  //     {loading && <Text>Loading...</Text>}
  //     {error && <Text>Error!</Text>}
  //     {data && (
  //       <ScrollView>
  //         {data?.allCities?.map((city) => <Text key={city.id}>{city.name}</Text>)}
  //       </ScrollView>
  //     )}
  //   </View>
  // )
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
  sectionHeaderContainer: {
    backgroundColor: 'white',
    padding: 6,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
})

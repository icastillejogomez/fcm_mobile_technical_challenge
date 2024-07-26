import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useMemo } from 'react'
import { CityPrimitives } from '@/contexts/city/domain'
import { Image } from 'expo-image'

type CityCardProps = {
  city: CityPrimitives
}

const imagesSources = {
  amsterdam: require('../../assets/places/amsterdam.jpg'),
  athens: require('../../assets/places/athens.jpg'),
  barcelona: require('../../assets/places/barcelona.jpg'),
  berlin: require('../../assets/places/berlin.jpg'),
  dublin: require('../../assets/places/dublin.jpg'),
  lisbon: require('../../assets/places/lisbon.jpg'),
  london: require('../../assets/places/london.jpg'),
  paris: require('../../assets/places/paris.jpg'),
  rome: require('../../assets/places/rome.jpg'),
  tokyo: require('../../assets/places/tokyo.jpg'),
} as const

export const CityCard: FC<CityCardProps> = ({ city }) => {
  const imageSource = useMemo(
    () => imagesSources[city.key as keyof typeof imagesSources],
    [city.key],
  )
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} contentFit="cover" />
      <View style={styles.cityNameOverlay}>
        <Text style={styles.cityName}>{city.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 140,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  cityNameOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cityName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
})

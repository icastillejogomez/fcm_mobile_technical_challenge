import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useQuery, gql } from '@apollo/client'

type QueryResult = {
  allCities: City[]
}

type City = {
  id: number
  name: string
  key: string
  nativeName: string
  currency: string
  language: string
}

const CitiesScreen = () => {
  const { loading, error, data } = useQuery<QueryResult>(gql`
    query {
      allCities {
        id
        name
        key
        nativeName
        currency
        language
      }
    }
  `)

  return (
    <View style={{ flex: 1 }}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error!</Text>}
      {data && (
        <ScrollView>
          {data?.allCities?.map((city) => <Text key={city.id}>{city.name}</Text>)}
        </ScrollView>
      )}
    </View>
  )
}

export default CitiesScreen

const styles = StyleSheet.create({})

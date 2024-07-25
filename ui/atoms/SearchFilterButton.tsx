import { FC } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { useThemePalette } from '@/hooks'

type SearchFilterButtonProps = TouchableOpacityProps & {}

export const SearchFilterButton: FC<SearchFilterButtonProps> = (props) => {
  // Declare hooks
  const palette = useThemePalette()

  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Image
        source={require('../../assets/icons/search.png')}
        style={styles.icon}
        tintColor={palette.text.neutral}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  icon: {
    width: 16,
    height: 16,
  },
})

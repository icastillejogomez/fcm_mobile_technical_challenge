import 'react-native'

import { FC, PropsWithChildren } from 'react'
import { renderRouter, screen } from 'expo-router/testing-library'

// Note: import explicitly to use the types shipped with jest.
import { it, describe } from '@jest/globals'
import { SectionListProps } from 'react-native'

jest.mock('@gorhom/bottom-sheet', () => {
  const { SectionList } = jest.requireActual('react-native')

  const BottomSheetSectionList: FC<PropsWithChildren<SectionListProps<any>>> = ({
    children,
    ...otherProps
  }) => {
    return (
      <SectionList testID="mocked-flatlist" {...otherProps}>
        {children}
      </SectionList>
    )
  }

  const module = jest.requireActual('@gorhom/bottom-sheet')
  module.BottomSheetSectionList = SectionList

  return {
    ...module,
    __esModule: true,
    BottomSheetSectionList,
  }
})

describe('When rendering the app', () => {
  it('should render the app', async () => {
    const app = renderRouter()

    expect(screen).toHavePathname('/places')
    app.getByText('180 places to see')
    expect(screen).toMatchSnapshot()
  })
})

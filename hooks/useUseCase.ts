import { GetAllPlaces } from '@/contexts/place/application'
import { useKernel } from './useKernel'
import type { GetAllCities } from '@/contexts/city/application'

type UseCaseKey = 'getAllCities' | 'getAllPlaces'

type UseCase<K extends UseCaseKey> = K extends 'getAllCities'
  ? GetAllCities
  : K extends 'getAllPlaces'
    ? GetAllPlaces
    : null

export const useUseCase = <K extends UseCaseKey>(useCaseKey: K): UseCase<K> => {
  const kernel = useKernel()

  if (useCaseKey === 'getAllCities') return kernel.useCases.getAllCities as UseCase<K>
  if (useCaseKey === 'getAllPlaces') return kernel.useCases.getAllPlaces as UseCase<K>

  return null as UseCase<K>
}

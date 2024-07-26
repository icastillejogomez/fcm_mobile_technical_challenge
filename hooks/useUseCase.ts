import { useKernel } from './useKernel'
import type { GetAllCities } from '@/contexts/city/application'

type UseCaseKey = 'getAllCities'

type UseCase<K extends UseCaseKey> = K extends 'getAllCities' ? GetAllCities : null

export const useUseCase = <K extends UseCaseKey>(useCaseKey: K): UseCase<K> => {
  const kernel = useKernel()

  if (useCaseKey === 'getAllCities') return kernel.useCases.getAllCities as UseCase<K>

  return null as UseCase<K>
}

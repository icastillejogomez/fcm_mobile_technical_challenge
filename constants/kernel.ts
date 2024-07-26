import { ApolloClient, NormalizedCacheObject } from '@apollo/client'
import { GetAllCities } from '@/contexts/city/application'
import { CityRepository } from '@/contexts/city/domain'
import { GraphqlCityRepository } from '@/contexts/city/infrastructure'

export type Kernel = {
  repositories: {
    city: CityRepository
    // place: PlaceRepository
  }
  useCases: {
    getAllCities: GetAllCities
  }
}

type PopulateKernelParams = {
  apolloClient: ApolloClient<NormalizedCacheObject>
}

let kernel: Kernel

export function populateKernel({ apolloClient }: PopulateKernelParams): void {
  const cityRepository = new GraphqlCityRepository(apolloClient)

  const getAllCities = new GetAllCities(cityRepository)

  kernel = {
    repositories: {
      city: cityRepository,
      // place: placeRepository,
    },
    useCases: {
      getAllCities,
    },
  }
}

export function getKernel(): Kernel {
  if (!kernel) {
    throw new Error('Kernel not initialized')
  }

  return kernel
}

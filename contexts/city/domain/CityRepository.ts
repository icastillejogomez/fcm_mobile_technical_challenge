import { City } from './City'

export interface CityRepository {
  getAll(): Promise<City[]>
  save(city: City): Promise<void>
}

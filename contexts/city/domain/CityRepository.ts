import { City } from './City'

export interface CityRepository {
  getAll(): Promise<City[]>
}

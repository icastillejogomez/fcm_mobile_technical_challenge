import { Place } from './Place'

export interface PlaceRepository {
  getAll(): Promise<Place[]>
  getCityPlaces(cityKey: string): Promise<Place[]>
  save(place: Place): Promise<void>
}

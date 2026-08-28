import { convertToBoolean } from '@/lib/utils'
import { EventT } from '@/schemas/NotificationSchema'
import { TApiResponse } from '@/schemas/ResponseSchema'
import { LoadVehicles, VehiclesData } from '@/schemas/VechicleSchema'
import { BaseService } from './BaseService'
import { HttpError } from '@bonfire/core'

export class VehicleService extends BaseService {
  async getVehicles(): Promise<VehiclesData[]> {
    const response = await this.client.get<LoadVehicles>('/veiculos')
    const vehicles = response.data.veiculos
    vehicles?.forEach((vehicle) => {
      vehicle.NUM_VEIC = String(vehicle.NUM_VEIC)
      vehicle.VEIC_ATIV_EMPR = convertToBoolean(vehicle.VEIC_ATIV_EMPR)
    })
    return vehicles
  }

  async updateVehicles({
    IDN_PLAC_VEIC,
    NUM_VEIC,
    VEIC_ATIV_EMPR,
    DAT_BAIX,
  }: VehiclesData) {
    const data = [{ IDN_PLAC_VEIC, NUM_VEIC, VEIC_ATIV_EMPR, ...(DAT_BAIX !== undefined ? { DAT_BAIX } : {}) }]
    const event: EventT = {}
    event.document = NUM_VEIC

    try {
      const response = await this.client.patch<TApiResponse>('/veiculos', data)
      if (response.status === 202) {
        event.message = response.data.message
      }
    } catch (error: any) {
      if (error instanceof HttpError) {
        event.message = error.data?.message || error.message
      } else {
        event.message = error.message || 'Erro desconhecido'
      }
    }
    return { vehicle: data[0], event }
  }

  async insertVehicles({
    IDN_PLAC_VEIC,
    NUM_VEIC,
    VEIC_ATIV_EMPR,
    DAT_BAIX,
  }: VehiclesData) {
    const data = [{ IDN_PLAC_VEIC, NUM_VEIC, VEIC_ATIV_EMPR, ...(DAT_BAIX !== undefined ? { DAT_BAIX } : {}) }]
    const event: EventT = {}
    event.document = NUM_VEIC

    try {
      const response = await this.client.post<TApiResponse>('/veiculos', data)
      if (response.status === 201) {
        event.message = response.data.message
      }
    } catch (error: any) {
      if (error instanceof HttpError) {
        event.message = error.data?.message || error.message
      } else {
        event.message = error.message || 'Erro desconhecido'
      }
    }
    return { vehicle: data[0], event }
  }

  async deleteVehicles(NUM_VEIC: string) {
    const event: EventT = {}
    event.document = NUM_VEIC

    try {
      const response = await this.client.delete<TApiResponse>(`/veiculos/${NUM_VEIC}`)
      if (response.status === 202) {
        event.message = response.data.message
      }
    } catch (error: any) {
      if (error instanceof HttpError) {
        event.message = error.data?.message || error.message
      } else {
        event.message = error.message || 'Erro desconhecido'
      }
    }

    return { NUM_VEIC, event }
  }
}

export const vehicleService = new VehicleService()
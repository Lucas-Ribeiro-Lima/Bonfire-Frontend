import useSWR from 'swr'
import { VehicleContext } from '@/contexts/vehicleContext'
import { VehiclesData } from '@/schemas/VechicleSchema'
import { VehicleService } from '@/services/vehicles'
import { useContext } from 'react'
import { useNotifications } from './useNotifications'
import { notify } from '@/lib/utils'

export function useVehicles() {
  const service = new VehicleService();
  const { data, mutate } = useContext(VehicleContext)
  const { handleInsert: handleInsertNotification } = useNotifications()

  function handleGet() {
    const { data, mutate } = useSWR<VehiclesData[]>('/veiculos', async () => {
      return service.getVehicles()
    })
    return { data, mutate }
  }

  async function handleUpdate(vehicle: VehiclesData) {
    const { vehicle: updatedVehicle, event } = await service.updateVehicles(vehicle)
    handleInsertNotification(event)
    notify.success(event.message)

    if (data) {
      const updatedData = [...data, updatedVehicle]
      mutate(updatedData, true)
    }
  }

  async function handleInsert(vehicle: VehiclesData) {
    const { vehicle: insertedVehicle, event } = await service.insertVehicles(vehicle)
    handleInsertNotification(event)
    notify.success(event.message)

    if (data) {
      const updatedData = [...data, insertedVehicle]
      mutate(updatedData, true)
    }
  }

  async function handleDelete(NUM_VEIC: string) {
    const { NUM_VEIC: deletedVehicle, event } = await service.deleteVehicles(NUM_VEIC)
    notify.success(event.message)

    if (data) {
      const updatedData = data.filter(
        (vehicle) => vehicle.NUM_VEIC !== deletedVehicle,
      )
      mutate(updatedData, true)
    }
  }

  return { handleGet, handleInsert, handleUpdate, handleDelete }
}

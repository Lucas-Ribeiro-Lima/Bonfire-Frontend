import { describe, it, expect, vi, beforeEach } from 'vitest'
import { VehicleService } from '@/services/vehicles'
import { VehicleSchema } from '@/schemas/VechicleSchema'
import { IHttpClient } from '@bonfire/core'

describe('VehicleService & VehicleSchema (Unit Tests)', () => {
  let mockClient: IHttpClient

  beforeEach(() => {
    mockClient = {
      get: vi.fn(),
      post: vi.fn(),
      patch: vi.fn(),
      delete: vi.fn(),
    }
  })

  describe('VehicleSchema', () => {
    it('deve validar veículo com DAT_BAIX nulo (veículo ativo)', () => {
      const payload = {
        NUM_VEIC: 10022,
        IDN_PLAC_VEIC: 'ABC-1234',
        VEIC_ATIV_EMPR: true,
        DAT_BAIX: null,
      }
      const parsed = VehicleSchema.parse(payload)
      expect(parsed.NUM_VEIC).toBe(10022)
      expect(parsed.IDN_PLAC_VEIC).toBe('ABC-1234')
      expect(parsed.VEIC_ATIV_EMPR).toBe(true)
      expect(parsed.DAT_BAIX).toBeNull()
    })

    it('deve validar veículo com DAT_BAIX preenchido (veículo baixado/inativo)', () => {
      const payload = {
        NUM_VEIC: 20044,
        IDN_PLAC_VEIC: 'KGE-9876',
        VEIC_ATIV_EMPR: false,
        DAT_BAIX: '2026-08-28T10:00:00',
      }
      const parsed = VehicleSchema.parse(payload)
      expect(parsed.NUM_VEIC).toBe(20044)
      expect(parsed.IDN_PLAC_VEIC).toBe('KGE-9876')
      expect(parsed.VEIC_ATIV_EMPR).toBe(false)
      expect(parsed.DAT_BAIX).toBe('2026-08-28T10:00:00')
    })

    it('deve validar veículo sem DAT_BAIX (opcional para compatibilidade)', () => {
      const payload = {
        NUM_VEIC: 30055,
        IDN_PLAC_VEIC: 'XYZ-1111',
        VEIC_ATIV_EMPR: true,
      }
      const parsed = VehicleSchema.parse(payload)
      expect(parsed.NUM_VEIC).toBe(30055)
      expect(parsed.DAT_BAIX).toBeUndefined()
    })
  })

  describe('VehicleService', () => {
    it('deve recuperar veículos da API preservando DAT_BAIX', async () => {
      const mockVehiclesList = [
        {
          NUM_VEIC: 10022,
          IDN_PLAC_VEIC: 'ABC-1234',
          VEIC_ATIV_EMPR: true,
          DAT_BAIX: null,
        },
        {
          NUM_VEIC: 20044,
          IDN_PLAC_VEIC: 'KGE-9876',
          VEIC_ATIV_EMPR: false,
          DAT_BAIX: '2026-08-28T10:00:00',
        },
      ]

      vi.mocked(mockClient.get).mockResolvedValue({
        data: { veiculos: mockVehiclesList },
        status: 200,
      })

      const service = new VehicleService(mockClient)
      const result = await service.getVehicles()

      expect(mockClient.get).toHaveBeenCalledWith('/veiculos')
      expect(result).toHaveLength(2)
      expect(result[0].DAT_BAIX).toBeNull()
      expect(result[1].DAT_BAIX).toBe('2026-08-28T10:00:00')
    })

    it('deve atualizar veículo incluindo DAT_BAIX no payload', async () => {
      vi.mocked(mockClient.patch).mockResolvedValue({
        data: { message: 'Veículos atualizados com sucesso' },
        status: 202,
      })

      const service = new VehicleService(mockClient)
      const payload = {
        NUM_VEIC: 20044,
        IDN_PLAC_VEIC: 'KGE-9876',
        VEIC_ATIV_EMPR: false,
        DAT_BAIX: '2026-08-28T10:00:00',
      }

      const { vehicle, event } = await service.updateVehicles(payload)

      expect(mockClient.patch).toHaveBeenCalledWith('/veiculos', [payload])
      expect(vehicle).toEqual(payload)
      expect(event.message).toBe('Veículos atualizados com sucesso')
    })

    it('deve inserir veículo incluindo DAT_BAIX no payload', async () => {
      vi.mocked(mockClient.post).mockResolvedValue({
        data: { message: 'Veículos inseridos com sucesso' },
        status: 201,
      })

      const service = new VehicleService(mockClient)
      const payload = {
        NUM_VEIC: 30055,
        IDN_PLAC_VEIC: 'XYZ-1111',
        VEIC_ATIV_EMPR: true,
        DAT_BAIX: null,
      }

      const { vehicle, event } = await service.insertVehicles(payload)

      expect(mockClient.post).toHaveBeenCalledWith('/veiculos', [payload])
      expect(vehicle).toEqual(payload)
      expect(event.message).toBe('Veículos inseridos com sucesso')
    })

    it('deve deletar veículo corretamente', async () => {
      vi.mocked(mockClient.delete).mockResolvedValue({
        data: { message: 'Veículos deletados com sucesso' },
        status: 202,
      })

      const service = new VehicleService(mockClient)
      const { NUM_VEIC, event } = await service.deleteVehicles(10022)

      expect(mockClient.delete).toHaveBeenCalledWith('/veiculos/10022')
      expect(NUM_VEIC).toBe(10022)
      expect(event.message).toBe('Veículos deletados com sucesso')
    })
  })
})

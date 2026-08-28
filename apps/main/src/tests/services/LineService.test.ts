import { describe, it, expect, vi, beforeEach } from 'vitest'
import { LineService } from '@/services/lines'
import { LinesFrameDataSchema } from '@/schemas/LinesFrameDataSchema'
import { IHttpClient } from '@bonfire/core'

describe('LineService & LinesFrameDataSchema (Unit Tests)', () => {
  let mockClient: IHttpClient

  beforeEach(() => {
    mockClient = {
      get: vi.fn(),
      post: vi.fn(),
      patch: vi.fn(),
      delete: vi.fn(),
    }
  })

  describe('LinesFrameDataSchema', () => {
    it('deve validar linha com DAT_BAIX nulo (linha ativa)', () => {
      const payload = {
        COD_LINH: '5502C',
        COMPARTILHADA: false,
        ID_OPERADORA: 1,
        LINH_ATIV_EMPR: true,
        DAT_BAIX: null,
      }
      const parsed = LinesFrameDataSchema.parse(payload)
      expect(parsed.COD_LINH).toBe('5502C')
      expect(parsed.COMPARTILHADA).toBe(false)
      expect(parsed.ID_OPERADORA).toBe(1)
      expect(parsed.LINH_ATIV_EMPR).toBe(true)
      expect(parsed.DAT_BAIX).toBeNull()
    })

    it('deve validar linha com DAT_BAIX preenchido (linha baixada/desativada)', () => {
      const payload = {
        COD_LINH: '8207A',
        COMPARTILHADA: true,
        ID_OPERADORA: 2,
        LINH_ATIV_EMPR: false,
        DAT_BAIX: '2026-08-28T10:00:00',
      }
      const parsed = LinesFrameDataSchema.parse(payload)
      expect(parsed.COD_LINH).toBe('8207A')
      expect(parsed.COMPARTILHADA).toBe(true)
      expect(parsed.ID_OPERADORA).toBe(2)
      expect(parsed.LINH_ATIV_EMPR).toBe(false)
      expect(parsed.DAT_BAIX).toBe('2026-08-28T10:00:00')
    })

    it('deve validar linha sem DAT_BAIX (opcional para compatibilidade)', () => {
      const payload = {
        COD_LINH: '1001A',
        COMPARTILHADA: false,
        ID_OPERADORA: 1,
        LINH_ATIV_EMPR: true,
      }
      const parsed = LinesFrameDataSchema.parse(payload)
      expect(parsed.COD_LINH).toBe('1001A')
      expect(parsed.DAT_BAIX).toBeUndefined()
    })
  })

  describe('LineService', () => {
    it('deve recuperar linhas da API preservando DAT_BAIX', async () => {
      const mockLinesList = [
        {
          COD_LINH: '5502C',
          COMPARTILHADA: false,
          ID_OPERADORA: 1,
          LINH_ATIV_EMPR: true,
          DAT_BAIX: null,
        },
        {
          COD_LINH: '8207A',
          COMPARTILHADA: true,
          ID_OPERADORA: 2,
          LINH_ATIV_EMPR: false,
          DAT_BAIX: '2026-08-28T10:00:00',
        },
      ]

      vi.mocked(mockClient.get).mockResolvedValue({
        data: { linha: mockLinesList },
        status: 200,
      })

      const service = new LineService(mockClient)
      const result = await service.getLines()

      expect(mockClient.get).toHaveBeenCalledWith('/linha')
      expect(result).toHaveLength(2)
      expect(result[0].DAT_BAIX).toBeNull()
      expect(result[1].DAT_BAIX).toBe('2026-08-28T10:00:00')
    })

    it('deve atualizar linha incluindo DAT_BAIX no payload', async () => {
      vi.mocked(mockClient.patch).mockResolvedValue({
        data: { message: 'Linhas atualizadas com sucesso' },
        status: 200,
      })

      const service = new LineService(mockClient)
      const payload = {
        COD_LINH: '8207A',
        COMPARTILHADA: true,
        ID_OPERADORA: 2,
        LINH_ATIV_EMPR: false,
        DAT_BAIX: '2026-08-28T10:00:00',
      }

      const { linha, event } = await service.updateLine(payload)

      expect(mockClient.patch).toHaveBeenCalledWith('/linha', [payload])
      expect(linha).toEqual(payload)
      expect(event.message).toBe('Linhas atualizadas com sucesso')
    })

    it('deve incluir linha incluindo DAT_BAIX no payload', async () => {
      vi.mocked(mockClient.post).mockResolvedValue({
        data: { message: 'Linha incluída com sucesso' },
        status: 201,
      })

      const service = new LineService(mockClient)
      const payload = {
        COD_LINH: '1001A',
        COMPARTILHADA: false,
        ID_OPERADORA: 1,
        LINH_ATIV_EMPR: true,
        DAT_BAIX: null,
      }

      const { linha, event } = await service.includeLine(payload)

      expect(mockClient.post).toHaveBeenCalledWith('/linha', [payload])
      expect(linha).toEqual(payload)
      expect(event.message).toBe('Linha incluída com sucesso')
    })

    it('deve deletar linha corretamente', async () => {
      vi.mocked(mockClient.delete).mockResolvedValue({
        data: { message: 'Linha deletada com sucesso' },
        status: 200,
      })

      const service = new LineService(mockClient)
      const { COD_LINH, event } = await service.deleteLine('5502C')

      expect(mockClient.delete).toHaveBeenCalledWith('/linha/5502C')
      expect(COD_LINH).toBe('5502C')
      expect(event.message).toBe('Linha deletada com sucesso')
    })
  })
})

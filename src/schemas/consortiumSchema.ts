import { z } from 'zod'

export const ConsortiumSchema = z.object({
  nome: z.string().min(1),
  compartilhado: z.coerce.boolean(),
})

export type ConsortiumFrameData = z.infer<typeof ConsortiumSchema>

export type LoadConsortium = {
  consorcios: ConsortiumFrameData[]
}

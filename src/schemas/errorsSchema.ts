import z from 'zod'

export const errorSchema = z.object({
  error: z.string(),
  message: z.string(),
  status: z.number().optional(),
  qtdAtas: z.number().optional(),
  qtdTables: z.number().optional(),
})

export type TCustomError = z.infer<typeof errorSchema>

import z from 'zod'

export const LinesFrameDataSchema = z.object({
  COD_LINH: z.string().min(1, { message: 'Insira o código da linha' }),
  COMPARTILHADA: z.boolean(),
  ID_OPERADORA: z.number(),
  LINH_ATIV_EMPR: z.boolean(),
})

export type LinesFrameData = z.infer<typeof LinesFrameDataSchema>

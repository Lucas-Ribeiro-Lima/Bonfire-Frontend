import z from 'zod'

export const ImportFormFirstSchema = z.object({
  file: z.instanceof(FileList).transform((item) => {
    return item[0]
  }),
})

export const ImportFormSecondSchema = z.object({
  file: z.instanceof(FileList).transform((item) => {
    return item[0]
  }),
})

export type ImportFormData = z.infer<typeof ImportFormFirstSchema>

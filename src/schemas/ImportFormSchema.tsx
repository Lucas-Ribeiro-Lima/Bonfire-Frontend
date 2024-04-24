import z from 'zod'

export const ImportFormFirstSchema = z.object({
  file:
    typeof window === 'undefined'
      ? z.null()
      : z
          .instanceof(FileList)
          .transform((list) => list.item(0))
          .superRefine((item, ctx) => {
            if (!item) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Anexe o arquivo CSV das infrações',
              })
            }
            if (item?.type !== 'text/csv') {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Anexe um arquivo CSV de primeira instância',
              })
            }
          }),
})

export const ImportFormSecondSchema = z.object({
  file:
    typeof window === 'undefined'
      ? z.null()
      : z
          .instanceof(FileList)
          .transform((list) => list.item(0))
          .superRefine((item, ctx) => {
            if (!item) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Anexe o arquivo DOCX das infrações',
              })
            }
            if (
              item?.type !==
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Anexe um arquivo DOCX de segunda instância',
              })
            }
          }),
})

export const responseImportSecondSchema = z.object({
  message: z.string(),
  counter: z.number().optional(),
})

export type TResponseImport = z.infer<typeof responseImportSecondSchema>

export type ImportFormData = z.infer<typeof ImportFormFirstSchema>

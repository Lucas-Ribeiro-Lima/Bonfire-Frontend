import z from 'zod'

export const ImportFormFirstSchema = z.object({
  auto:
    typeof window === 'undefined'
      ? z.undefined()
      : z
          .object({
            file: z.instanceof(FileList).transform((list) => list.item(0)),
          })
          .superRefine(({ file }, ctx) => {
            if (!file) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['file'],
                message: 'Anexe o arquivo CSV das infrações',
              })
            }
            // if (file?.type !== 'application/csv') {
            //   ctx.addIssue({
            //     code: z.ZodIssueCode.custom,
            //     path: ['file'],
            //     message: 'Anexe um arquivo CSV de primeira instância',
            //   })
            // }
          }),
})

export const ImportFormSecondSchema = z.object({
  auto:
    typeof window === 'undefined'
      ? z.undefined()
      : z
          .object({
            file: z.instanceof(FileList).transform((list) => list.item(0)),
          })
          .superRefine(({ file }, ctx) => {
            if (!file) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['file'],
                message: 'Anexe o arquivo DOCX das infrações',
              })
            }
            // if (file?.type !== 'application/docx') {
            //   ctx.addIssue({
            //     code: z.ZodIssueCode.custom,
            //     path: ['file'],
            //     message: 'Anexe um arquivo DOCX de segunda instância',
            //   })
            // }
          }),
})

export type ImportFormData = z.infer<typeof ImportFormFirstSchema>

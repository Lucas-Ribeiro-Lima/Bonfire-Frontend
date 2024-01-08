'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { postAuto } from '../../hooks/postInfractions';

export type ImportFormData = z.infer<typeof ImportFormSchema>

const ImportFormSchema = z.object(
    {
        auto: z.object(
            {
                file:
                    z.instanceof(FileList)
                        .transform(list => list.item(0)),
            })
            .superRefine(({ file }, ctx) => {
                if (!file) {
                    ctx.addIssue({
                        code: z.ZodIssueCode.custom,
                        path: ["file"],
                        message: "Anexe o arquivo CSV das infrações",
                    })
                }
                // if  (file.type !== "application/csv") {
                //     {
                //         ctx.addIssue({
                //             code: z.ZodIssueCode.custom,
                //             path: ["file"],
                //             message: "Anexe um arquivo CSV de primeira instância"
                //         })
                //     }
                // }
            })
    }
)
const ImportFormPrimeiraInstancia = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ImportFormData>(
        {
            resolver: zodResolver(ImportFormSchema)
        }
    )

    //Função de handling do import
    async function handleImport(auto: ImportFormData) {
        await postAuto(auto, 1)
    }

    return (
        <form onSubmit={handleSubmit(handleImport)} className="flex flex-col gap-4 mt-4" encType="multipart/form-data">
            <label htmlFor='file' className="flex flex-col gap-2">
                Selecione o arquivo:
                <input {...register('auto.file')} type='file' accept='.csv'
                    className='file:rounded-lg file:bg-zinc-400 file:font-semibold file:cursor-pointer'>
                </input>
                {errors.auto?.file && <span className='text-red-500 text-sm'> {errors.auto.file.message} </span>}
            </label>
            <button type='submit' className="bg-green-700 w-96 rounded-lg text-black font-semibold p-1 hover:bg-green-500 hover:duration-1000">
                Importar
            </button>
        </form>
    );
}

export default ImportFormPrimeiraInstancia;
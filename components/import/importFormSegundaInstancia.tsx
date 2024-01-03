'use client';

import { importAuto } from '@/lib/importAuto';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImportFormData } from './importFormPrimeiraInstancia copy';

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
                        message: "Anexe o arquivo DOCX das infrações",
                    })
                }
            })
    }
)


//Função de handling do import
async function handleImport(auto: ImportFormData) {
    await importAuto(auto, 2);
}

const ImportFormSegundaInstancia = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<ImportFormData>(
        {
            resolver: zodResolver(ImportFormSchema)
        }
    )

    return (
        <form onSubmit={handleSubmit(handleImport)} className="flex flex-col gap-4" encType="multipart/form-data">
            <label htmlFor='file' className="flex flex-col gap-2">
                Selecione o arquivo:
                <input {...register('auto.file')} type='file' accept='.docx, .pdf'
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

export default ImportFormSegundaInstancia;
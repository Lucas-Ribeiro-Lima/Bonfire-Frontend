type autoFrameData = {
    NUM_NOTF: string,
    TIP_PENL?: string,
    NUM_AI: string,
    NOM_CONC?: string,
    COD_LINH?: number,
    NOM_LINH?: string,
    NUM_VEIC?: number,
    IDN_PLAC_VEIC?: string,
    DAT_OCOR_INFR?: Date,
    DES_LOCA?: string,
    COD_IRRG_FISC?: number,
    ARTIGO?: string,
    DESC_OBSE?: string,
    NUM_MATR_FISC?: number,
    QTE_PONT?: number,
    DAT_EMIS_NOTF?: Date,
    DAT_LIMIT_RECU?: Date,
    VAL_INFR?: number,
    DAT_CANC?: Date
}

export default function InfractionFrame({ NUM_NOTF, NUM_AI }: autoFrameData) {
    return (
        <div className="flex flex-row w-full justify-center gap-4 bg-zinc-500 hover:bg-zinc-400 m-4 p-4 rounded-lg cursor-pointer">
            <div className="text-red-700 hover:text-red-600 font-bold">Número da Notificação: </div>
            <div> {NUM_NOTF}</div>
            <div className="text-red-700 hover:text-red-600 font-bold">Número do Auto:</div>
            <div>{NUM_AI}</div>
        </div>
    )
}
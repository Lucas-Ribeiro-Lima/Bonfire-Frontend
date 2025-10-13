import {RecurseData} from "@/schemas/Infractions";
import {api} from "@/services/apiClient";
import {EventT} from "@/schemas/NotificationSchema";
import {TResponseImport} from "@/schemas/ImportFormSchema";
import {AxiosError} from "axios";

interface ILoadRecurses {
    recurses: RecurseData[]
}

export async function GetRecurseFirstInstance(
    date: string,
    ata: string,
): Promise<RecurseData[]> {
    const map = new Map()

    if (date) map.set('date', date)

    if (ata) map.set('ata', ata)

    const { data } = await api.get<ILoadRecurses>(
        `/recurso/primeiraInstancia`,
        {
            params: Object.fromEntries(map.entries()),
        }
    )

    return data.recurses
}

export async function PostRecurseFirstInstance(file: File) {
    if (!file) throw new Error('Auto vazio')

    const event: EventT = {}
    const body = new FormData()
    event.document = file.name

    body.append('file', file, file.name)

    try {
        const response = await api.post<TResponseImport>(
            'recurso/primeiraInstancia/resultado',
            body,
            { timeout: 320000 },
        )
        if (response.status === 200) {
            event.message = `${response.data.message} Quantidade: ${response.data.counter}`
        }
    } catch (error) {
        if (error instanceof AxiosError) {
            event.message = error.response?.data.message
        }
    }

    return { event }
}

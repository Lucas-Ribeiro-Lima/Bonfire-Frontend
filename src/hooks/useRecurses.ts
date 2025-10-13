
// Função de handling do import
import {useState} from "react";
import {useNotifications} from "@/hooks/useNotifications";
import {ImportFormData} from "@/schemas/ImportFormSchema";
import {PostRecurseFirstInstance} from "@/services/recurse";
import {toast} from "sonner";

export function useRecurses() {
    const [importing, setImporting] = useState(false)
    const { handleInsert: handleInsertNotification } = useNotifications()

    async function HandleImportFirstInstance(data: ImportFormData) {
        if (!data.file) return
        try {
            setImporting(true)
            const { event } = await PostRecurseFirstInstance(data.file)
            toast(event.message)
            handleInsertNotification(event)
        } finally {
            setImporting(false)
        }
    }

    return { importing, HandleImportFirstInstance }
}

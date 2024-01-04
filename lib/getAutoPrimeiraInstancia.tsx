import { ApiClient } from "@/services/apiClient";

export async function GetInfractions(date) {

    const body = new FormData();

    try {
        body.append('data', date)

        await ApiClient
            .get('autoInfracao/primeiraInstancia')
            .then( response => {
                if (response.status == 200){
                    return response.data
                }
            }).catch(error => {
                console.error(error)
            })
    }
    catch (error) {
        throw `Error fetching infractions: ${error}`
    }

}
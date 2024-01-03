import { ImportFormData } from "@/components/import/importFormPrimeiraInstancia copy";
import { ApiClient } from "@/services/apiClient";


export async function importAuto ({ auto }: ImportFormData, option: number){
    
    const data = new FormData();
    
    try {

        data.append("file", auto.file, auto.file?.name)

        if (option === 1){

            ApiClient
            .post("autoInfracao/primeiraInstancia", data)
            .then(response => {
                return (
                    console.log(response.status, response.data)
                )
            })
        }

        if (option === 2) {

            ApiClient
            .post("autoInfracao/segundaInstancia", data)
            .then(response => {
                return (
                    console.log(response.status, response.data)
                )
            })
        }
    }

    catch (error) {
        return console.log("Error: ", error)
    }
}
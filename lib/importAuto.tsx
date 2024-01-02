import { ImportFormData } from "@/components/import/importForm";
import { ApiClient } from "@/services/apiClient";

export async function importAuto ({auto: {file, option}}: ImportFormData){
    
    const data = new FormData();
    
    try {

        data.append("file", file, file?.name)

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
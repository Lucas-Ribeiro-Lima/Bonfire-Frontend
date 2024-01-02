import VehicleFrame from "./vehiclesFrame";
import VehiclesMenu from "./vehiclesMenu";

async function GetVehicles() {
    const request = await fetch("http://127.0.0.1:5000/veiculos")
    const response = await request.json()
    return response
}

export default async function VehiclesLayout() {

    const veiculosData = await GetVehicles();
    console.log(veiculosData)
    const veiculosArray = JSON.parse(veiculosData.veiculos || [])
    console.log(veiculosArray)
    
    return (
        <div className="flex flex-row h-96 justify-center gap-4 rounded-lg">
            <VehiclesMenu></VehiclesMenu>
            <div className="flex flex-col overflow-y-scroll">
            {veiculosArray.map(
                ({ num_veiculo, placa }) => {
                    return (
                        <div key={num_veiculo}>
                            <VehicleFrame num_veiculo={num_veiculo} placa={placa}></VehicleFrame>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}
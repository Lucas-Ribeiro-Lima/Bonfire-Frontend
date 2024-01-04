import LinesFrame from "./consortiumFrame";

async function GetConsortium(): Promise<any> {
    // const request = await fetch("http://127.0.0.1:5000/linha")
    // const response = await request.json()
    return null
}

function ConsortiumMenu() {
    return (
        <div className="flex flex-col relative m-6 gap-8">
            <div className="flex flex-row gap-4">
                <label className="flex flex-col text-white rounded-lg font-semibold">
                    Veículo:
                    <input type="text" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input>
                </label>
                <label className="flex flex-col text-white rounded-lg font-semibold">
                    Placa:
                    <input type="text" className="w-36 pl-1 rounded-lg bg-white/60 text-black"></input>
                </label>
            </div>
            <button className="flex justify-center items-center p-1 bg-white/60 hover:bg-white/90 rounded-lg text-black font-semibold"> Filtrar </button>
            <div className="flex flex-row gap-4">
                <button className="bg-emerald-500 hover:bg-emerald-400 rounded-lg text-black p-2 w-1/2 font-semibold"> Cadastrar </button>
                <button className="bg-white/60 hover:bg-white/90 rounded-lg text-black p-2 w-1/2 font-semibold"> Desativar </button>
            </div>
        </div>
    )
}

export default async function ConsortiumLayout() {

    const ConsortiumData = await GetConsortium();

    return (
        <div className="flex flex-row">
            {/* <ConsortiumsMenu></ConsortiumsMenu> */}
            <div className="flex flex-col h-96 pr-10 bg-zinc-700 rounded-lg overflow-y-scroll scrollbar">
                {ConsortiumData.veiculos.map(
                    ({ num_veiculo, placa }) => {
                        return (
                            <div key={num_veiculo}>
                                <LinesFrame num_veiculo={num_veiculo} placa={placa}></LinesFrame>
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}
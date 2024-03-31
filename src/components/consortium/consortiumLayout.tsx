'use client'

import { FetchData } from '@/hooks/fetchData'
import ConsortiumFrame from './consortiumFrame'

type ConsortiumDataType = {
  consorcio: {
    nome: string
    compartilhado: string
  }[]
}

// function ConsortiumMenu() {
//   return (
//     <div className="relative m-6 flex flex-col gap-8">
//       <div className="flex flex-row gap-4">
//         <label className="flex flex-col rounded-lg font-semibold text-white">
//           Veículo:
//           <input
//             type="text"
//             className="w-36 rounded-lg bg-white/60 pl-1 text-black"
//           ></input>
//         </label>
//         <label className="flex flex-col rounded-lg font-semibold text-white">
//           Placa:
//           <input
//             type="text"
//             className="w-36 rounded-lg bg-white/60 pl-1 text-black"
//           ></input>
//         </label>
//       </div>
//       <button className="flex items-center justify-center rounded-lg bg-white/60 p-1 font-semibold text-black hover:bg-white/90">
//         {' '}
//         Filtrar{' '}
//       </button>
//       <div className="flex flex-row gap-4">
//         <button className="w-1/2 rounded-lg bg-emerald-500 p-2 font-semibold text-black hover:bg-emerald-400">
//           {' '}
//           Cadastrar{' '}
//         </button>
//         <button className="w-1/2 rounded-lg bg-white/60 p-2 font-semibold text-black hover:bg-white/90">
//           {' '}
//           Desativar{' '}
//         </button>
//       </div>
//     </div>
//   )
// }

export default async function ConsortiumLayout() {
  const { data: ConsortiumData } = FetchData<ConsortiumDataType>('consorcio')

  return (
    <div className="flex flex-row">
      {/* <ConsortiumsMenu></ConsortiumsMenu> */}
      <div className="scrollbar flex h-96 flex-col overflow-y-scroll rounded-lg bg-zinc-700 pr-10">
        {ConsortiumData?.consorcio.map(({ nome, compartilhado }) => {
          return (
            <div key={nome}>
              <ConsortiumFrame
                nome={nome}
                compartilhado={compartilhado}
              ></ConsortiumFrame>
            </div>
          )
        })}
      </div>
    </div>
  )
}

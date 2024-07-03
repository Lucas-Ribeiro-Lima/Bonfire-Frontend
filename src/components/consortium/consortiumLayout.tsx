'use client'

import { GetConsortiums } from '@/services/consortium'
import ConsortiumFrame from './consortiumFrame'

export default function ConsortiumLayout() {
  const { data } = GetConsortiums()
  return (
    <div className="flex flex-row">
      {/* <ConsortiumsMenu></ConsortiumsMenu> */}
      <div className="scrollbar flex h-96 flex-col overflow-y-scroll rounded-lg bg-zinc-700 pr-10">
        {data?.map(({ nome, compartilhado }) => {
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

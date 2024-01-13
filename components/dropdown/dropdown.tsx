import Link from 'next/link'
import { ReactNode, useState } from 'react'

interface DropDownFieldData {
  path: string
  description: string
  icon?: ReactNode
}
interface DropDownFatherFieldData {
  description: string
  icon: ReactNode
  children?: ReactNode
}

export const DropdownFatherField = ({
  description,
  icon,
  children,
}: DropDownFatherFieldData) => {
  const [isDropDown, setIsDropDown] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsDropDown(!isDropDown)}
        className="
                        scale-75
                        rounded-xl
                        p-2 
                        hover:bg-red-950 
                        hover:text-red-600 
                        hover:drop-shadow-2xl 
                        hover:duration-1000 
                        focus:bg-red-950 
                        focus:text-red-600"
      >
        <div
          className="
                        flex
                        justify-center 
                        gap-2 
                        align-middle"
        >
          {icon}
          {description}
        </div>
      </button>
      {isDropDown && (
        <div
          className="
                        flex-col 
                        rounded-xl 
                        bg-zinc-700 
                        text-white 
                        shadow-2xl"
        >
          {children}
        </div>
      )}
    </div>
  )
}

export const DropDownField = ({
  path,
  description,
  icon,
}: DropDownFieldData) => {
  return (
    <>
      <Link
        className="
                    flex 
                    scale-75
                    cursor-pointer
                    justify-center
                    rounded-xl
                    p-2 
                    align-middle 
                    hover:bg-zinc-600 
                    hover:drop-shadow-2xl 
                    hover:duration-1000"
        href={path}
      >
        {' '}
        {icon}
        {description}
      </Link>
    </>
  )
}

export const SimpleField = ({ path, description, icon }: DropDownFieldData) => {
  return (
    <Link
      href={path}
      className="flex h-10 w-36 justify-center rounded-xl hover:bg-red-950 hover:text-red-600
                 hover:drop-shadow-2xl hover:duration-1000 focus:bg-red-950 focus:text-red-600"
    >
      <div className="flex flex-row gap-2 self-center justify-self-center">
        {icon}
        {description}
      </div>
    </Link>
  )
}

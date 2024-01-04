'use client'

import { LucideHome, AlignJustify, FileSpreadsheetIcon, LucideImport, Settings, LogIn } from "lucide-react";
import { DropDownField, DropdownFatherField, SimpleField } from '@/components/dropdown/dropdown'
import Link from "next/link";



const MenuBar = () => {
    return (
        <div className="flex flex-row gap-8 p-4 text-zinc-500 rounded-br-lg">

            <Link href="/">
                <DropdownFatherField description="Inicio" icon={<LucideHome />}></DropdownFatherField>
            </Link>

            <DropdownFatherField description="Cadastros" icon={<AlignJustify />}>
                <DropDownField path='/registers/vehicles' description='Veiculos'></DropDownField>
                <DropDownField path='/registers/lines' description='Linhas'></DropDownField>
                <DropDownField path='/registers/consortium' description='Consórcio'></DropDownField>
            </DropdownFatherField>

            <DropdownFatherField description="Infrações" icon={<FileSpreadsheetIcon />}>
                <DropDownField path="/infractions/firstInstance" description="Primeira Instancia"></DropDownField>
                <DropDownField path="/infractions/secondInstance" description="Segunda Instancia"></DropDownField>
            </DropdownFatherField>

            <DropdownFatherField description="Importação" icon={<LucideImport />}>
                <DropDownField path='/import/primeiraInstancia' description='Primeira Instância'></DropDownField>
                <DropDownField path='/import/segundaInstancia' description='Segunda Instância'></DropDownField>
            </DropdownFatherField>

            {/* <DropdownFatherField description="Configuração" icon={<Settings />}></DropdownFatherField> */}

            <Link href='/login'>
                <DropdownFatherField description="Sair" icon={<LogIn />}></DropdownFatherField>
            </Link>            
        </div>
    );
}

export default MenuBar;
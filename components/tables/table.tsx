'use client'
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { FetchInfractionsFirstInstance } from "../../hooks/fetchData";
import { autosData } from "../infractions/infractionLayout";

const columns = [
  {
      key: "NUM_NOTF",
      label: "Num Notificação",
  },
  {
      key: "TIP_PENL",
      label: "Tipo Penal",
  },
  {
      key: "NUM_AI",
      label: "Num AI",
  },
  {
      key: "NOM_CONC",
      label: "Concessionária",
  },
  {
      key: "COD_LINH",
      label: "Linha",
  },
  {
      key: "NOM_LINH",
      label: "Nome Linha",
  },
  {
      key: "NUM_VEIC",
      label: "Veiculo",
  },
];

const rows = [
  {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
  },
  {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
  },
  {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
  },
  {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
  },
];

export default function TableTest() {

  const date = '2023-10-01'
  const { data, error } = FetchInfractionsFirstInstance<autosData>("/autoInfracao/primeiraInstancia", date)

  if (!data) return <div>Loading</div>

  return (
    <Table aria-label="First instance infractions table">
      <TableHeader>
        {columns.map((column) =>
          <TableColumn key={column.key}>{column.label}</TableColumn>)
        }
      </TableHeader>
      <TableBody items={data?.autos}>
        {data.autos.map((row) => (
          <TableRow key={row.NUM_NOTF}>
            {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
import MainApp from "@/components/UI/mainApp"
import PrimaryLayout from "@/components/UI/primaryLayout"
import ImportFormPrimeiraInstancia from "@/components/import/importFormPrimeiraInstancia copy"

export default function Home() {
  return (
      <PrimaryLayout>
        <MainApp title="Importação Primeira Instância">
          <ImportFormPrimeiraInstancia></ImportFormPrimeiraInstancia>
        </MainApp>
      </PrimaryLayout>
    )
}

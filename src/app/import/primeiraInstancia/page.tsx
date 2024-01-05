import MainApp from "@/components/UI/mainApp"
import PrimaryLayout from "@/components/UI/primaryLayout"
import ImportFormPrimeiraInstancia from "@/components/import/importFormPrimeiraInstancia"

export default function Home() {
  return (
      <PrimaryLayout>
        <MainApp title="Importação Primeira Instância">
          <ImportFormPrimeiraInstancia></ImportFormPrimeiraInstancia>
        </MainApp>
      </PrimaryLayout>
    )
}

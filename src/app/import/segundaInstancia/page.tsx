import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'
import ImportFormSegundaInstancia from '@/components/import/importFormSegundaInstancia'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp title="Importação Segunda Instância">
        <ImportFormSegundaInstancia></ImportFormSegundaInstancia>
      </MainApp>
    </PrimaryLayout>
  )
}

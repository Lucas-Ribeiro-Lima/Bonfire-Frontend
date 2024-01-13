import LogoCompleta from '@/components/UI/logo'
import MainApp from '@/components/UI/mainApp'
import PrimaryLayout from '@/components/UI/primaryLayout'

export default function Home() {
  return (
    <PrimaryLayout>
      <MainApp>
        <LogoCompleta></LogoCompleta>
      </MainApp>
    </PrimaryLayout>
  )
}

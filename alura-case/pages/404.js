import Link from '../src/components/Link'
import PageTitle from '../src/components/PageTitle'
export default function Page404() {
  return (
    <div>
      <PageTitle>
        Página não encontrada!
      </PageTitle>
      <h1>Você se perdeu e caiu na página 404 😥</h1>
      <Link href="/">
        ir para home
      </Link>
    </div>
  )
}


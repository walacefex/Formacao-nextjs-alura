import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();

  return (
    <div>
      Id do post atual: {router.query.id}

      <ul>
        <li>
          <Link href="/">
            Ir para a home
          </Link>
        </li>
      </ul>
    </div>
  )
}
import Link from "next/link";

function SobrePage() {
  return (
    <div>
      Você está na página sobre

      <ul>
        <li>
          <Link href="/">Ir para a Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default SobrePage;
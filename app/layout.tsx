import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Portal PPRS',
  description: 'Simulados e banco de questões para a Polícia Penal do RS'
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>
    <header><div className="container nav">
      <Link href="/" className="brand">Portal PPRS</Link>
      <nav className="links">
        <Link href="/banco">Banco de questões</Link>
        <Link href="/simulado">Gerar simulado</Link>
        <Link href="/pedir">Pedir questões</Link>
      </nav>
    </div></header>
    {children}
    <footer><div className="container">Portal PPRS de Questões — versão inicial.</div></footer>
  </body></html>
}

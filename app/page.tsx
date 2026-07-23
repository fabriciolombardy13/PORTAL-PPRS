import Link from 'next/link'
import questions from '@/data/questions.json'

export default function Home(){
  const materias = new Set(questions.map(q=>q.materia)).size
  return <main>
    <section className="hero"><div className="container">
      <span className="badge">Polícia Penal RS</span>
      <h1>Seu portal de questões para a PPRS.</h1>
      <p>Monte simulados por matéria e quantidade, elimine alternativas com a tesoura, acompanhe seu resultado e revise cada justificativa.</p>
      <div className="actions">
        <Link className="button primary" href="/simulado">Criar simulado</Link>
        <Link className="button" href="/banco">Explorar questões</Link>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <div className="grid">
        <div className="card"><div className="stat">{questions.length}</div><div className="muted">questões iniciais cadastradas</div></div>
        <div className="card"><div className="stat">{materias}</div><div className="muted">matérias disponíveis</div></div>
        <div className="card"><div className="stat">2</div><div className="muted">modos: estudo e prova</div></div>
      </div>
    </div></section>

    <section className="section"><div className="container">
      <h2 className="section-title">Recursos já disponíveis</h2>
      <div className="grid">
        <div className="card"><h3>Simulado personalizado</h3><p className="muted">Escolha matéria, quantidade e modo de resolução.</p></div>
        <div className="card"><h3>Tesoura ✂️</h3><p className="muted">Risque alternativas sem marcar uma resposta.</p></div>
        <div className="card"><h3>Justificativas</h3><p className="muted">Veja a explicação individual de todas as alternativas.</p></div>
        <div className="card"><h3>Resultado</h3><p className="muted">Nota, percentual e contagem de acertos ao final.</p></div>
      </div>
    </div></section>
  </main>
}

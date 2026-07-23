'use client'
import {useMemo,useState} from 'react'
import questions from '@/data/questions.json'

export default function Banco(){
  const [materia,setMateria]=useState('Todas')
  const materias=['Todas',...Array.from(new Set(questions.map(q=>q.materia)))]
  const lista=useMemo(()=>materia==='Todas'?questions:questions.filter(q=>q.materia===materia),[materia])
  return <main className="section"><div className="container">
    <h1>Banco de questões</h1>
    <div className="card">
      <label>Filtrar por matéria</label>
      <select value={materia} onChange={e=>setMateria(e.target.value)}>{materias.map(m=><option key={m}>{m}</option>)}</select>
    </div>
    <div style={{marginTop:18}}>
      {lista.map(q=><article className="card question" key={q.id}>
        <span className="badge">{q.materia}</span>
        <h3>Questão {q.id}</h3>
        <p>{q.enunciado}</p>
        <p className="muted">{q.assunto} · nível {q.dificuldade}/10</p>
      </article>)}
    </div>
  </div></main>
}

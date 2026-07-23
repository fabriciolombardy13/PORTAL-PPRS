'use client'
import {useMemo,useState} from 'react'
import questions from '@/data/questions.json'

type Q = typeof questions[number]

export default function Simulado(){
  const materias=['Todas',...Array.from(new Set(questions.map(q=>q.materia)))]
  const [materia,setMateria]=useState('Todas')
  const [quantidade,setQuantidade]=useState(5)
  const [modo,setModo]=useState('estudo')
  const [started,setStarted]=useState(false)
  const [lista,setLista]=useState<Q[]>([])
  const [idx,setIdx]=useState(0)
  const [respostas,setRespostas]=useState<Record<number,number>>({})
  const [cortadas,setCortadas]=useState<Record<number,number[]>>({})
  const [finalizado,setFinalizado]=useState(false)

  function iniciar(){
    const base=(materia==='Todas'?questions:questions.filter(q=>q.materia===materia))
    const embaralhadas=[...base].sort(()=>Math.random()-.5).slice(0,Math.min(quantidade,base.length))
    setLista(embaralhadas);setStarted(true);setIdx(0);setRespostas({});setCortadas({});setFinalizado(false)
  }
  function responder(alt:number){if(respostas[lista[idx].id]!==undefined)return;setRespostas({...respostas,[lista[idx].id]:alt})}
  function cortar(alt:number){
    const qid=lista[idx].id; const arr=cortadas[qid]||[]
    setCortadas({...cortadas,[qid]:arr.includes(alt)?arr.filter(x=>x!==alt):[...arr,alt]})
  }
  const acertos=useMemo(()=>lista.filter(q=>respostas[q.id]===q.correta).length,[lista,respostas])
  if(!started)return <main className="section"><div className="container">
    <h1>Gerar simulado</h1>
    <div className="card">
      <div className="form-grid">
        <div><label>Matéria</label><select value={materia} onChange={e=>setMateria(e.target.value)}>{materias.map(m=><option key={m}>{m}</option>)}</select></div>
        <div><label>Número de questões</label><input type="number" min="1" max="100" value={quantidade} onChange={e=>setQuantidade(Number(e.target.value))}/></div>
        <div><label>Modo</label><select value={modo} onChange={e=>setModo(e.target.value)}><option value="estudo">Estudo</option><option value="prova">Prova</option></select></div>
      </div>
      <div className="actions"><button className="button primary" onClick={iniciar}>Começar</button></div>
      <p className="muted">O sistema usa as questões cadastradas. Conforme novos bancos forem adicionados, será possível gerar simulados maiores e mais específicos.</p>
    </div>
  </div></main>

  if(finalizado){
    const perc=lista.length?Math.round(acertos/lista.length*100):0
    return <main className="section"><div className="container">
      <h1>Resultado</h1>
      <div className="grid">
        <div className="card"><div className="stat">{acertos}/{lista.length}</div><div className="muted">acertos</div></div>
        <div className="card"><div className="stat">{perc}%</div><div className="muted">aproveitamento</div></div>
        <div className="card"><div className="stat">{(perc/10).toFixed(1)}</div><div className="muted">nota de 0 a 10</div></div>
      </div>
      <div className="actions"><button className="button primary" onClick={()=>setStarted(false)}>Novo simulado</button></div>
    </div></main>
  }

  const q=lista[idx]
  const marcada=respostas[q.id]
  const cuts=cortadas[q.id]||[]
  return <main className="section"><div className="container">
    <div className="card">
      <div className="progress"><div style={{width:`${((idx+1)/lista.length)*100}%`}}/></div>
      <p className="muted">Questão {idx+1} de {lista.length} · {q.materia}</p>
      <h2>{q.enunciado}</h2>
      {q.alternativas.map((a,i)=>{
        const answered=marcada!==undefined
        const cls=['option',cuts.includes(i)?'cut':'',answered&&i===q.correta?'correct':'',answered&&i===marcada&&i!==q.correta?'wrong':''].join(' ')
        return <div className={cls} key={i}>
          <button onClick={()=>responder(i)}>{String.fromCharCode(65+i)}</button>
          <div className="option-text">{a}</div>
          <button title="Cortar alternativa" onClick={()=>cortar(i)}>✂️</button>
          {modo==='estudo'&&answered&&<div className="feedback" style={{gridColumn:'1/-1'}}>{q.justificativas[i]}</div>}
        </div>
      })}
      <div className="actions">
        <button className="button" disabled={idx===0} onClick={()=>setIdx(idx-1)}>Anterior</button>
        {idx<lista.length-1
          ?<button className="button primary" onClick={()=>setIdx(idx+1)}>Próxima</button>
          :<button className="button primary" onClick={()=>setFinalizado(true)}>Finalizar</button>}
      </div>
    </div>
  </div></main>
}

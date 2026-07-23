'use client'
import {useState} from 'react'

export default function Pedir(){
  const [materia,setMateria]=useState('Legislação Aplicada/Direito')
  const [qtd,setQtd]=useState(30)
  const [nivel,setNivel]=useState(8)
  const [foco,setFoco]=useState('')
  const texto=`Crie um simulado para a PPRS com ${qtd} questões de ${materia}, dificuldade ${nivel}/10, estilo FUNDATEC/PPRS.${foco?` Foque em: ${foco}.`:''} Faça questões inéditas, cinco alternativas, gabarito comentado e justificativa individual de todas as alternativas. Entregue em PDF e também em formato compatível com o Portal PPRS, com tesoura, correção, nota e percentual.`
  return <main className="section"><div className="container">
    <h1>Pedir novo simulado</h1>
    <div className="card">
      <div className="form-grid">
        <div><label>Matéria</label><input value={materia} onChange={e=>setMateria(e.target.value)}/></div>
        <div><label>Quantidade</label><input type="number" value={qtd} onChange={e=>setQtd(Number(e.target.value))}/></div>
        <div><label>Dificuldade</label><input type="number" min="1" max="10" value={nivel} onChange={e=>setNivel(Number(e.target.value))}/></div>
      </div>
      <label>Assuntos, leis ou artigos</label><textarea value={foco} onChange={e=>setFoco(e.target.value)} />
      <div className="card" style={{marginTop:16}}><p>{texto}</p></div>
      <div className="actions"><button className="button primary" onClick={()=>navigator.clipboard.writeText(texto)}>Copiar pedido</button></div>
    </div>
  </div></main>
}

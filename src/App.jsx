
import './App.css'
import Card from './components/Card'
import { useState } from 'react';


function App() {

const [tema,setNombre]= useState("");
const [banda,setBanda]= useState("");
const handleSubmit = e=>{e.preventDefault();}

  return (
    <>
      <div>
        <h1>Musica</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor='tema'>Nombre de tema favorito</label>
          <input
            value={tema}
            placeholder='Nombre'
            onChange={e=>{setNombre(e.target.value)}}/>

          <label htmlFor='banda'>Nombre de banda</label>
          <input
            value={banda}
            placeholder='Banda'
            onChange={e=>{setBanda(e.target.value)}} />

          <button type="submit">enviar</button>

        </form>
        <Card/>
      </div>
    </>
  )
}

export default App

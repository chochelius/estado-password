import './App.css';
import React from 'react';
// importar useState
import { useState } from 'react';
// importar Input y Boton
import Boton from './components/Button';
import Input from './components/Input';


function App() {
//crear y setear los estados

const [password, setPassword] = useState('')


const changePassword = e => setPassword(e.target.value)

//capturar cambios en el input password

//crear funcion para validar password



//funcion para monitorear cambios en los campos de texto


return (
  <div className="App">
    <h1>Formulario</h1>
    <form >
      <Input  />
      <Input />
      {password === '252525' ? <Boton type="submit" value="Enviar" /> : null }
    </form>
  </div>
);
}


export default App;


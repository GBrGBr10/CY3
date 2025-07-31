import './App.css';
import Casa from './Componentes/Casa';
import Componente001 from './Componentes/Componente001';
import Componente002 from './Componentes/Componente002';
import Componente003 from './Componentes/Componente003';
import { Componente004, Componente005 } from './Componentes/Componente004';
import LoginButton from './Componentes/LoginButton';


function App() {
  const botoes = Array.from({length: 5}).map( ()=>{
    return <LoginButton />
  } )
    
  //parte lógica

  return (
    //parte gráfica
    
    <div>
      <Componente001 />
      <Componente002 />
      <Componente003 />
      <Componente004 />
      <Componente005 />
      <Casa />

      <div>
        <LoginButton />
        <LoginButton label='butão2'/>
        {botoes}
      </div>
    </div>
  );
}

export default App;

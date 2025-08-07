import './App.css';
import Contador from './Componentes/Contador';
import Estados from './Componentes/Estados';
import Eventos from './Componentes/Eventos';
import EventosParametros from './Componentes/EventosParametros';
import Pulando from './Componentes/Pulando';

function App() {
  return (
    <div>
        <h1>Estados e Eventos</h1>
        <Estados />
        <Eventos />
        <EventosParametros />  
        <Contador />  
        <Pulando />
    </div>
  );
}

export default App;

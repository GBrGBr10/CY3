import './App.css';
import BibliotecaApi from './Componentes/BibliotecaApi';
import PhraseGenerator from './Componentes/PhraseGenerator';

function App() {
    return (
    <div className='app'>
        <div className='app-card'>
            <h1 className='title'>Gerador de Frases</h1>
            <hr/>
            <PhraseGenerator />
            <BibliotecaApi />
        </div>

    </div>
    );
}

export default App;



import './App.css';
import BibliotecaApi from './Componentes/BibliotecaApi';
import JsonServerApi from './Componentes/JsonServerApi';
import PhraseGenerator from './Componentes/PhraseGenerator';

function App() {
    return (
    <div className='app'>
        <div className='app-card'>
            <h1 className='title'>Generator Phrase</h1>
            <hr/>
            <PhraseGenerator />
            <BibliotecaApi />
            <JsonServerApi />
        </div>

    </div>
    );
}

export default App;



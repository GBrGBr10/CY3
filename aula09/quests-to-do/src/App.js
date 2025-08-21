import './App.css';
import AddQuest from './Componentes/AddQuest';
import Saudacao from './Componentes/Saudacao';

function App() {
    function minhaFuncao(title) {
      console.log(title);
    };

    const filho2 = () => {
      return ('filho2')
    };

    const filho3 = {
        nome: 'filho 3!',
        idade: 20,
        numero: 3,
    };

    const filhos = [
      {nome: 'filho4!', idade: 18, numero: 4},
      {nome: 'filho5!', idade: 15, numero: 5},
      {nome: 'filho6!', idade: 12, numero:6},
    ];

    function minhaFuncao(tarefa) {
      console.log(tarefa);
    };

  return (
    <div>
      <Saudacao nome={'filho 1!'}/>
      <Saudacao nome={filho2()}/>
      <Saudacao nome={filho3} />
      <Saudacao nome={filhos} />

          <h1>Quest to do</h1>
      <AddQuest saveAddQuest={minhaFuncao} />
    </div>
  );
}

export default App;

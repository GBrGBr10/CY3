import logo from './logo.svg';
import './App.css';
import Header from './Componentes/Header';
import Section from './Componentes/Section';
import ListItem from './Componentes/ListItem';

function App() {

      const listLancamentos = [
        {
          imagem:'./imagens/image_pagina2/nintendo_movie_mario.jpg',
          titulo:'Super Mario Bros: O Filme',
          descricao:'Mario e Luigi enfrentam Bowser em uma nova aventura pelo Reino Cogumelo!',
          link:'Saiba Mais',
        },

        {
          imagem:'./imagens/image_pagina2/nintendo_movie_zelda.jpg',
          titulo:'The Legend Of Zelda',
          descricao:'Link embarca em uma jornada épica para salvar Hyrule de Ganon.',
          link:'Saiba Mais',
        },

        {
          imagem:'./imagens/image_pagina2/nintendo_movie_kong.jpg',
          titulo:'Donkey Kong: A Selva Vai Tremer',
          descricao:'Donkey Kong precisa defender seu lar de novos inimigos no meio da selva!',
          link:'Saiba Mais',
        },
      ]

      const listMaisProducoes = [
        {
          imagem:'./imagens/image_pagina2/nintendo_movie_pokemon.jpg',
        },
      ]

  return (
    <div className="App">
      <Header />

      <main>

          <Section
          produtos = {'Nossos Lançamentos'}
          >

              <ul>
                {listLancamentos.map((item)=>{
                  return(
                    <ListItem 
                    imagem={item.imagem}
                    titulo={item.titulo}
                    descricao={item.descricao}
                    link={item.link}
                    />
                  )
            })}
              </ul>
          </Section>



          <Section
          produtos = {'Mais Produções'}
          >

              <ul>
                {listMaisProducoes.map((item)=>{
                  return(
                    <ListItem
                      imagem={item.imagem}
                    />
                  )
                })}
              </ul>

          </Section>

      </main>
    </div>

  );
}

export default App;

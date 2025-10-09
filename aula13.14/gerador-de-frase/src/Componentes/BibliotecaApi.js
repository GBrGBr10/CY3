import axios from "axios";
import { useState } from "react";
import './BibliotecaApi.css';

function BibliotecaApi () {
    const [book, setBook] = useState('');
    const [info, setInfo] = useState([]);

    const buscarBibliotecaApi = async () => {

        try{
            const resposta = await axios.get(`https://openlibrary.org/search.json?q=${book}`);
            setInfo(resposta.data.docs.slice(0,10));
        }

        catch(error) {
            console.log('Error when searching for book', error);
            setInfo([]);
        }
    }

    return(
        <div>
            <h1>LibraryOpen Source</h1>
            <div>
                <input 
                type="text"
                value={book}
                onChange={(evento) => setBook(evento.target.value)}
                />

                <button 
                onClick={buscarBibliotecaApi}
                >Search</button>
            </div>
            

            <div>
                {info.length ? (<p>{info[0].title}</p>) : (<p>Nenhum Resultado</p>)}
            </div>

            <div>
                {info.map( (book, index) => {
                    return(
                        <div key={index} >

                        {book.cover_i ? (
                            <img 
                                src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                alt="" 
                            />
                            ) : ( 
                            <div>No cover</div> 
                            )}
                        <h3>{book.title}</h3>
                        </div>
                    )
                    
                } )}
            </div>

        </div>
    )
}

export default BibliotecaApi
import { useState } from "react";
import Phrase from "./Phrase";
import './PhraseGenerator.css';
import axios from "axios";

function PhraseGenerator() {
    const[phrase, setPhrase] = useState(
        {
            conteudo:"Suspeitei desde o princípio!", autor:"Chapolin Colorado!"
        });

    const[loading, setLoading] = useState(false);

    const[error, setError] = useState(null);

    const getRandomPhrase = async () => {
        try{
            setLoading(true);
            const response = await axios.get("http://api.quotable.io/random");
            const data = response.data;
            setPhrase({conteudo:data.content, autor: data.author})
        } catch (error) {
            setError ("Erro ao buscar a frase");
            console.error("Erro ao buscar a frase: ", error);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return(
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return(
            <div>
                <p>{error}</p>
            </div>
        );
    }

    return(
        <div className="phrase-generator">
            <Phrase texto={phrase.conteudo} autor={phrase.autor}/>
            <button className="botao-nova-frase" onClick={getRandomPhrase}>Nova Frase</button>
        </div>
    );
}

export default PhraseGenerator;



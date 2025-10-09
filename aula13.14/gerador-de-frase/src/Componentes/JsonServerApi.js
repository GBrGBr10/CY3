import axios from "axios";
import { useState } from "react"

function JsonServerApi() {

    const[busca, setBusca] = useState("");
    const[info, setInfo] = useState ([]);

    const buscarServidor = async () => {
        try{
            const resposta = await axios.get(`http://localhost:5000/frases?${busca}`)
            const respostafiltro = resposta.data.filter( (item) => {
                return (
                    item.frase.includes(busca)
                )
            })
            setInfo(respostafiltro);
        }
        catch (erro) {
            console.log("Erro", erro);
            setInfo([])
        }
    }
    return(
        <div>
            <h1>Json Server</h1>
            <div>
                <input 
                type="text"
                value={busca}
                onChange={ (evento) => {
                    return(
                        setBusca(evento.target.value)
                    )
                } } 
                />
                <button onClick={buscarServidor}>Search</button>
            </div>

            <div>
                {info.map( (item, index) => {
                    return(
                        <div key={index}>
                            <p>{item.frase}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default JsonServerApi;
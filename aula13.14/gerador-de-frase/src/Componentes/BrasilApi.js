import axios from "axios";
import { useState } from "react";

function BrasilApi() {

    const [cep, setCep] = useState('');
    const [info, setInfo] = useState(null);

    const [ddd, setDdd] = useState('');
    const [info2, setInfo2] = useState(null);

    const buscarCepApi = async () => {
        try {
            const resposta = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
            setInfo(resposta.data);
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
            setInfo(null);
        }
    };

    const buscarDddApi = async () => {
        try {
            const resposta = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
            setInfo2(resposta.data);
        } catch (error) {
            console.error("Erro ao buscar CEP:", error);
            setInfo2(null);
        }
    };

    return(
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Digite o CEP"
                    value={cep}
                    onChange={(evento) => setCep(evento.target.value)}
                />
                <button onClick={buscarCepApi}>Buscar CEP</button>
                
                <div>
                    <p><strong>CEP:</strong> {info?.cep}</p>
                    <p><strong>Rua:</strong> {info?.street}</p>
                    <p><strong>Bairro:</strong> {info?.neighborhood}</p>
                    <p><strong>Cidade:</strong> {info?.city}</p>
                    <p><strong>Estado:</strong> {info?.state}</p>
                </div>
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Digite o DDD"
                    value={ddd}
                    onChange={(evento) => setDdd(evento.target.value)}
                />
                <button onClick={buscarDddApi}>Buscar DDD</button>
                
                <div>
                    <p><strong>Estado:</strong> {info2?.state}</p>
                    <ul>
                        {info2?.cities?.slice().sort().map((cidade)=>{
                            return <p>Cidade: {cidade}</p>
                        })}
                    </ul>
                   
                </div>
            </div>
         
        </div>
    )
}

export default BrasilApi;
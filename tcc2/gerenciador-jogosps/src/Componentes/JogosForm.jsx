import { useParams } from "react-router-dom";
import requester from "../axios";
import { useEffect, useState } from "react";


function JogosForm(props) {

     const {jogosId} = useParams();
     const [jogos, setJogos] = useState();
     const [consoles, setConsoles] = useState([])

     const addJogos = async ({name, consoleId}) => {
        
        const created = {
            name,
            consoleId
        }

        try {
            const response = await requester.post("/jogos", created);
            setJogos(response?.data);
            props.updateJogos?.(response.data)
        } catch (error) {
            console.log("Erro ao adicionar jogo.", error);
        };
     }

     const editJogos = async ({id, name, consoleId}) => {
        const updated = {
            name,
            consoleId,
        };

        try {
            const response = await requester.patch(`/consoles/${id}`, updated);
            setJogos(response?.data);
        } catch (error) {
            console.log('Erro ao editar o jogo:', error);
        };
    }

    const handleSubmit = jogosId? editJogos : addJogos;

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(jogos);
    }

     useEffect( () => {
        const getJogos = async () => {
            try {
                const response = await requester.get(`/jogos/${jogosId}`);
                setMember(response.data)
            } catch (error) {
                console.log("Erro ao buscar o jogo", error);
            };
        };
        if (jogosId) {
            getJogos();
        };
     }, [jogosId] );

     useEffect( () => {
        const getJogos = async () => {
            try {
                const response = await requester.get("/jogos");
                setJogos(response.data)
            } catch (error) {
                console.log("Erro ao buscar os jogos", error);
            };
        };
        getJogos();
     }, [] );

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Jogos</label>
                    <input 
                        type="text"
                        role="input"
                        defaultValue={jogos?.name}
                        onChange={ (e) => {
                            setJogos( (prev) => ({...prev, name: e.target.value}) )
                        } } 
                    />
                </div>

                <div>
                    <label>Consoles</label>
                    <select 
                        name="console"
                        role="select"
                        value={jogos?.consoleId ?? 0}
                        placeholder="console"
                        onChange={ (e) => {
                            setMember( (prev) => ({...prev, consoleId: e.target.value}) )
                        } }
                    >
                        <option value=""></option>

                        {console.map( (console) => {
                            return(
                                <option key={console.id} value={console.id}>
                                    {console.name}
                                </option>
                            )
                        } )}

                    </select>
                </div>
                <button type="submit">Confirmar</button>
            </form>
        </div>
    )
}

export default JogosForm;
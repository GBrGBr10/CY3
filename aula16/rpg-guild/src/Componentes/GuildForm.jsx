import { useParams } from "react-router-dom";
import requester from "../axios";
import { useState } from "react";

function GuildForm(props) {

    const {guildId} = useParams();
    const [guild, setGuild] = useState();

    const addGuild = async (guild) => {
        //Desestrutura o nome da guilda recebida como parâmetro
        const {name} = guild;
        //Cria um objeto só com a propiedade name
        const created = {name};

        try {
            const response = await requester.post('/guilds', created);
            props.updateGuilds?.(response.data);

        } catch(error) {
            console.log('Erro ao adicionar guilda', error);
        };
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addGuild(guild);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Guilda</label>
                <input 
                type="text" 
                name="name" 
                id=""
                deafaultValue={guild?.name}
                onChange={ (e) => {
                    setGuild( (prev) => ({...prev, name: e.target.value}))
                } }
                />
            </div>

            <button type="submit">Confirmar</button>
        </form>
        
    )
}

export default GuildForm
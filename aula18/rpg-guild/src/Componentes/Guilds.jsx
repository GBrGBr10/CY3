import { useNavigate } from "react-router-dom";
import GuildForm from "./GuildForm";
import { useState, useEffect } from "react";
import requester from "../axios";

function Guilds() {

    const navigate = useNavigate();
    const [guilds, setGuilds] = useState([]);
    const updateGuilds = (data) => setGuilds([...guilds, data]);        

    const deleteGuild = async ({id}) => {
        try {
            await requester.delete(`/guilds/${id}`);
            setGuilds(guilds.filter( (guild) => {
                guild.id !== id
            }))
        } catch (error) {
            console.log('Erro ao deletar guilda', error);
        };
    }

    return(
        <div>
            <h1>Guildas</h1>
            <ul>
                {guilds.map( (guild) => {
                    return (
                        <li key={guild.id}>
                            {guild.name}
                            <button onClick={ () => {navigate(guild.id)} }>Editar</button>
                            <button onClick={ () => deleteGuild(guild)}>Excluir</button>
                        </li>
                    )
                } )}
            </ul>

            <GuildForm updateGuilds={updateGuilds}/>

        </div>
    )
}

export default Guilds;
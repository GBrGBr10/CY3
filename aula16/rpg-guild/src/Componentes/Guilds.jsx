import { useNavigate } from "react-router-dom";
import GuildForm from "./GuildForm";
import { useState } from "react";

function Guilds() {

    const navigate = useNavigate();
    const [guilds, setGuilds] = useState([]);
    const updateGuilds = (data) => setGuilds ([...guilds, data]);

    return(
        <div>
            <h1>Guildas</h1>
            <ul>
                {guilds.map((guild) => {
                    return (
                        <li key={guild.id}>
                            {guild.name}
                            <button onClick={ () => {navigate(guild.id)} }>Editar</button>
                        </li>
                    )
                })}
            </ul>

            <GuildForm updateGuilds={updateGuilds}/>
        </div>
    )
}

export default Guilds;
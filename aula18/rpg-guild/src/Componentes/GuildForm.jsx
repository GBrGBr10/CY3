import { useParams } from "react-router-dom";
import requester from "../axios";
import { useEffect, useState } from "react";

function GuildForm(props) {

    const {guildId} = useParams();
    const [guild, setGuild] = useState();

    const addGuild = async (guild) => {
        const {name} = guild;
        const created = {name};

        try {
            const response = await requester.post('/guilds', created);
            props.updateGuilds?.(response.data);

        } catch (error) {
            console.log('Erro ao adicionar guilda', error);
        };
    }

    const editGuild = async (guild) => {
        const {id, name} = guild;
        const updated = {
            name,
        };

        try {
            const response = await requester.patch(`/guilds/${id}`, updated);
            setGuild(response.data);
        } catch (error) {
            console.log('Erro ao editar guilda', error);
        };
    }

    const handleSubmit = guildId? editGuild : addGuild;

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(guild);
    }

    useEffect(() => {
        const getGuild = async () => {
            try{
                const response = await requester.get(`/guilds/${guildId}`);
                setGuild(response.data)
            } catch (error) {
                console.log("Erro ao buscar a guilda", error)
            };
        };

        if (guildId) {
            getGuild();
        }
    }, [guildId] );

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Guilda</label>
                    <input 
                        type="text" 
                        name="name" 
                        defaultValue={guild?.name}
                        onChange={ (e) => {
                            setGuild( (prev) => ({...prev, name: e.target.value}) )
                        } }  
                    />
                </div>

                <button type="submit">Confirmar</button>

            </form>
        </div>
    )
}

export default GuildForm;
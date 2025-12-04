import { useParams } from "react-router-dom";
import requester from "../axios";
import { useEffect, useState } from "react";

function MemberForm(props) {

    const {memberId} = useParams();
    const [member, setMember] = useState();
    const [guilds, setGuilds] = useState([]);
    const addMember = async ({name, guildId}) => {
        const created = {
            name,
            guildId,
        };

        try {
            const response = await requester.post('/members', created);
            props.updateMembers?.(response.data);

        } catch(error) {
            console.log('Erro ao adicionar membros', error);
        };
    }
     
    const onSubmit = (e) => {
        e.preventDefault();
        addMember(member);
    }


    useEffect( () => {
        const getGuilds = async () => {
            try {
                const response = await requester.get('/guilds');
                setGuilds(response.data);
            } catch (error) {
                console.log("Erro ao buscar as guildas", error)
            };
        };
        getGuilds(); 
    }, [] )

    return(
        <div>
            <form> 
                <div>
                    <label>Membro</label>
                    <input 
                    role="input"
                    name="name"
                    type="text"
                    defaultValue={member?.name}
                    onChange={(e) => 
                        setMember((prev) => ({...prev, name:e.target.value}))
                    } />
                </div>

                <div>
                    <label>Guilda</label>
                    <select
                    role="select"
                    value={member?.guildId ?? 0}
                    name = "guild"
                    placeholder="Guilda"
                    onChange={(e) => 
                        setMember((prev) => ({...prev, guildId: e.target.value}))
                    }
                    >
                        <option value="" />
                        {guilds.map((guild) => (
                            <option key={guild.id} value={guild.id}>
                                {guild.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Confirmar</button>
            </form>
        </div>
        
    )
}

export default MemberForm
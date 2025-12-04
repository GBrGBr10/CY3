import { useParams } from "react-router-dom";
import requester from "../axios";
import { useEffect, useState } from "react";


function MemberForm(props) {

     const {memberId} = useParams();
     const [member, setMember] = useState();
     const [guilds, setGuilds] = useState([])

     const addMember = async ({name, guildId}) => {
        
        const created = {
            name,
            guildId
        }

        try {
            const response = await requester.post("/members", created);
            setMember(response?.data);
            props.UpdateMembers?.(response.data)
        } catch (error) {
            console.log("Erro ao adicionar membro", error);
        };
     }

     const editMember = async ({id, name, guildId}) => {
        const updated = {
            name,
            guildId,
        };

        try {
            const response = await requester.patch(`/members/${id}`, updated);
            setMember(response?.data);
        } catch (error) {
            console.log('Erro ao editar o membro:', error);
        };
    }

    const handleSubmit = memberId? editMember : addMember;

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(member);
    }

     useEffect( () => {
        const getMember = async () => {
            try {
                const response = await requester.get(`/members/${memberId}`);
                setMember(response.data)
            } catch (error) {
                console.log("Erro ao buscar os membros", error);
            };
        };
        if (memberId) {
            getMember();
        };
     }, [memberId] );

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Membro</label>
                    <input 
                        type="text"
                        role="input"
                        defaultValue={member?.name}
                        onChange={ (e) => {
                            setMember( (prev) => ({...prev, name: e.target.value}) )
                        } } 
                    />
                </div>

                <div>
                    <label>Guilda</label>
                    <select 
                        name="guild"
                        role="select"
                        value={member?.guildId ?? 0}
                        placeholder="Guilda"
                        onChange={ (e) => {
                            setMember( (prev) => ({...prev, guildId: e.target.value}) )
                        } }
                    >
                        <option value=""></option>

                        {guilds.map( (guild) => {
                            return(
                                <option key={guild.id} value={guild.id}>
                                    {guild.name}
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

export default MemberForm;
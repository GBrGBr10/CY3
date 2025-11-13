import { useParams } from "react-router-dom";
import requester from "../axios";
import { useEffect, useState } from "react";

function MemberForm(props) {

    const {memberId} = useParams();
    const [members, setMembers] = useState();
    const [guilds, setGuilds] = useState([]);

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
            <form>Membros {memberId} </form>
        </div>
    )
}

export default MemberForm
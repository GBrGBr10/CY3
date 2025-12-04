import { useNavigate } from "react-router-dom";
import MemberForm from "./MemberForm";
import { useState } from "react";
import requester from "../axios";

function Members() {
    const navigate = useNavigate();
    const [members, setMembers] = useState([]);
    const updateMembers = (data) => setMembers([...members, data]);

    const deleteMember = async ({id}) => {
        try {
            await requester.delete(`/members/${id}`);
            setMember(members.filter( (member) => {
                member.id !== id;
            }))
        } catch (error) {
            console.log('Erro ao deletar membro', error);
        };
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
            <h1>Membros</h1>
            <ul>
                {members.map( (member) => {
                    return(
                        <li>
                            {member.name}
                            <button onClick={ () => {navigate(member.id)} }>Editar</button>
                            <button onClick={ () => deleteMember(member)}>Excluir</button>
                        </li>
                    )
                } )}
            </ul>

            <MemberForm updateMembers={updateMembers} />



            
        </div>
    )
}

export default Members;
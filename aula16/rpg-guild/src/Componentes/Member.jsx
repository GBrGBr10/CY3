import { useNavigate } from "react-router-dom";
import MemberForm from "./MemberForm";
import { useState } from "react";

function Members() {
    const navigate = useNavigate();
    const [members, setMembers] = useState([]);
    const updateMembers = (data) => setMembers([...members, data]);

    return(
        <div>
            <h1>Membros</h1>
            <ul>
                {members.map( (member) => {
                    return(
                        <li>
                            {member.name}
                            <button onClick={ () => {navigate(member.id)} }>Editar</button>
                        </li>
                    )
                } )}
            </ul>

            <MemberForm updateMembers={updateMembers} />



            
        </div>
    )
}

export default Members;
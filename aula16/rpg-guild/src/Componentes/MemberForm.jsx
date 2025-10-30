import { useParams } from "react-router-dom"

function MemberForm(props) {

    const {memberId} = useParams()

    return(
        <div>
            <form>Membros {memberId} </form>
        </div>
    )
}

export default MemberForm
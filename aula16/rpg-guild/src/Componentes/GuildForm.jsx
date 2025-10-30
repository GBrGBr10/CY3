import { useParams } from "react-router-dom";

function GuildForm(props) {

    const {guildId} = useParams();

    return (
        <div>
            <form>Guildas {guildId} </form>
        </div>
    )
}

export default GuildForm
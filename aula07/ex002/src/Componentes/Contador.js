import { useState } from "react";

function Contador() {

    //Definir o contador como 0
    const[contando, setContando] = useState(0);

    return(
        <div>
            <h2>Contador</h2>  
            <div>Contador: {contando}</div>
            <button onClick={ ()=>{setContando(contando+1)} }>Evento</button>
        </div>
    )

}
export default Contador;
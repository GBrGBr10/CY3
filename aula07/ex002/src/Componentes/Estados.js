import { useState } from "react";

function Estados() {
    
    //Definir o estado inicial do contador como 0
    const[contador, setContador] = useState(0);

    return(
        <div>
            <h2>Estados: {contador}</h2>
        </div>
    )
} 

export default Estados;
import { useState } from 'react';
import './Pulando.css';

function Pulando( ) {
    //Hook State

    const[pulando, setPulando] = useState(false);

    const pular = () => {
        setPulando(true);
        setTimeout( ()=>{
            setPulando(false)
        }, 300 )
    };

    //O Jogador
    return(
        <div className='fundo'> 
            <h2>Jogador</h2>
            <div className="canvas"> 
                <div className={`jogador ${pulando? 'pulando' : 'parado'}`}>
                    🦘
                </div>
                <button onClick={pular}>Pular</button>
            </div>
        </div>
    )

}

export default Pulando;
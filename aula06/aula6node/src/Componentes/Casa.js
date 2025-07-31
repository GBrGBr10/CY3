import './Casa.css';
import Janela from "./Janela";

function Casa() {

    return(
        <div>
            <h1>Minha casa de react</h1>
            <h2>Sala de estar</h2>

            <div className="casa">
                <Janela largura='100px' altura='150px' cor='blue' />
                <Janela largura='100px' altura='150px' cor='blue' />
                <Janela largura='100px' altura='150px' cor='blue' />
            </div>

            <h2>Quarto</h2>
            <div className="casa">
                <Janela largura='80px' altura='100px' cor='blue' />
                <Janela largura='80px' altura='100px' cor='blue' />
                <Janela largura='80px' altura='100px' cor='blue' />
            </div>

            <h2>Cozinha</h2>
            <div className="casa">
                <Janela largura='300px' altura='100px' cor='lightblue' />
            </div>

        </div>
    )
}

export default Casa;
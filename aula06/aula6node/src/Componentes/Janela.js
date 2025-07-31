import './Janela.css'


function Janela({largura, altura, cor}) {

    return(
        <div 
        className="esquadria"
        style={{
            width: largura,
            height: altura,
            backgroundColor: cor
        }}
        >
            
        </div>
    )
}

export default Janela;
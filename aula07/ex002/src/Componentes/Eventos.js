function Eventos() {

    function Cliquei() {
        alert('Clicado!')
    }
    
    return(
        <div>
            <button onClick={'Cliquei'}>Evento: Clique aqui</button>
        </div>
    )
}

export default Eventos;
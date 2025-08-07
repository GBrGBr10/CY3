function EventosParametros() {
    
    function CliqueiParametros(parametro) {
        alert(`Clicado! ${parametro}}`)
    }

    return(
        <div>
            <h2>Eventos com parâmetros</h2>
            <button onClick={ ()=>{CliqueiParametros('232')}}>Evento Parametro</button>
        </div>
    )
}

export default EventosParametros;
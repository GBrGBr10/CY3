import "./Phrase.css";

function Phrase({texto, autor}) {
    return(
        <div className="phrase">
            <p className="phrase-texto">{texto}</p>
            <p className="phrase-autor"><em>- {autor}</em></p>
        </div>
    );
}

export default Phrase;



export default function ListItem(props) {

    return(
        <div>
            <h2>{props.nome}</h2>
            <li class="imagem-descricao">
              <img src={props.imagem} />
              <div class="descricao">
                <h4>{props.titulo}</h4>
                <p>{props.descricao}</p>
                <a href=".html">{props.link}</a>
              </div>
            </li>
            
        </div>
    )

}
function Section(props) {

    return(
        <section>
            <h2 class="texto">{props.produtos}</h2>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export default Section;
function AddQuest(props) {
    return(
        <div className="addquest-container">
            <h1>To Do List</h1>

            <input type="text" placeholder="quest" className="addquest-input" />
            <button 
                className="addquest-button"
                onClick={ () => { return props.saveAddQuest('Estudar Geografia')} }>
                +
            </button>
        </div>
    )
}

export default AddQuest;
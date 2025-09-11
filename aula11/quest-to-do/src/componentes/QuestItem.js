import { useState } from "react";

export default function QuestItem(props) {
    const [title, setTitle] = useState(props.quest.title);
    const [editMode, setEditMode] = useState(false);
    const concluded = props.quest.status === "concluído"

    //Navegação
    return(
        <div
            className="quest-item-container"
            //id para teste do input
            data-testid="questItem"
        >
            <div>
                <input 
                disabled={concluded} 
                type="checkbox" 
                checked={concluded}
                onChange={() => {
                    if (!concluded) {
                        props.saveConcludedQuest(props.quest);
                    }
                }}
                />

                {editMode && !concluded ? (
                    <input
                        placeholder="quest"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="quest-input"   
                    />
                ) : (

                    //parágrafo
                    <p 
                        className={`quest-title ${concluded ? "line through" : ""}`}
                        //id para o teste do parágrafo
                        data-testid="title"
                    >
                        {props.quest.title}
                    </p>
                )}
            </div>

            {!concluded && ( //r
                <div className="quest-actions">
                    <button
                            onClick={() => {
                            if (editMode) props.saveEditQuest(props.quest, title);
                            setEditMode(!editMode);
                        }}
                    >
                        Editar
                    </button>

                    <button
                        onClick={ () =>{
                            if (concluded) return;
                            else props.saveDeleteQuest(props.quest)
                        }}
                    >
                        Excluir
                    </button>
                </div>

            )}
        </div>
    )
}


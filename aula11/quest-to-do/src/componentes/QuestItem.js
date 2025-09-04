import { useState } from "react";

export default function QuestItem(props) {
    const [title, setTitle] = useState(props.quest.title);
    const [editMode, setEditMode] = useState(false);
    const concluded = props.quest.status === "concluído"

    return(
        <div>
            <div>
                <input 
                disabled={concluded} 
                type="checkbox" 
                checked={concluded}
                onChange={() => {
                    if (!concluded) {
                        props.SaveConcludedQuest(props.quest);
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
                    <p className={`quest-title ${concluded ? "line through" : ""}`}>
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
                </div>

            )}
        </div>
    )
}


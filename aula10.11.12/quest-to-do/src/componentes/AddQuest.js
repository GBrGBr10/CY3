import { useState } from "react";
import './AddQuest.css';

function AddQuest(props) {
    
    const[title, setTitle] = useState();

    return (
        <div className="addquest-container" >
            <input 
                placeholder="quest" 
                className="addquest-input" 
                onChange={(e) => setTitle(e.target.value)} />
            <button 
                className="addquest-button" 
                onClick={() => props.saveAddQuest(title)}>
                +
            </button>
        </div>
    );
}

export default AddQuest;
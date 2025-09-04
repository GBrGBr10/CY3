import { useState } from "react";
import AddQuest from "./componentes/AddQuest";
import QuestList from "./componentes/QuestList";
import "./App.css";

function App() {
    
    const localQuests = JSON.parse(window.localStorage.getItem("quest")) || [];
    const [quests, setQuests] = useState([localQuests]);

    //Concluded Quest
    function saveConcludedQuest(quest) {
        let auxQuests = quests;
        const editedQuest = {
            id: quest.id,
            title: quest.title,
            status: "concluído",
            created_at: quest.created_at,
        };

        const findQuestPosition = auxQuests.findIndex(
            (quest) => quest.id === editedQuest.id
        )

        auxQuests.splice(findQuestPosition, 1, editedQuest);
        localStorage.setItem("quests", JSON.stringify(auxQuests));
        getQuests();
    }

    //Edit Quest
    function saveEditQuest(quest, title) {
        let auxQuests = quests;
        const editedQuest = {
            id: quest.id,
            title: title || quest.title,
            status: quest.status,
            created_at: quest.created_at,
        };

        const findQuestPosition = auxQuests.findIndex(
            (quest) => quest.id === editedQuest.id
        );

        auxQuests.splice(findQuestPosition, 1, editedQuest);
        localStorage.setItem("quests", JSON.stringify(auxQuests));
        getQuests();
    }

    

    function saveAddQuest(title){
        let auxQuests = quests;
        let id = 0;
        if (auxQuests.length){
            id = auxQuests[auxQuests.length - 1].id;
        }
        id++;

        const createdQuest = {
            id: id,
            title: title,
            status: "aberto",
            created_at: new Date(Date.now()).toUTCString(),
        };
        auxQuests.push(createdQuest);
        localStorage.setItem("quests", JSON.stringify(auxQuests));
        getQuests();
    }

    function getQuests() {
        setQuests(JSON.parse(localStorage.getItem("quests")));
    }

    return (
        <div className="container">
            <div className="card">
                <h1 className="titulo">Quests To Do</h1>
                <AddQuest saveAddQuest={saveAddQuest} />
                <QuestList 
                quests={quests}
                saveEditQuest={saveEditQuest}
                saveConcludedQuest={saveConcludedQuest}
                />
            </div>
        </div>
    );
}

export default App;

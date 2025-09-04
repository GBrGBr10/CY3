import QuestItem from './QuestItem';
import './QuestList.css';

export default function QuestList(props) {
    return (
        <div className="questlist-container">
            {props.quests.map((quest) => {
                return (
                    <QuestItem 
                        key={quest.id}
                        quest={quest}
                        saveEditQuest={props.saveEditQuest}
                        saveConcludedQuest={props.saveConcludedQuest}
                    />
                )
            })}
        </div>
    )
}


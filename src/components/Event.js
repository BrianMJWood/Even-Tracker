import { FaTimes } from 'react-icons/fa'

const Event = ({ event, onDelete, onToggleReminder }) => {
    return (
        <div className={`event ${event.reminder ? 'reminder' : ''}`} onDoubleClick={ () => onToggleReminder(event.id)}>
            <h3>{event.text}<FaTimes onClick={ () => onDelete(event.id)} style={{color: 'red', cursor: 'pointer'}}/></h3>
            <p>{event.day}</p>
        </div>
    )
}

export default Event
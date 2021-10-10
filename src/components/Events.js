import Event from "./Event"

const Events = ({ events, onDelete, onToggleReminder }) => {

    return (
        <>
            {events.map((event) => (
                <Event key={event.id} event={event} onDelete={onDelete} onToggleReminder={onToggleReminder} />
                )
            )}
        </>
    )
}

export default Events
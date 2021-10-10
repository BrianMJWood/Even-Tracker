import Header from "./components/Header";
import Events from "./components/Events";
import AddEvent from "./components/AddEvent";
import { useState } from "react"

function App() {

  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState ([
    {
        id: 1,
        text: "Bouldering at Alien Bloc",
        day: "Nov 5th at 2:30pm",
        reminder: true
    },
    {
        id: 2,
        text: "Board Games at The Chanter",
        day: "Nov 6th at 6:30pm",
        reminder: false
    },
    {
        id: 3,
        text: "Drinks at Bennet's",
        day: "Nov 25th at 8:30pm",
        reminder: true
    }
  ]);

  const addEvent = (event) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newEvent = { id, ...event };
    setEvents([...events, newEvent]);
  }

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  }

  const toggleReminder = (id) => {
    setEvents(events.map((event) => event.id === id ? {...event, reminder: !event.reminder} : event));
  }

  return (
    <div className="container">
      <Header toggleForm={() => setShowForm(!showForm)} showForm={showForm} />
      {showForm && <AddEvent onAdd={addEvent} />}
      {events.length > 0 ? <Events events={events} onDelete={deleteEvent} onToggleReminder={toggleReminder}/>
      : 'No Events Found'}
    </div>
  );
}

export default App;

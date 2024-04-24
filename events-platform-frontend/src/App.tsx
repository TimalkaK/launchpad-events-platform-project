import "./App.css";
import Navbar from "./components/navbar";
import { AddEvents } from "./components/addEvents/addEvents";
import Login from "./components/login";
import Footer from "./components/footer";
import { useState } from "react";
import Event from "./data/event";
import EventCard from "./components/event_card";
import { v4 as uuidv4 } from "uuid";

function App(): JSX.Element {
  // JavaScript/TypeScript code can be inserted here!

  const eventData: Array<Event> = [
    {
      name: "Women's Circle",
      description:
        "An evening of Insights, Rituals, Sharing and Crystal Bowl Sound Healing.",
      date: "25th April 2024",
      time: "5-7pm",
      price: 0,
    },
    {
      name: "Intention Setting with Crystals",
      description:
        "An ideal workshop for those who want to learn how to work with crystal magic",
      date: "4th May 2024",
      time: "10-11am",
      price: 0,
    },
    {
      name: "Sound Scapes",
      description:
        "An immersive sonic journey guided by the high vibrational frequencies of the gong, alchemic crystal bowls, shamanic drums, chimes, bells, and other ancient therapeutic instruments.",
      date: "10th May 2024",
      time: "7-8pm",
      price: 0,
    },
  ];
  eventData.forEach((event) => (event.id = uuidv4())); // each event should now have a unique ID

  const [events, setEvents] = useState<Array<Event>>(eventData);

  const createEvent = (anEvent: Event) => {
    console.log("Yay I am on the parent component", anEvent);
    setEvents([
      ...events,
      {
        id: uuidv4(),
        name: anEvent.name,
        description: anEvent.description,
        date: anEvent.date,
        time: anEvent.time,
        price: anEvent.price,
      },
    ]);
    console.log(events);
  };

  return (
    <>
      <Navbar />
      <AddEvents onAdd={createEvent} />
      <main>
        <div className="cards__wrapper">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              name={event.name}
              description={event.description}
              date={event.date}
              time={event.time}
              price={event.price}
              eventIndex={index}
            />
          ))}
          ;
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;

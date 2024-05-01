import { useState } from "react";
import Event from "../data/event";
import EventCard from "../components/event_card";
import { v4 as uuidv4 } from "uuid";

export const HomePage = () => {
  return (
    <header className="header__container">
      <h1 className="header__title header__welcome">Welcome to React!</h1>
      <h2 className="header__title">Home Page</h2>
    </header>
  );

  /*

  const eventData: Array<Event> = [
    {
      name: "Women's Circle",
      description:
        "An evening of Insights, Rituals, Sharing and Crystal Bowl Sound Healing.",
      startDate: new Date("04/25/24"),
      endDate: new Date("04/25/24"),
      time: "17:00-19:00",
      price: 0,
    },
    {
      name: "Intention Setting with Crystals",
      description:
        "An ideal workshop for those who want to learn how to work with crystal magic",
      startDate: new Date("05/04/24"),
      endDate: new Date("05/04/24"),
      time: "10:00-11:00",
      price: 0,
    },
    {
      name: "Sound Scapes",
      description:
        "An immersive sonic journey guided by the high vibrational frequencies of the gong, alchemic crystal bowls, shamanic drums, chimes, bells, and other ancient therapeutic instruments.",
      startDate: new Date("05/10/24"),
      endDate: new Date("05/10/24"),
      time: "19:00-20:00",
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
        startDate: anEvent.startDate,
        endDate: anEvent.endDate,
        time: anEvent.time,
        price: anEvent.price,
      },
    ]);
    console.log(events);
  };

  return (
    <div className="cards__wrapper">
      {events.map((event, index) => (
        <EventCard
          key={event.id}
          name={event.name}
          description={event.description}
          startDate={event.startDate}
          endDate={event.endDate}
          time={event.time}
          price={event.price}
          eventIndex={index}
        />
      ))}
      ;
    </div>
  );*/
};

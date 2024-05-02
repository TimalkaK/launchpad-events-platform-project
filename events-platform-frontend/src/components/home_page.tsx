import Event from "../data/event";
import EventCard from "../components/event_card";

interface HomePageProps {
  events: Array<Event>;
}

export const HomePage: React.FC<HomePageProps> = (props) => {
  /* return (
    <header className="header__container">
      <h1 className="header__title header__welcome">Welcome to React!</h1>
      <h2 className="header__title">Home Page</h2>
    </header>
  );*/

  return (
    <div className="cards__wrapper">
      {props.events.map((event, index) => (
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
    </div>
  );
};

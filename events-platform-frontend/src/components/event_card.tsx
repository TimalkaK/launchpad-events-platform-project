import EventImage from "./event_image";
import yogaspace from "../assets/images/yogaspace.jpg";
import crystals from "../assets/images/crystals.jpg";
import soundbowls from "../assets/images/soundbowls.jpg";
import { gapi } from "gapi-script";
import { calendar_v3 } from "googleapis";

const images = [
  {
    image: yogaspace,
    altText: "Calming space with candles",
  },
  {
    image: crystals,
    altText: "A plate of different crystals",
  },
  {
    image: soundbowls,
    altText: "Big metal sound bowls",
  },
];

interface EventCardProps {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  time: string;
  price: number;
  eventIndex: number;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  description,
  startDate,
  endDate,
  time,
  price,
  eventIndex,
}) => {
  const CLIENT_ID = `${process.env.REACT_APP_EVENT_PLATFORM_CLIENT_ID}`;
  const API_KEY = `${process.env.REACT_APP_EVENT_PLATFORM_API_KEY}`;
  const DISCOVERY_DOCS = [
    `${process.env.REACT_APP_EVENT_PLATFORM_DISCOVERY_DOCS}`,
  ];
  const SCOPES = `${process.env.REACT_APP_EVENT_PLATFORM_SCOPES}`;

  interface GoogleCalendarEvent {
    htmlLink: string;
  }

  const retrieveTime = (time: string, startDate: Date, endDate: Date) => {
    const times = time.replaceAll("-", ":");
    const timeSplit = times.split(":");

    const startHours = Number(timeSplit[0]);
    const startMinutes = Number(timeSplit[1]);

    const endHours = Number(timeSplit[2]);
    const endMinutes = Number(timeSplit[3]);

    startDate.setHours(startHours);
    startDate.setMinutes(startMinutes);

    endDate.setHours(endHours);
    endDate.setMinutes(endMinutes);

    console.log("Start Date:", startDate.toISOString());
    console.log("End Date:", endDate.toISOString());
  };

  const handleReserve = () => {
    console.log("Event has been reserved!");

    retrieveTime(time, startDate, endDate);

    gapi.load("client:auth2", () => {
      console.log("Client loaded");

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });

      gapi.client.load("calendar", "v3", () => console.log("Calendar loaded!"));

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const reserveEvent: calendar_v3.Schema$Event = {
            summary: name,
            description: description,
            start: {
              //dateTime: "2024-06-28T09:00:00-07:00",
              dateTime: startDate.toISOString(),
              timeZone: "Europe/London",
            },
            end: {
              //dateTime: "2024-06-28T17:00:00-07:00",
              dateTime: endDate.toISOString(),
              timeZone: "Europe/London",
            },
            reminders: {
              useDefault: false,
              overrides: [
                { method: "email", minutes: 24 * 60 },
                { method: "popup", minutes: 10 },
              ],
            },
          };

          const request = gapi.client.calendar.events.insert({
            calendarId: "primary",
            resource: reserveEvent,
          });

          request.execute(function (reserveEvent: GoogleCalendarEvent) {
            window.open(reserveEvent.htmlLink);
          });
        });
    });
  };

  return (
    <div className="card">
      {eventIndex < images.length && (
        <EventImage
          image={images[eventIndex].image}
          altText={images[eventIndex].altText}
        />
      )}

      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">
        {startDate.toLocaleDateString("en-GB", { dateStyle: "medium" })} -
        {endDate.toLocaleDateString("en-GB", { dateStyle: "medium" })}
      </p>
      <p className="card__text">{description}</p>
      <p className="card__text">Time: {time}</p>
      <p className="card__text">£{price}</p>
      <button className="reserve_btn" onClick={handleReserve}>
        Reserve/Add to Calendar
      </button>
    </div>
  );
};

export default EventCard;

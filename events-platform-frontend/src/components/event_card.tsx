import EventImage from "./event_image";
import yogaspace from "../assets/images/yogaspace.jpg";
import crystals from "../assets/images/crystals.jpg";
import soundbowls from "../assets/images/soundbowls.jpg";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { gapi } from "gapi-script";
import { calendar_v3 } from "googleapis";

=======
>>>>>>> parent of c62edad (Feat: Added google calendar insertion functionality and change date to type Date)
>>>>>>> 4149dc3 (feat: Implemented reserve button with gcal insertion and add Events functionality and changed dates to date type)
const images = [
  {
    //image: cat1,
    //altText: "Describe this cat!",
    image: yogaspace,
    altText: "Calming space with candles",
    //licenceType: "CC BY-SA 2.0",
    //licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    //attributionName: "amblin",
    //attributionUrl: "https://www.flickr.com/people/amblin/",
  },
  {
    image: crystals,
    altText: "A plate of different crystals",
    //licenceType: "CC BY-SA 2.0",
    //licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    //attributionName: "ivva",
    //attributionUrl: "https://www.flickr.com/people/ivva/",
  },
  {
    image: soundbowls,
    altText: "Big metal sound bowls",
    //licenceType: "CC BY-ND 2.0",
    //licenceUrl: "https://creativecommons.org/licenses/by-nd/2.0/",
    //attributionName: "Rachele Pettarelli Ph",
    //attributionUrl: "https://www.flickr.com/people/rachephotos/",
  },
];

interface EventCardProps {
  name: string;
  description: string;
<<<<<<< HEAD
  date: string;
=======
<<<<<<< HEAD
  startDate: Date;
  endDate: Date;
=======
  date: string;
>>>>>>> parent of c62edad (Feat: Added google calendar insertion functionality and change date to type Date)
>>>>>>> 4149dc3 (feat: Implemented reserve button with gcal insertion and add Events functionality and changed dates to date type)
  time: string;
  price: number;
  eventIndex: number;
}

const EventCard: React.FC<EventCardProps> = ({
  name,
  description,
  date,
  time,
  price,
  eventIndex,
}) => {
<<<<<<< HEAD
  // console.log('CatCard receiving props from App?! Come in App?! 😸 Props received are: ', props);
=======
<<<<<<< HEAD
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
=======
  // console.log('CatCard receiving props from App?! Come in App?! 😸 Props received are: ', props);
>>>>>>> parent of c62edad (Feat: Added google calendar insertion functionality and change date to type Date)
>>>>>>> 4149dc3 (feat: Implemented reserve button with gcal insertion and add Events functionality and changed dates to date type)

  return (
    <div className="card">
      {eventIndex < images.length && (
        <EventImage
          image={images[eventIndex].image}
          altText={images[eventIndex].altText}
          /*licenceType={images[eventIndex].licenceType}
          licenceUrl={images[eventIndex].licenceUrl}
          attributionName={images[eventIndex].attributionName}
      attributionUrl={images[eventIndex].attributionUrl}*/
        />
      )}
<<<<<<< HEAD
      <h3 className="card__text card__header">
        {name} - {date}
      </h3>
=======
<<<<<<< HEAD
      <h3 className="card__text card__header">{name}</h3>
      <p className="card__text">
        {startDate.toLocaleDateString("en-GB", { dateStyle: "medium" })} -{" "}
        {endDate.toLocaleDateString("en-GB", { dateStyle: "medium" })}
      </p>
=======
      <h3 className="card__text card__header">
        {name} - {date}
      </h3>
>>>>>>> parent of c62edad (Feat: Added google calendar insertion functionality and change date to type Date)
>>>>>>> 4149dc3 (feat: Implemented reserve button with gcal insertion and add Events functionality and changed dates to date type)
      <p className="card__text">{description}</p>
      <p className="card__text">Time: {time}</p>
      <p className="card__text">£{price}</p>
      <button>Reserve</button>
    </div>
  );
};

export default EventCard;

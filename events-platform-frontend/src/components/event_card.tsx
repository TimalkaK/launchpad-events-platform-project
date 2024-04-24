import EventImage from "./event_image";
import yogaspace from "../assets/images/yogaspace.jpg";
import crystals from "../assets/images/crystals.jpg";
import soundbowls from "../assets/images/soundbowls.jpg";
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
  date: string;
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
  // console.log('CatCard receiving props from App?! Come in App?! 😸 Props received are: ', props);

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
      <h3 className="card__text card__header">
        {name} - {date}
      </h3>
      <p className="card__text">{description}</p>
      <p className="card__text">Time: {time}</p>
      <p className="card__text">£{price}</p>
      <button>Reserve</button>
    </div>
  );
};

export default EventCard;

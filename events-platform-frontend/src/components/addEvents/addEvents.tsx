import { useState, useEffect } from "react";
import { Validate } from "./validate";
import Event from "../../data/event";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import { enableAddEventsContext, EnableAddEventsContextType } from "../../App";

interface FuncProps {
  onAdd: (anEvent: Event) => void;
}
export const AddEvents = ({ onAdd = () => {} }: FuncProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [price, setPrice] = useState(0);
  const [disableButton, setDisableButton] = useState(true);
  const [showValidation, setValidation] = useState(
    "To submit, make sure to complete all fields."
  );

  const addEventsContext = useContext(enableAddEventsContext);
  const [enableAddEvents, setEnableAddEvents] =
    useState<EnableAddEventsContextType>(addEventsContext);

  useEffect(() => {
    if (
      name.length >= 2 &&
      description.length >= 100 &&
      description.length <= 1200 &&
      time.length >= 2 &&
      time.length <= 13
    ) {
      setDisableButton(false);
      setValidation("");
    } else {
      setDisableButton(true);

      if (name.length === 0 && description.length === 0 && time.length === 0) {
        setValidation(
          "To submit, make sure to complete all fields. Please write the time in the following format e.g 17:00 - 19:00."
        );
      } else if (name.length < 2) {
        setValidation("Please write an event name of 2 or more characters.");
      } else if (description.length < 100 || description.length > 1200) {
        setValidation(
          "Please write a description between 100 and 1200 characters."
        );
      } else if (time.length < 1 || time.length > 13) {
        setValidation(
          "Please make sure time is in a 24hr format with a dash in the middle e.g 18:00 - 20:00."
        );
      }
    }
  }, [name, description, time]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const addEvent: Event = {
      name,
      description,
      startDate,
      endDate,
      time,
      price,
    };

    //console.log(createEvent);
    onAdd(addEvent);

    setName("");
    setDescription("");
    setStartDate(new Date());
    setEndDate(new Date());
    setTime("");
    setPrice(0);
  };

  return (
    <>
      {enableAddEvents ? (
        <section className="form_container">
          <h2 className="header__title">Add An Event</h2>
          <form className="addEvents_form" name="form" onSubmit={handleSubmit}>
            <label htmlFor="eventName">Event Name</label>
            <input
              type="text"
              name="eventName"
              id="eventName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              rows={4}
              cols={40}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <br />
            <label htmlFor="startDate">Start Date</label>
            <DatePicker
              name="date"
              selected={startDate}
              onChange={(thedate: Date) => setStartDate(thedate)}
            />
            <br />
            <label htmlFor="endDate">End Date</label>
            <DatePicker
              name="date"
              selected={endDate}
              onChange={(thedate: Date) => setEndDate(thedate)}
            />
            <br />
            <label htmlFor="time">Time</label>
            <input
              type="text"
              placeholder="e.g 19:00 - 20:00"
              name="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            ></input>
            <br />
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.valueAsNumber)}
            ></input>
            <br />
            <Validate message={showValidation} />
            <button className="submit_btn" disabled={disableButton}>
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section>
          <h2 className="header__title">
            You must be a staff member to add events.
          </h2>
        </section>
      )}
    </>
  );
};

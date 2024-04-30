import { useState, useEffect } from "react";
import { Validate } from "./validate";
import { SubmitResponse } from "./submitResponse";
import Event from "../../data/event";
import DatePicker from "react-datepicker";

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
  const [submitResponse, setSubmitResponse] = useState("");

  useEffect(() => {
    if (
      name.length >= 2 &&
      description.length >= 100 &&
      description.length <= 1200
    ) {
      setDisableButton(false);
      setValidation("");
    } else {
      setDisableButton(true);

      if (name.length === 0 && description.length === 0) {
        setValidation(
          "To submit, make sure to write an event name and include a small description."
        );
      } else if (name.length < 2) {
        setValidation("Please write an event name of 2 or more characters.");
      } else if (description.length < 100 || description.length > 1200) {
        setValidation(
          "Please write a description between 100 and 1200 characters."
        );
      }
    }
  }, [name, description]);

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
    <section className="addEvents">
      <p>Create Event</p>

      <form name="form" onSubmit={handleSubmit}>
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
        <DatePicker
          name="date"
          selected={startDate}
          onChange={(thedate) => setStartDate(startDate)}
        />
        <DatePicker
          name="date"
          selected={endDate}
          onChange={(thedate) => setStartDate(endDate)}
        />
        {/*<label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
  ></input>*/}
        <br />
        <label htmlFor="time">Time</label>
        <input
          type="text"
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
        <button disabled={disableButton}>Submit</button>
      </form>
      <SubmitResponse message={submitResponse} />
    </section>
  );
};

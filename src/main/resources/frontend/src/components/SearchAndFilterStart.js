import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function LandingPage() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState("");

  const submitSearch = e => {
    e.preventDefault();
    console.log("Destination chosen  :  " + destination);
    console.log("Check-in date chosen  :  " + checkIn);
    console.log("Check-out date chosen  :  " + checkOut);
    console.log("Number of guests chosen  :  " + numberOfGuests);
  };

  return (
    <div className="col-12 col-lg-3 col-md-6">
      <Form
        className="darkbrown golden searchAndFilterForm"
        onSubmit={submitSearch}
      >
        <h2 className="searchAndFilterFormTitle" align="center">
          Book your unique stay around the world!
        </h2>
        <FormGroup align="left">
          <Label for="destination-input" className="mb-1">
            Destination{" "}
          </Label>
          <Input
            type="text"
            id="destination-input"
            value={destination}
            onChange={e => setDestination(e.target.value)}
          ></Input>
        </FormGroup>

        <FormGroup>
          <div className="row justify-content-around">
            <Label for="destination-input" className="mb-1">
              Check-in
            </Label>
            <Label for="destination-input" className="mb-1">
              Check-out
            </Label>
          </div>
          <div className="row dateInputRow">
            <Input
              className="col-5 dateInput"
              id="destination-input"
              type="date"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
            />
            <Input
              className="col-5"
              id="destination-input"
              type="date"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="guestSelection" align="left" className="mb-1">
            Guests
          </Label>
          <Input
            type="select"
            name="guestSelection"
            id="guestSelection"
            onChange={e => setNumberOfGuests(e.target.value)}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </Input>
        </FormGroup>
        <Button className="searchButton" style={{backgroundColor: '#B9986D'}}>SEARCH</Button>
      </Form>
    </div>
  );
}
export default LandingPage;
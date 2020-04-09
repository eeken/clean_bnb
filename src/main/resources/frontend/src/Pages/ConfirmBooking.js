//REACT
import React, { useState, useContext, useEffect } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";

//CONTEXTPROVIDERS
import { BookingContext } from '../contexts/BookingContextProvider'
import { ResidenceContext } from '../contexts/ResidenceContextProvider'


export default function ConfirmBooking() {

  let { id } = useParams();
  const {
    residence,
    fetchResidenceDetails,
  } = useContext(ResidenceContext);

  const { appendBooking } = useContext(BookingContext)
  const [ email, setEmail ] = useState();
  const [ isBookingPossible, setIsBookingPossible ] = useState(false)
  const { checkin, checkout, numberofguests, amountofnights, totalprice } = useParams();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    fetchResidenceDetails(id);
  }, []);

  if (residence === null) {
    return null;
  }

  let button = <Button className="bookingButton col-10 offset-1 mb-5 p-2" disabled>BOOK THIS RESIDENCE</Button>

  if ((isBookingPossible) && (!email == '')) {
    button = <Button className="bookingButton col-10 offset-1 mb-5 p-2">BOOK THIS RESIDENCE</Button>;
  }

  function confirmPolicies() {
    var checkBox = document.getElementById("policies");
    if (checkBox.checked === true) {
      setIsBookingPossible(true)
    } else {
      setIsBookingPossible(false)
    }
  }

  const createBooking = async (e) => {
    e.preventDefault();

    const booking = {
      startDate: 1599490800, //update data in here with actual data
      endDate: 1599735600, //update data in here with actual data
      totalPrice: 2311 //update data in here with actual data
    }

    let res = await fetch('/rest/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    })

    res = await res.json()

    appendBooking(res)
  }


  console.log(checkin)
  console.log(checkout)

  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let checkinDate = new Date(checkin * 1000);
  console.log(checkinDate)
  checkinDate = checkinDate.getDay() + " " + months[checkinDate.getMonth()] + " " + checkinDate.getFullYear()

  let checkoutDate = new Date(checkout * 1000);
  checkoutDate = checkoutDate.getDay() + " " + months[checkoutDate.getMonth()] + " " + checkoutDate.getFullYear()

  return (
    <div>
      <div className="white">
        <div className="justify-content-center">
          <h3 className="confirmBookingTitle golden p-3" align="center">Confirm Booking</h3>
          <img
            width="100%"
            height="250vh"
            border="black"
            src={residence.images[0].imagelink}
            className="userImage mr-3 mb-4"
          />

          <div className="confirmBookingText darkbrowntext text-left mb-4">
            <b>Residence: </b>{residence.title}<br></br>
            <b>Location: </b> {residence.address.city}, {residence.address.country}<br></br>
            <b>Amount of Guests: </b> {numberofguests} <br></br>
            <b>Chosen dates: </b> {checkinDate} - {checkoutDate}<br></br>
            <br></br>
            <b>Total Price:</b> {residence.pricepernight} x {amountofnights} nights =
            <b className="priceText golden">${totalprice}</b>
          </div>
          <hr></hr>
          <Form onSubmit={createBooking}>
            <FormGroup className="col-10 offset-1 mb-5 mt-5">
              <div className="enterEmailText darkbrowntext" align="center">
                <b>Enter your e-mail address to complete the booking:</b>
              </div>
              <Input
                type="text"
                id="email-input"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your e-mail address here"
              ></Input>
            </FormGroup>
            <hr></hr>

            <div className="golden darkbrowntext m-5" align="center">
              <input
                type="checkbox"
                className="mr-2"
                id="policies"
                onClick={confirmPolicies}
              />
              <b>Agree to the
              <a
                  href="https://www.airbnb.com/help/topic/250/terms-policies"
                  target="_blank"
                  className="ml-1 policiesLink"
                >
                  terms and policies
            </a></b>
            </div>
            {button}
          </Form>

        </div>
      </div>
    </div>
  )
}
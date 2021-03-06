import React, { useReducer, useEffect } from "react";
import { DateRangeInput } from "@datepicker-react/styled";
import { ThemeProvider } from "styled-components";

function Calender({ setAmountOfNights, setCheckIn, setCheckOut }) {
  const initialState = {
    startDate: null,
    endDate: null,
    focusedInput: null,
    vertical: true,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "focusChange":
        return { ...state, focusedInput: action.payload };
      case "dateChange":
        return action.payload;
      case "verticalChange":
        return action.vertical;
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  Date.prototype.getUnixTime = function () {
    return this.getTime() / 1000;
  };

  let startDateUnix = new Date(state.startDate).getUnixTime();
  let endDateUnix = new Date(state.endDate).getUnixTime();
  let duration = (endDateUnix - startDateUnix) / 86400;

  useEffect(() => {
    handleChange(startDateUnix, endDateUnix, duration);
  });

  function handleChange(start, end, nights) {
    if (!(start === null) && !(end === null) && !(nights === null)) {
      setAmountOfNights(nights);
      setCheckIn(start);
      setCheckOut(end);
    }
  }

  return (
    <ThemeProvider
      theme={{
        breakpoints: ["32em", "48em", "64em"],
        reactDatepicker: {
          daySize: [36, 40],
          fontFamily: "Segoe UI",
          colors: {
            accessibility: "#3F392F",
            selectedDay: "#B9986D",
            selectedDayHover: "#3F392F",
            primaryColor: "#3F392F",
          },
        },
      }}
    >
      <DateRangeInput
        onDatesChange={(data) =>
          dispatch({ type: "dateChange", payload: data })
        }
        onFocusChange={(focusedInput) =>
          dispatch({ type: "focusChange", payload: focusedInput })
        }
        startDate={state.startDate}
        endDate={state.endDate}
        focusedInput={state.focusedInput}
        vertical={(vertical) =>
          dispatch({ type: "verticalChange", payload: vertical })
        }
      />
    </ThemeProvider>
  );
}
export default Calender;

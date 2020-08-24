import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";
/* global gapi */

import { color_theme, text_theme } from "../theme";

const CalendarArea = styled.div`
  border: rgb(${color_theme.primary}) 5px double;
  background-color: rgba(${color_theme.tertiary}, 0.3);
  height: 30vh;
  overflow-x: hidden;
  overflow-y: scroll;
  min-width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const CalendarBar = styled.div`
  position: relative;
  padding: 10px 50px;
  display: flex;
  flex-direction: row;
  text-decoration: underline;
  transition: 0.25s;
`;

const CalendarItem = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: rgb(${color_theme.primary}) 2px solid;
  transition: 0.25s;
  background-color: white;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
    & > * {
      color: white;
    }
  }
`;

const ItemName = styled.span`
  font-family: ${text_theme.default.font};
  margin-right: 20px;
  transition: 0.25s;
  color: black;
  flex: 2;
  font-size: 22px;

  @media screen and (max-width: 600px) {
    font-size: 17px;
  }
`;

const ItemDescription = styled.span`
  flex: 3;
  font-family: ${text_theme.default.font};
  text-align: right;
  transition: 0.25s;
  color: rgb(${color_theme.tertiary});

  font-size: 22px;

  @media screen and (max-width: 600px) {
    font-size: 17px;
  }
`;

const NoItems = styled.span`
  font-size: 35px;
  font-family: ${text_theme.default.font};
  color: gray;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

const Calendar = ({ apiKey, calendarId }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const start = () => {
      gapi.client
        .init({
          apiKey: apiKey,
        })
        .then(() =>
          gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?maxResults=12&orderBy=updated&timeMin=${moment().toISOString()}&timeMax=${moment()
              .add(30, "days")
              .toISOString()}`,
          })
        )
        .then(
          (response) => {
            let eventsResponse = response.result.items;
            setEvents(eventsResponse);
          },
          (reason) => {
            console.log(reason);
          }
        );
    };

    gapi.load("client", start);
  }, []);

  events.sort((a, b) => {
    let compA =
      a.start.dateTime === undefined ? a.start.date : a.start.dateTime;
    let compB =
      b.start.dateTime === undefined ? b.start.date : b.start.dateTime;

    if (moment(compA).isBefore(moment(compB))) {
      return -1;
    } else return 1;
  });

  const makeCalendarDescription = (event) => {
    let element;

    if (event.start.dateTime === undefined) {
      element = (
        <ItemDescription onClick={() => window.open(event.htmlLink, "_blank")}>
          {moment(event.start.date).format("MMM Do")} to{" "}
          {moment(event.end.date).format("MMM Do")}
        </ItemDescription>
      );
    } else {
      moment(event.start.dateTime).format("MMM Do") ===
      moment(event.end.dateTime).format("MMM Do")
        ? (element = (
            <ItemDescription
              onClick={() => window.open(event.htmlLink, "_blank")}
            >
              {moment(event.start.dateTime).format("MMM Do, h:mm a")} to{" "}
              {moment(event.end.dateTime).format("h:mm a")}
            </ItemDescription>
          ))
        : (element = (
            <ItemDescription
              onClick={() => window.open(event.htmlLink, "_blank")}
            >
              {moment(event.start.dateTime).format("MMM Do, h:mm a")} to{" "}
              {moment(event.end.dateTime).format("MMM Do, h:mm a")}{" "}
            </ItemDescription>
          ));
    }
    return element;
  };

  return (
    <div>
      <CalendarBar>
        <ItemName>Event</ItemName>
        <ItemDescription>Time</ItemDescription>
      </CalendarBar>
      <CalendarArea empty={events.length === 0}>
        {events.length === 0 ? (
          <NoItems>No upcoming events</NoItems>
        ) : (
          events.map((event) => (
            <CalendarItem>
              <ItemName>{event.summary}</ItemName>
              {makeCalendarDescription(event)}
            </CalendarItem>
          ))
        )}
      </CalendarArea>
    </div>
  );
};

export default Calendar;

import React from "react";
import "./Card.css";
import Location from "../assets/location.png";

export default function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img className="image" src={props.item.imageUrl} alt="" />
        </div>
        <div className="details-container">
          <div className="location-url">
            <img className="location-logo" src={Location} alt="" />
            <span>{props.item.location}</span>
            <a href="#">{props.item.googleMapsUrl}</a>
          </div>
          <h1 className="title">{props.item.title}</h1>
          <div className="date-container">
            <span className="date-Start">{props.item.startDate}</span>
            <span>-</span>
            <span className="date-End">{props.item.endDate}</span>
          </div>
          <div className="description-container">
            <span>{props.item.description}</span>
          </div>
        </div>
      </div>
    </>
  );
}

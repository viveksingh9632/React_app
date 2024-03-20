import React from "react";
// import iPhone from "../image/iPhone.jpeg";
// import {NavLink} from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="Card-img-top" alt="" />
          <div className="card-body">
            <h6 className=" fs-4 fw-bold card-title">{props.title}</h6>
            <p className="card-text">
              some quick example text to build on the card title and make up the
              bulk of the card's
            </p>
            <a href="" className="btn btn-primary">
              Go Somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

import React, { useState, useEffect } from "react";
import "../styles/BirdTop.css";
import noImg from "../images/no-photo.png";
import noMap from "../images/no-map.png";

const BirdTop = (props) => {
  if (props.resultData) {
    const profileElems = props.resultData.map((bird) => {
      if (bird.profilePic !== null) {
        return (
          <img
            alt={bird.commonNameEnglish}
            className="birdProfile"
            src={bird.profilePic}
          ></img>
        );
      } else {
        return <img alt="no photo available" src={noImg}></img>;
      }
    });

    const detailElems = props.resultData.map((bird) => {
      return (
        <h2 className="names">
          {bird.commonNameEnglish}
          <p>{bird.commonNameRomaji}</p>
          <p>{bird.commonNameJapanese}</p>
          <p className="speciesInfo">
            {bird.order + " " + bird.family + " " + bird.species}
          </p>
          <button className="details">Details</button>
        </h2>
      );
    });

    const rangeMapElems = props.resultData.map((bird) => {
      if (bird.rangeMap !== null) {
        return (
          <img
            alt={bird.commonNameEnglish + "range map"}
            className="rangeMap"
            src={bird.rangeMap}
          ></img>
        );
      } else {
        return <img alt="no map available" className="nomap" src={noMap}></img>;
      }
    });

    const birdElemsList = [];

    for (let i = 0; i < props.resultData.length; i++) {
      birdElemsList.push(
        <section className="singleBird">
          {profileElems[i]}
          {detailElems[i]}
          {rangeMapElems[i]}
        </section>
      );
    }

    return <section className="birdtop">{birdElemsList}</section>;
  }
  return <div>waiting</div>;
};

export default BirdTop;

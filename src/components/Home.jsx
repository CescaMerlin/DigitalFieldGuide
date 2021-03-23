import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import "../styles/Home.css";

const Home = (props) => {
  const handleCatSelect = (e) => {
    props.setCatSelect(e.target.value);
  };
  const handleOrdSelect = (e) => {
    props.setSearchParams({
      order: e.target.value,
    });
  };
  const handleFamSelect = (e) => {
    props.setSearchParams({
      family: e.target.value,
    });
  };

  return (
    <section>
      What would you like to search by?
      <br></br>
      <select className="categorySelect" onClick={handleCatSelect}>
        <option value="select">Select</option>
        <option value="order">Order</option>
        <option value="family">Family</option>
        <option value="species">Species</option>
        <option value="engName">English Common Name</option>
        <option value="romName">Romaji Common Name</option>
        <option value="japName">Japanese Common Name</option>
      </select>
      <br></br>
      {props.catSelect === "order" && (
        <select className="sciSelect" onClick={handleOrdSelect}>
          <option value="select">Select</option>
          <option value="strigiformes">Strigiformes</option>
          <option value="accipitriformes">Accipitriformes</option>
          <option value="passeriformes">Passeriformes</option>
        </select>
      )}
      {props.catSelect === "family" && (
        <select className="sciSelect" onClick={handleFamSelect}>
          <option value="select">Select</option>
          <option value="strigidae">Strigidae</option>
          <option value="pandionidae">Pandionidae</option>
          <option value="accipitridae">Accipitridae</option>
          <option value="corvidae">Corvidae</option>
        </select>
      )}
    </section>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = (props) => {
  const handleCatSelect = (e) => {
    props.setCatSelect(e.target.value);
  };
  const handleOrdSelect = (e) => {
    props.setSearchParams({
      ...props.searchParams,
      order: e.target.value,
    });
  };
  const handleFamSelect = (e) => {
    props.setSearchParams({
      ...props.searchParams,
      family: e.target.value,
    });
  };
  const handleInput = (e) => {
    props.setTextInput(e.target.value);
  };
  const handleSearch = (e) => {
    if (
      (props.searchParams.family !== "select" &&
        props.searchParams.family !== "") ||
      (props.searchParams.order !== "select" && props.searchParams.order !== "")
    ) {
      props.setView("results");
    }
  };
  const handleInputSearch = (e) => {
    props.setSearchParams({
      ...props.searchParams,
      [props.catSelect]: props.textInput,
    });
    props.setView("results");
  };

  return (
    <section className="homeWrapper">
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
        <div>
          <select className="sciSelect" onClick={handleOrdSelect}>
            <option value="select">Select</option>
            <option value="Strigiformes">Strigiformes</option>
            <option value="Accipitriformes">Accipitriformes</option>
            <option value="Passeriformes">Passeriformes</option>
            <option value="Anseriformes">Anseriformes</option>
            <option value="Galliformes">Galliformes</option>
            <option value="Podicipediformes">Podicipediformes</option>
            <option value="Columbiformes">Columbiformes</option>
            <option value="Cuculiformes">Cuculiformes</option>
            <option value="Caprimulgiformes">Caprimulgiformes</option>
            <option value="Apodiformes">Apodiformes</option>
            <option value="Gruiformes">Gruiformes</option>
          </select>
          <br></br>
          <button className="search" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
      {props.catSelect === "family" && (
        <div>
          <select className="sciSelect" onClick={handleFamSelect}>
            <option value="select">Select</option>
            <option value="Strigidae">Strigidae</option>
            <option value="Pandionidae">Pandionidae</option>
            <option value="Accipitridae">Accipitridae</option>
            <option value="Corvidae">Corvidae</option>
            <option value="Anatidae">Anatidae</option>
            <option value="Phasianidae">Phasianidae</option>
            <option value="Podicipedidae">Podicipedidae</option>
            <option value="Columbidae">Columbidae</option>
            <option value="Cuculidae">Cuculidae</option>
            <option value="Caprimulgidae">Caprimulgidae</option>
            <option value="Apodidae">Apodidae</option>
            <option value="Rallidae">Rallidae</option>
          </select>
          <br></br>
          <button className="search" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
      {["species", "engName", "romName", "japName"].includes(
        props.catSelect
      ) && (
        <section>
          <input type="text" className="manual" onKeyUp={handleInput}></input>
          <br></br>
          <button className="search" onClick={handleInputSearch}>
            Search
          </button>
        </section>
      )}
    </section>
  );
};

export default Home;

import React, { useState } from "react";
import "../styles/Home.css";

const Home = (props) => {
  const [requestURL, setRequestURL] = useState("");
  const [prediction, setPrediction] = useState("");

  const timeoutFetch = async (resource, options) => {
    const { timeout = 40000 } = options;
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);

    return response;
  };

  const getPredictionWithTimeoutFetch = async () => {
    console.log(requestURL);
    const response = await fetch(requestURL, {
      timeout: 40000,
    });
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(response);
  };

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
  const handlePhotoURL = (e) => {
    setRequestURL(
      "https://owl-image-recognition.herokuapp.com/predict?data=" +
        e.target.value
    );
    //setImgURL(e.target.value);
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
      Start Search:
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
            <option value="Charadriiformes">Charadriiformes</option>
            <option value="Phaethontiformes">Phaethontiformes</option>
            <option value="Gaviiformes">Gaviiformes</option>
            <option value="Procellariiformes">Procellariiformes</option>
            <option value="Ciconiiformes">Ciconiiformes</option>
            <option value="Suliformes">Suliformes</option>
            <option value="Pelecaniformes">Pelecaniformes</option>
            <option value="Bucerotiformes">Bucerotiformes</option>
            <option value="Coraciiformes">Coraciiformes</option>
            <option value="Piciformes">Piciformes</option>
            <option value="Falconiformes">Falconiformes</option>
            <option value="Passeriformes">Passeriformes</option>
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
            <option value="Anatidae">Anatidae</option>
            <option value="Phasianidae">Phasianidae</option>
            <option value="Podicipedidae">Podicipedidae</option>
            <option value="Columbidae">Columbidae</option>
            <option value="Cuculidae">Cuculidae</option>
            <option value="Caprimulgidae">Caprimulgidae</option>
            <option value="Apodidae">Apodidae</option>
            <option value="Rallidae">Rallidae</option>
            <option value="Gruidae">Gruidae</option>
            <option value="Recurvirostridae">Recurvirostridae</option>
            <option value="Haematopodidae">Haematopodidae</option>
            <option value="Charadriidae">Charadriidae</option>
            <option value="Rostratulidae">Rostratulidae</option>
            <option value="Scolopacidae">Scolopacidae</option>
            <option value="Turnicidae">Turnicidae</option>
            <option value="Glareolidae">Glareolidae</option>
            <option value="Stercorariidae">Stercorariidae</option>
            <option value="Alcidae">Alcidae</option>
            <option value="Laridae">Laridae</option>
            <option value="Phaethontidae">Phaethontidae</option>
            <option value="Gaviidae">Gaviidae</option>
            <option value="Diomedeidae">Diomedeidae</option>
            <option value="Hydrobatidae">Hydrobatidae</option>
            <option value="Procellariidae">Procellariidae</option>
            <option value="Ciconiidae">Ciconiidae</option>
            <option value="Sulidae">Sulidae</option>
            <option value="Phalacrocoracidae">Phalacrocoracidae</option>
            <option value="Ardeidae">Ardeidae</option>
            <option value="Threskiornithidae">Threskiornithidae</option>
            <option value="Upupidae">Upupidae</option>
            <option value="Alcedinidae">Alcedinidae</option>
            <option value="Coraciidae">Coraciidae</option>
            <option value="Picidae">Picidae</option>
            <option value="Falconidae">Falconidae</option>
            <option value="Pittidae">Pittidae</option>
            <option value="Campephagidae">Campephagidae</option>
            <option value="Oriolidae">Oriolidae</option>
            <option value="Monarchidae">Monarchidae</option>
            <option value="Laniidae">Laniidae</option>
            <option value="Corvidae">Corvidae</option>
            <option value="Paridae">Paridae</option>
            <option value="Remizidae">Remizidae</option>
            <option value="Alaudidae">Alaudidae</option>
            <option value="Cisticolidae">Cisticolidae</option>
            <option value="Acrocephalidae">Acrocephalidae</option>
            <option value="Locustellidae">Locustellidae</option>
            <option value="Hirundinidae">Hirundinidae</option>
            <option value="Pycnonotidae">Pycnonotidae</option>
            <option value="Phylloscopidae">Phylloscopidae</option>
            <option value="Scotocercidae">Scotocercidae</option>
            <option value="Aegithalidae">Aegithalidae</option>
            <option value="Zosteropidae">Zosteropidae</option>
            <option value="Regulidae">Regulidae</option>
            <option value="Sittidae">Sittidae</option>
            <option value="Certhiidae">Certhiidae</option>
            <option value="Troglodytidae">Troglodytidae</option>
            <option value="Cinclidae">Cinclidae</option>
            <option value="Sturnidae">Sturnidae</option>
            <option value="Turdidae">Turdidae</option>
            <option value="Muscicapidae">Muscicapidae</option>
            <option value="Bombycillidae">Bombycillidae</option>
            <option value="Prunellidae">Prunellidae</option>
            <option value="Passeridae">Passeridae</option>
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
      {/* <br></br>
      **Identify Bird:
      <br></br>
      <input
        type="text"
        className="identify"
        placeholder="paste image url"
        onKeyUp={handlePhotoURL}
      ></input>
      <button
        className="identifyButton"
        onClick={getPredictionWithTimeoutFetch}
      >
        Identify
      </button> */}
    </section>
  );
};

export default Home;

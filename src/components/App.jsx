import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";

const App = () => {
  const [catSelect, setCatSelect] = useState("");
  const [searchParams, setSearchParams] = useState({
    commonNameEnglish: "",
    commonNameRomaji: "",
    commonNameJapanese: "",
    order: "",
    family: "",
    species: "",
  });

  console.log("App level current cat:", catSelect);
  console.log("App level current search:", searchParams);

  return (
    <div className="App">
      <Header />
      <Home catSelect={catSelect} setCatSelect={setCatSelect} />
    </div>
  );
};

export default App;

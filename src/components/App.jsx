import React, { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import Results from "./Results";

const App = () => {
  const [catSelect, setCatSelect] = useState("");
  const [textInput, setTextInput] = useState("");
  const [view, setView] = useState("search");
  const [searchParams, setSearchParams] = useState({
    engName: "",
    romName: "",
    japName: "",
    order: "",
    family: "",
    species: "",
  });

  console.log("App level current cat:", catSelect);
  console.log("App level current input:", textInput);
  console.log("App level current search:", searchParams);

  return (
    <div className="App">
      <Header />
      {view === "search" ? (
        <Home
          catSelect={catSelect}
          setCatSelect={setCatSelect}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          textInput={textInput}
          setTextInput={setTextInput}
          view={view}
          setView={setView}
        />
      ) : (
        <Results searchParams={searchParams} />
      )}
    </div>
  );
};

export default App;

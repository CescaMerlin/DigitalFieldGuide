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
        <Results
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setView={setView}
        />
      )}
      <footer className="foot">
        DigiTori created by{" "}
        <a href="https://github.com/CescaMerlin">Francesca Marino</a> | | Data
        sourced from{" "}
        <a href="https://avibase.bsc-eoc.org/avibase.jsp">Avibase</a> | | Images
        sourced from <a href="https://www.wikipedia.org/">Wikipedia</a> | |
        Repository available on{" "}
        <a href="https://github.com/CescaMerlin/DigitalFieldGuide">Github</a>
        <br></br>Logo design by Francesca Marino | | Owl icon made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </footer>
    </div>
  );
};

export default App;

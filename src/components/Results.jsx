import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import "../styles/Results.css";
import BirdTop from "./BirdTop";

const BIRD_QUERY = gql`
  query Bird(
    $engName: String
    $japName: String
    $romName: String
    $order: String
    $family: String
    $species: String
  ) {
    findBirds(
      filter: {
        commonNameEnglish: { eq: $engName }
        commonNameJapanese: { eq: $japName }
        commonNameRomaji: { eq: $romName }
        order: { eq: $order }
        family: { eq: $family }
        species: { eq: $species }
      }
    ) {
      count
      items {
        id
        commonNameEnglish
        commonNameJapanese
        commonNameRomaji
        order
        family
        species
        range
        rangeMap
        photos
        profilePic
      }
    }
  }
`;

function setVariableObj(params) {
  const variableObj = {};
  if (params.engName !== "") {
    variableObj.engName = params.engName;
  }
  if (params.romName !== "") {
    variableObj.romName = params.romName;
  }
  if (params.japName !== "") {
    variableObj.japName = params.japName;
  }
  if (params.order !== "") {
    variableObj.order = params.order;
  }
  if (params.family !== "") {
    variableObj.family = params.family;
  }
  if (params.species !== "") {
    let formSpecies = params.species;
    formSpecies = formSpecies.toLowerCase();
    formSpecies = formSpecies[0].toUpperCase() + formSpecies.slice(1);
    variableObj.species = formSpecies;
  }
  return variableObj;
}

const Results = (props) => {
  for (const key in props.searchParams) {
    if (props.searchParams[key] === "select") {
      props.searchParams[key] = "";
    }
  }
  console.log("params", props.searchParams);
  const input = setVariableObj(props.searchParams);
  const { data, loading, error } = useQuery(BIRD_QUERY, {
    variables: input,
  });

  const handleNewSearch = (e) => {
    props.setCatSelect("");
    props.setSearchParams({
      engName: "",
      romName: "",
      japName: "",
      order: "",
      family: "",
      species: "",
    });
    props.setView("search");
  };

  if (data) {
    console.log("results", data);
    return (
      <section>
        {data.findBirds.count === 0 ? (
          <section className="resultsWrapper">
            <div className="resultCount">Results...0</div>
            <button className="newSearch" onClick={handleNewSearch}>
              Search Again
            </button>
          </section>
        ) : (
          <section className="resultsWrapper">
            <div className="resultCount">Results...{data.findBirds.count}</div>
            <button className="newSearch" onClick={handleNewSearch}>
              Search Again
            </button>
            <BirdTop resultData={data.findBirds.items} />
          </section>
        )}
      </section>
    );
  }
  return <div>Waiting on Results</div>;
};

export default Results;

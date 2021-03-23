import React from "react";
import { useQuery, gql } from "@apollo/client";
import "../styles/Results.css";
import BirdTop from "./BirdTop";

const getResults = gql`
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

const Results = (props) => {
  return (
    <section className="resultsWrapper">
      <BirdTop />
    </section>
  );
};

export default Results;

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SpeciesType = ({ speciesType, species }) => {
  console.log("this is the species type", speciesType);
  return (
    <>
      <h3>Species: {species} {speciesType === "" ? "" : `(${speciesType})`}</h3>
    </>
  );
};

export default SpeciesType;

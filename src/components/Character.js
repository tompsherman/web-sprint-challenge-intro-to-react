// Write your Character component here
import React from "react";
import SpeciesType from "./SpeciesType"
import styled from "styled-components"

const StyledDiv = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    border: 2px solid black;
    margin:${props=> props.theme.margin};

    .name{
        max-width:100%;
    }
    .profile{
        display:flex;
    }
    img{
        margin: 3%;
        border-radius: 50%
    }
    .info{
        display:flex;
        flex-direction: column;
        justify-content: center;
        margin:3%3%;
    }
`

const Character = ({ characters }) => {
  console.log("what is", characters);
  return (
    <>
      {characters.map((item) => {
        return (
          <StyledDiv key={item.id}>
            <div className ="name"><h2>{item.name}</h2></div>
            <div className="profile">
            <img src={item.image} alt={item.name} />
            <div className="info">
                <h3>Status: {item.status}</h3>
                 <SpeciesType species={item.species} speciesType={item.type}/>
                <h3>Location: {item.location.name}</h3>
            </div>
            </div>
          </StyledDiv>
        );
      })}
    </>
  );
};

export default Character;

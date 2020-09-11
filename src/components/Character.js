// Write your Character component here
import React from "react";
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
        justify-content: space-around;
    }
    img{
        margin: 3%;
        border-radius: 50%
    }
    .info{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
`

const Character = ({ characters }) => {
  console.log("what is", characters);
  return (
    <>
      {characters.map((item) => {
        return (
          <StyledDiv key={item.id}>
            <div class ="name"><h2>{item.name}</h2></div>
            <div class="profile">
            <img src={item.image} alt={item.name} />
            <div class="info">
                <h3>Status: {item.status}</h3>
                <h3>
                  Species: {item.species} ({item.type})
                </h3>
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

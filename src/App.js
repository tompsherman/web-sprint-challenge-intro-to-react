import React, { useState, useEffect} from 'react';
import Character from "./components/Character"
import axios from "axios"
import styled from "styled-components"
import './App.css';
 // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const App = () => {
 
  const [characters, setCharacters]= useState([])
  const URL = "https://rickandmortyapi.com/api/character"

  useEffect (()=>{
    axios
    .get(URL)
    .then((response)=>{
      console.log("character list:", response.data.results)
      setCharacters(response.data.results)
    })
    .catch(err=> console.log("we got a big fucking problem Morty"))
  },[])
  return (
    <div className="App">
      <h1 className="Header">Rick & Morty Character Log</h1>
      <Character characters ={characters}/>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";
const axios = require('axios');

function App() {

  const [def, setDef] = useState([]);



  const form: HTMLFormElement = document.querySelector("#defineform");
  document.body.addEventListener("submit", async function (event) {
    event.preventDefault();
    let form = event.target as HTMLFormElement;
  });


    const word = document.getElementById
    useEffect(() => {
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      form.onsubmit = async () => {
        const formData = new FormData(form);
        // console.log(formData);
        const text = formData.get("defineword") as string;
        axios.get(url + text)
          .then((res) => {
            console.log(res);
            setDef(res.data);
          })
          .catch((err) => {
            console.log(err);
        })
        //.then((response: Response) => response.json())
        // const json = response.json();
        // setDef(await json);
        //.then(function (data) {
        // console.log(json);
        //  console.log(def);
      }
    }

      //.catch((error) => console.log(error));
      //console.log(text);

      ,[]);
  return (
    <div className="App">
      <main className="container">
<div className="bg-light p-5 rounded">
  <img src="https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg" width="250" height="250"></img>
    <h1 className="defined">DICTIONARY</h1>
    <p className="lead">Defintion</p>
  {def.map((def) => (
  <ul className="list-unstyled">
    <li><b><u>{def.word}</u></b></li>
    <li>Phonetic: {def.phonetics[0].text}</li>
    <li><i>{def.meanings[0].partOfSpeech}</i></li>
      <ol>
        <li>{def.meanings[0].definitions[0].definition}</li>
        {/* <li>{def.meanings[0].definitions[1].definition}</li> */}
      </ol>
      <li>Antonym(s): {def.meanings[0].antonyms}</li>
    <li>Synonym(s): {def.meanings[0].synonyms[0]}</li>
      {/* <li><i>{def.meanings[1].partOfSpeech}</i></li>
      <ol>
        <li>{def.meanings[1].definitions[0].definition}</li>
        <li>{def.meanings[1].definitions[1].definition}</li>
      </ol>
      <li>Antonym(s): {def.meanings[1].antonyms}</li>
    <li>Synonym(s): {def.meanings[1].synonyms[1]}</li> */}
    </ul>
    ))}
 </div>

</main>
    </div>
  );
}

export default App;

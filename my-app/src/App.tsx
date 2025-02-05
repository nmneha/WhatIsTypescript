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




    useEffect(() => {
      const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
      form.onsubmit = async () => {
        const formData = new FormData(form);
        // console.log(formData);
        const text = formData.get("defineword") as string;
        axios.get(url + text)
          .then((res: any) => {
            console.log(res);
            setDef(res.data);
          })
          .catch((err: any) => {
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
  <img src="https://www.publicbooks.org/wp-content/uploads/2017/01/book-e1484158615982.jpg" width="700" height="400"></img>
    <h1 className="defined">DICTIONARY</h1>
    <p className="lead">Definition</p>
  {def.map((def: any) => (
  <ul className="list-unstyled">
    <li><b><u>{def.word}</u></b></li>
    {def.phonetics.map((phonetics: any) => (
    <ul className="list-unstyled">
      <li>{phonetics.text}</li> 
      <li>{<audio src = {phonetics.audio} controls></audio>}</li>
        {def.meanings.map((meanings: any) => (
        <ul className="list-unstyled">
          <li><i>{meanings.partOfSpeech}</i></li>
          <li><b>{meanings.antonyms.join(', ') === "" ? "" : "antonyms: "}</b>{meanings.antonyms.join(', ')} </li>
          <li><b>{meanings.synonyms.join(', ') === "" ? "" : "synonyms: "}</b>{meanings.synonyms.join(', ')} </li>
              {meanings.definitions.map((definitions: any) => (
              <ul className="list-unstyled">
              <li><li>  ⋄ {definitions.definition}</li></li>
    </ul>
    ))}
    <p>_______________________________________________________________________________</p>
    </ul>
    ))}
    </ul>
    ))}
    </ul>
    ))}
 </div>

</main>
    </div>
  );
}

export default App;

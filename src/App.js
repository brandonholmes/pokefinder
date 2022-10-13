import "./App.css";
import { useState, useEffect } from "react";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

export default function App() {
  //const [title, setTitle] = useState("Find A Pokémon!");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const pokemon = encodeURIComponent(name.toLowerCase());
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setDetails(r))
      .catch((e) => setDetails(e));
  }, [name]);

  return (
    <div className="App">
      <Title text={"Find A Pokémon!"} />
      <Entry action={setName} />
      <Info name={name} data={details} />
    </div>
  );
}

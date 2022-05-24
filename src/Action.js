import React, { useState } from "react";
import axios from "axios";

export default function Action() {
  //Our meme array
  const [memes, setMeme] = useState([]);
  const [title, setTitle] = useState("Get Data");
  const [hidden, setHiddne] = useState(false);

  function handleClick() {
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => {
        // console.log(response);
        const final = response.data.data.memes;
        setMeme(final);
        //Remove comments for better view of data
        // console.log(final);
        // console.log(memes);
        setTitle("Clear data");
        setHiddne(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function clear() {
    // console.log("In Clear");
    setMeme([]);
    setHiddne(false);
    setTitle("Get data");
  }

  return (
    <>
      <hr />
      <h5 style={{ color: "blue" }}>
        This is Action Component
        <br />
        When below button is clicked, the onClick function will be called
      </h5>
      <button
        style={{ marginTop: "5px" }}
        onClick={hidden ? clear : handleClick}
      >
        {title}
      </button>
      <br />
      <br />

      <ul>
        {memes.map((message) => (
          <li key={message.id}>
            <h5>{message.name} </h5>
            <img src={message.url} alt="" width={200} height={200} />
          </li>
        ))}
      </ul>
    </>
  );
}

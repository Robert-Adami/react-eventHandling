import React, { useState } from "react";
//ako spraviť aby sa nam menila farba buttonu on mouse over a ked ide preč myš  v reacte ?
function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isHovered, setIsHovered] = useState(false); //nastavíme počiatočný stav na false aby bol button vždy biely ak nie je hovernutý

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={() => {
          setHeadingText("Submited");
        }}
        onMouseOver={() => {
          setIsHovered(true); //zmeníme stav ak je hovernutý na true
        }}
        onMouseOut={() => {
          setIsHovered(false); // a ak odíde s myškou dáme false aby sa dala naspať pôvodná farba
        }}
        style={ {backgroundColor: isHovered ? "black" : "white"} } //pomocou conditional renderingu meníme farby buttonu
      >
        Submit
      </button>
    </div>
  );
}

export default App;

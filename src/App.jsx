import React, { useState } from "react";
//ako spraviť aby sa nam menila farba buttonu on mouse over a ked ide preč myš  v reacte ?
function App() {
  const [headingText, setHeadingText] = useState("");
  const [isHovered, setIsHovered] = useState(false); //nastavíme počiatočný stav na false aby bol button vždy biely ak nie je hovernutý
  const [unsubmitted, isSubmitted] = useState('This gets changed to whatever you submit'); //State pre submit button ktorý mení heading 2

  function somethinChanged(event) {
    setHeadingText(event.target.value);
  }
  function onClickChange(e) {
    isSubmitted(e.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <h2>{unsubmitted}</h2>
      <input
        onChange={somethinChanged}
        type="text"
        placeholder="What's your name?"
      />
      <button
        // onClick={() => {
        //   setHeadingText("Submited");
        // }}
        onMouseOver={() => {
          setIsHovered(true); //zmeníme stav ak je hovernutý na true
        }}
        onMouseOut={() => {
          setIsHovered(false); // a ak odíde s myškou dáme false aby sa dala naspať pôvodná farba
        }}
        style={{ backgroundColor: isHovered ? "black" : "white" }} //pomocou conditional renderingu meníme farby buttonu
        value={headingText}

        onClick={onClickChange}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function AngryButton() {
  const [anger, setAnger] = useState(0);

  const handleClick = () => {
    setAnger(anger < 1 ? anger + 0.2 : 0);
  }

  return(
    <button style={{backgroundColor: `rgba(255,0,0, ${anger})`}} onClick={handleClick} className="AngryButton">
      {anger < 1 && <span>Don't click me too much!</span>}
      {anger == 1 && <span>Rawr!</span>}
    </button>

  );
}

export default AngryButton;
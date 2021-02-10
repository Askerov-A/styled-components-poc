import React, { useState } from "react";
import "./App.css";
import { StyledInput } from "./components/fields/input/input.styles";
import Popup from "./components/Popup";

function App() {
  const [isPopupOpened, setIsPopupOpen] = useState(false);
  return (
    <>
      <StyledInput />
      <button onClick={() => setIsPopupOpen(true)}>Toggle popup</button>
      {isPopupOpened && (
        <Popup
          isShowed={isPopupOpened}
          onClose={() => setIsPopupOpen(false)}
          headerText="Popup header"
          width={500}
        >
          Some Text
        </Popup>
      )}
    </>
  );
}

export default App;

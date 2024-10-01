import React from "react";
// Importing the Login and SignIn components
import { Login, SignIn } from "./index";

function Overlay() {
  // State to determine which card (SignIn or Login) is currently visible
  const [visible, setVisible] = React.useState("signin");

  // Function to switch between the SignIn and Login cards
  const switchCard = (card) => {
    // Update the visible state with the selected cardsetVisible(card);
  };

  return (
    // Main overlay div covering the entire viewport
    <div
      id="overlay"
      className={`hidden flex flex-col top-0 left-0 fixed w-[100vw] h-[100vh] bg-slate-800 z-[100] bg-opacity-50`}
    >
      <div>
        {/* Conditional rendering of the SignIn or Login component based on visibility*/}
        {visible === "signin" ? (
          <SignIn toggle={switchCard} />
        ) : (
          <Login toggle={switchCard} />
        )}
      </div>
    </div>
  );
}

export default Overlay;

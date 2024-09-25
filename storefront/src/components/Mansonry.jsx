import React, { useEffect, useState } from "react";

// Importing column components for rendering items in different layouts
import { OneColumn, TwoColumns, ThreeColumns } from "./MansoryColumns";

// Mansonry component to display items based on window size
function Mansonry({ items }) {
  // Initialize state with current window dimensions
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Function to update window size in state
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  // Render layout based on screen size
  // Small screens (less than 767.98px)
  if (windowSize.width < 767.98) {
    return (
      <OneColumn items={items} />
      // Render items in one column
    );
  }
  // Medium screens (between 768px and 992px)
  else if (windowSize.width < 993 && windowSize.width > 767) {
    return (
      <div>
        <TwoColumns items={items} />
      </div>
    );
  }
  // Large screens (between 993px and 1199px)
  else if (windowSize.width < 1199 && windowSize.width > 992) {
    return (
      <div>
        <ThreeColumns items={items} /> // Render items in three columns
      </div>
    );
  }

  // Extra-large screens (greater than 1199px)
  else if (windowSize.width > 1199) {
    return (
      <div>
        <ThreeColumns items={items} /> // Render items in three columns
      </div>
    );
  }
}

export default Mansonry;

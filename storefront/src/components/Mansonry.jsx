import React, { useEffect, useState } from 'react'

import { OneColumn, TwoColumns, ThreeColumns } from './MansoryColumns'

function Mansonry({ items }) {
    // Initialize state with window dimensions
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        // Function to update window size in state
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array to only run on mount/unmount

    // small screens
    if (windowSize.width < 767.98) {
        return (
            <OneColumn items={items} />
        );
    }
    // medium screens
    else if (windowSize.width < 993 && windowSize.width > 767) {
        return (
            <div>

                <TwoColumns items={items} />
            </div>
        );
    }
    // large
    else if (windowSize.width < 1199 && windowSize.width > 992) {
        return (
            <div>

                <ThreeColumns items={items} />
            </div>
        );
    }

    // xlarge screen
    else if (windowSize.width > 1199) {
        return (
            <div>

                <ThreeColumns items={items} />
            </div>
        );
    }

}

export default Mansonry

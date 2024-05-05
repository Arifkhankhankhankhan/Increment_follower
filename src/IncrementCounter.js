import React, { useState, useEffect } from 'react';
 // Make sure to import your CSS file

const IncrementCounter = () => {
    const [counts, setCounts] = useState([
        { platform: "Twitter", icon: "fab fa-twitter fa-5x", target: 10000, count: 0 },
        { platform: "Youtube", icon: "fab fa-youtube fa-5x", target: 6000, count: 0 },
        { platform: "Instagram", icon: "fab fa-instagram fa-5x", target: 8000, count: 0 }
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts(prevCounts =>
                prevCounts.map(count => {
                    if (count.count < count.target) {
                        const increment = count.target / 20;
                        return { ...count, count: count.count + increment };
                    } else {
                        return { ...count, count: count.target };
                    }
                })
            );
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            {counts.map((count, index) => (
                <div key={index} className="container-counter">
                    <i className={count.icon}></i>
                    <div className="counter">{Math.round(count.count)}</div>
                    <span>{count.platform} Followers</span>
                </div>
            ))}
        </div>
    );
};

export default IncrementCounter;

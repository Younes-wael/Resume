// src/components/Hero/ContentSection.jsx
import React, { useState } from 'react';

const ContentSection = ({ id, title, content, icon }) => {
    const [showMore, setShowMore] = useState(false);

    const handleViewMore = () => {
        setShowMore(!showMore);
    };

    return (
        <section id={id} className="content-section">
            <h2>
                <span className="section-icon">{icon}</span> {/* Display the icon */}
                {title}
            </h2>

            {/* Call content function with showMore for the "Experience" section */}
            {typeof content === 'function' ? content(showMore) : content}

            {/* Show "View More" only for Experience */}
            {(id === "experience" || id === "education" )&& (
                <div className="view-more" onClick={handleViewMore}>
                    {showMore ? "View Less" : "View More"} <span className="view-more-icon"></span>
                </div>
            )}
        </section>
    );
};

export default ContentSection;

// Hero.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';
import ProfileText from './ProfileText';
import ToggleButton from './ToggleButton';
import ContentSection from './ContentSection';
import { contentData } from './contentData';
import './Hero.css';

const Hero = () => {
    const [expanded, setExpanded] = useState(false);
    const [showMore, setShowMore] = useState({}); // Keep track of which items are expanded

    const handleViewMore = (id) => {
        setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
    };
    return (
        <div className="hero-container">
            <motion.div
                initial={{ width: "100vw" }}
                animate={{
                    width: expanded ? "20vw" : "100vw",
                }}
                transition={{ duration: 0.8 }}
                className="left-panel"
            >
                <motion.div
                    initial={{ scale: 1.5 }}
                    animate={{ scale: expanded ? 1.1 : 1.5 }}
                    transition={{ duration: 0.6 }}
                    className="profile-image-wrapper"
                >
                    <ProfileImage />
                </motion.div>

                <motion.div
                    className={`text-overlay ${expanded ? "hidden" : ""}`}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: expanded ? 0 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <ProfileText />
                </motion.div>

                <ToggleButton expanded={expanded} setExpanded={setExpanded} />

                {expanded && (
                    <motion.div
                        className="sidebar-links"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button>
                        <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button>
                        <button onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>Experience</button>
                        <button onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}>Education</button>
                        <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button>
                    </motion.div>
                )}
            </motion.div>

            {expanded && (
                <motion.div
                    className="right-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {contentData.map(({ id, title, content , icon}) => (
                        <ContentSection
                            key={id}
                            id={id}
                            title={title}
                            icon={icon}
                            content={content}
                        />
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Hero;

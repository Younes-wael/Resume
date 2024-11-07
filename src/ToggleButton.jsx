// src/components/Hero/ToggleButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ToggleButton = ({ expanded, setExpanded }) => (
    <motion.button
        className={`button ${expanded ? "close-button" : "open-button"}`}
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        {expanded ? "Close Profile" : "See Profile"}
    </motion.button>
);

export default ToggleButton;

// src/components/Hero/ProfileText.jsx
import React from 'react';

const ProfileText = () => (
    <div
        className="text-overlay"
        style={{
            textAlign: 'center',
            color: '#fff',
            padding: '1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        }}
    >
        <h1
            className="title"
            style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                margin: '0.5rem 0',
                color: '#e8e8e8',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
            }}
        >
            Wael Younes
        </h1>
        <h2
            className="subtitle"
            style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#e8e8e8',
                margin: '0.25rem 0 1rem 0',
                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
            }}
        >
            Computer Science Student
        </h2>
        <p
            className="description"
            style={{
                fontSize: '1rem',
                fontStyle: 'italic',
                color: '#d1eaff',
                lineHeight: '1.5',
                maxWidth: '360px',
                margin: '0 auto',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            }}
        >
            📖"We can only see a short distance ahead, but we can see plenty there that needs to be done."📖
            <span style={{ display: 'block', marginTop: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem' }}>- Alan Turing</span>
        </p>
    </div>
);

export default ProfileText;

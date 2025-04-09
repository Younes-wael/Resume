// src/components/Hero/ProfileImage.jsx
import React from 'react';
import profilePhoto from './assets/wael.jpg';

const ProfileImage = () => (
    <div className="profile-image-wrapper">
        <img src={profilePhoto} alt="Wael Younes" className="profile-image"
             style={{
                 width: 'min(50vw, 200px)',
                 height: 'min(60vw, 250px)',
                 maxWidth: '100%'
             }}
        />
    </div>
);

export default ProfileImage;

// src/components/Hero/ProfileImage.jsx
import React from 'react';
import profilePhoto from './assets/profile.jpeg';

const ProfileImage = () => (
    <div className="profile-image-wrapper">
        <img src={profilePhoto} alt="Wael Younes" className="profile-image" />
    </div>
);

export default ProfileImage;

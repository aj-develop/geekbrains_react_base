import React from "react";

const Profile = ({selectedChat}) => {
    return (
        <div className="chat-box">
            <h2>Профиль: {selectedChat.name}</h2>
        </div>
    );
}

export default Profile;
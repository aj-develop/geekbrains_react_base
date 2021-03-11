import React, {useMemo} from "react";
import {useSelector} from "react-redux";

const Profile = ({chatId}) => {
    const profiles = useSelector(state => state.profile.profileList);
    const selectedProfile = profiles[chatId];

    const renderProfile = (profile) => (
        <>
            <h4>Имя: {profile.name}</h4>
            <h4>Возвраст: {profile.age}</h4>
        </>
    );

    return (
        <div className="chat-box">
            <h2>Профиль</h2>
            {selectedProfile
                ? renderProfile(selectedProfile)
                : <h5>Нет информации</h5>
            }
        </div>
    );
}

export default Profile;
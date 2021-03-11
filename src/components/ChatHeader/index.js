import arrow from "../../img/arrow.png";
import pp from "../../img/pp.png";
import video from "../../img/video.png";
import phone from "../../img/phone.png";
import more from "../../img/more.png";
import React from "react";
import {Link, generatePath} from "react-router-dom";
import {ROUTES} from "../../utils/constants";
import {useSelector} from "react-redux";

const ChatHeader = ({chatId}) => {

    const profiles = useSelector(state => state.profile.profileList);
    const profile = profiles[chatId];
    
    const renderName = (
            <>
                <img src={arrow} className="arrow" alt="arrow"/>
                <img src={pp} className="pp" alt="pp"/>
                <Link to={generatePath(ROUTES.profileDetails, {profileId: chatId})}>
                    <h2>{profile && profile.name}</h2>
                </Link>
                <span>online</span>
            </>
        )
    ;

    return (
        <div className="chat-header">
            <div className="profile">
                <div className="left">
                    {profile &&
                    renderName
                    }
                </div>
                <div className="right">
                    <img src={video} className="icon" alt="video"/>
                    <img src={phone} className="icon" alt="phone"/>
                    <img src={more} className="icon" alt="more"/>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader;
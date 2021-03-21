import React from 'react';
import './styles.css';
import notificationsOff from "../../img/notifications_off.png";

const PushToggle = () => {
    return (
        <span className="push">
                <img
                    className="push__image"
                    src={notificationsOff}
                    title="Push Notification"
                    alt="Push Notification"/>
            </span>
    )
}

export default PushToggle;
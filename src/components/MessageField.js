import React, {useCallback} from 'react';
import {AUTHORS} from "../utils/constants";

const MessageField = ({messages, chatNotSelected}) => {

    const renderMessage = useCallback((message, i) => (
        <div
            className={'chat-' + (message.author !== AUTHORS.ME ? "l" : "r")}
            key={i}
        >
            {message.author === AUTHORS.ME &&
            <div className="sp"></div>
            }
            <div className="mess">
                <p>{message.text}</p>
                <div className="check">
                    <span>{message.author}</span>
                </div>
            </div>
            {message.author !== AUTHORS.ME &&
            <div className="sp"></div>
            }
        </div>
    ), []);

    return (
        <div className="chat-box">
            {chatNotSelected
                ? <h4>Выберите пожалуйста чат</h4>
                : messages.map(renderMessage)
            }
        </div>
    )
}
export default MessageField
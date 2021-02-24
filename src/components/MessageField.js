import React, {useState, useEffect} from 'react';
import Message from "./Message";

const MessageField = () => {

    const [messageField, setMessageField] = useState([
            {id: 0, message: {author: 'Робот', text: 'Привет!'}},
            {id: 1, message: {author: 'Робот', text: 'Как дела?'}}
        ]
    );

    const addMessageField = (messageIn) => {
        setMessageField([...messageField, {
            id: messageField.length,
            message: messageIn
        }])
    }

    useEffect(() => {
        if (messageField[messageField.length - 1].message.author !== 'Робот') {
            const timer = setTimeout(() =>
                setMessageField([...messageField, {
                        id: messageField.length,
                        message: {author: 'Робот', text: 'Не приставай ко мне, я робот!'}
                    }]
                ), 1000);
            return () => clearTimeout(timer);
        }
    }, [messageField]);

    return (
        <>
            <div className="chat-box">
                {messageField.map(item => (
                    <div
                        className={'chat-' + (item.message.author === 'Робот' ? "l" : "r")}
                        key={item.id}
                    >
                        {item.message.author !== 'Робот' &&
                        <div className="sp"></div>
                        }
                        <div className="mess">
                            <p>
                                {item.message.text}
                            </p>
                            <div className="check">
                                <span>{item.message.author}</span>
                            </div>
                        </div>
                        {item.message.author == 'Робот' &&
                        <div className="sp"></div>
                        }
                    </div>
                ))}
            </div>
            <Message messageFieldHandler={addMessageField}/>
        </>
    )
}
export default MessageField
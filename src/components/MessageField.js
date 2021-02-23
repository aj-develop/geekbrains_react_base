import React, {useState} from 'react';
import Message from "./Message";

const MessageField = () => {
    /*
    const [messageField, setMessageField] = useState([
            {id: 0, value: {author: 'Alex', text: 'Привет'}},
            {id: 1, value: {author: 'Alex', text: 'Как дела?'}}
        ]
    );
    */

    const [messageField, setMessageField] = useState(['Привет', 'Как дела?']);

    /*
    const addMessageField = (message) => {
        setMessageField([...messageField, {
            id: messageField.length,
            value: message
        }])
    }
     */
    const addMessageField = (message) => {
        setMessageField([...messageField, message])
    }

    return (
        <div>
            <ul>
                {messageField.map(item => (
                    <li>{item}</li>
                ))}
            </ul>

            <Message messageFieldHandler={addMessageField}/>

            <h2>{JSON.stringify(messageField)}</h2>
        </div>
    )
}
export default MessageField
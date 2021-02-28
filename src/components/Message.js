import React, {useState} from 'react';
import mic from "../img/mic.png";
import emo from "../img/emo.png";
import camera from "../img/camera.png";
import attach_file from "../img/attach_file.png";
import Form from 'react-bootstrap/Form';

const Message = ({messageFieldHandler}) => {

        const [message, setMessage] = useState({author: 'Александр', text: ''});

        const changeHandler = ({target}) => {
            setMessage({
                ...message, text: target.value
            })
        }

        const keyPressHandler = ({key}) => {
            if (key === "Enter" && typeof message.text !== 'undefined' && message.text !== '') {
                messageFieldHandler(message);
                setMessage({
                    ...message, text: ''
                });
                let inputField = document.querySelector('.chat-footer__input');
                inputField.value = "";
            }
        }

        const submitHandler = e => {
            e.preventDefault()
        }

        return (
            <Form onSubmit={submitHandler}>
                <div className="chat-footer">
                    <img src={emo} className="emo" alt="emo"/>
                    <Form.Control
                        type="ext"
                        className="chat-footer__input"
                        placeholder="Type a message"
                        onChange={changeHandler}
                        onKeyPress={keyPressHandler}
                    />
                    <div className="icons">
                        <img src={attach_file} alt="attach"/>
                        <img src={camera} alt="camera"/>
                    </div>
                    <img src={mic} className="mic" alt="mic"/>
                </div>
            </Form>
        );
    }
;

export default Message;
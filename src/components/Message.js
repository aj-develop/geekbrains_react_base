import React, {useState} from 'react';
import mic from "../img/mic.png";
import emo from "../img/emo.png";
import camera from "../img/camera.png";
import attach_file from "../img/attach_file.png";
import {AUTHORS} from "../utils/constants";
import Form from 'react-bootstrap/Form';

const Message = ({onAddMessage}) => {

        const [message, setMessage] = useState(
            {author: AUTHORS.ME, text: ''}
        );

        const changeHandler = ({target}) => {
            setMessage({
                ...message, text: target.value
            })
        }

        const keyPressHandler = ({key}) => {
            if (key === "Enter" && typeof message.text !== 'undefined' && message.text !== '') {
                onAddMessage(AUTHORS.ME, message.text);
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
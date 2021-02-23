import React, {useState} from 'react';

const Message = ({messageFieldHandler}) => {

        const [message, setMessage] = useState('ALEX');

        const submitHandler = e => {
            e.preventDefault()
        }

        const changeHandler = ({target}) => {
            setMessage(target.value)
        }

        const keyPressHandler = ({key}) => {
            if (key === "Enter") {
                clickHandler()
            }
        }

        const clickHandler = () => {
            messageFieldHandler(message);
            let inputField = document.querySelector('input');
            inputField.value = "";
        }

        return (
            <form onSubmit={submitHandler}>
                <input
                    type='text'
                    required="required"
                    onChange={changeHandler}
                    onKeyPress={keyPressHandler}
                />
                <button
                    type="button"
                    onClick={clickHandler}
                >
                    Добавить
                </button>
            </form>
        );
    }
;

export default Message
import React, {useState} from 'react';

function App() {
    const [messages, setMessages] = useState(['Привет', 'Как дела?'])

    const handleClick = () => {
        setMessages(messages => [...messages, 'Нормально'])
    }

    const Output = ({message}) => <div>{message}</div>

    return (
        <div>
            {messages.map((message) => (
                <Output message={message}/>
            ))}
            <button type="button" onClick={handleClick}>Добавить</button>
        </div>
    )
}

export default App;
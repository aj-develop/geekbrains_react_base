import logo from './logo.svg';
import './App.css';

let messages = ['Привет', 'Как дела?'];
const MessageComponent = (props) => <div>{props.text}</div>;
const MessageField = (props) => {
    return props.messages.map(message => <MessageComponent text={message}/>);
};

function App() {
    return (
        <MessageField messages={messages}/>
    )
}

export default App;

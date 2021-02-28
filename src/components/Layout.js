import arrow from "../img/arrow.png";
import pp from "../img/pp.png";
import video from "../img/video.png";
import phone from "../img/phone.png";
import more from "../img/more.png";
import MessageField from "./MessageField";
import ChatList from "./ChatList";


const Layout = () => {
    return (
        <div className="container">
            <div className="chat-wrapper">
                <ChatList/>
                <div className="chat">
                    <div className="chat-header">
                        <div className="profile">
                            <div className="left">
                                <img src={arrow} className="arrow" alt="arrow"/>
                                <img src={pp} className="pp" alt="pp"/>
                                <h2>Робот</h2>
                                <span>online</span>
                            </div>
                            <div className="right">
                                <img src={video} className="icon" alt="video"/>
                                <img src={phone} className="icon" alt="phone"/>
                                <img src={more} className="icon" alt="more"/>
                            </div>
                        </div>
                    </div>
                    <MessageField/>
                </div>
            </div>
        </div>
    )
}
export default Layout;
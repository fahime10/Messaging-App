import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AccountImage from "../assets/images/account.png";
import MessageImage from "../assets/images/message.png";
import DotsVertical from "../assets/images/dots-vertical.png";
import MagnifyImage from "../assets/images/magnify.png";


function MessagesList() {
    const [currentUserSelected, setCurrentUserSelected] = useState();
    const [messages, setMessages] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("user")) {
            fetch("http://localhost:9000/api/messages-list", {
                method: "POST"
            })
            .then((res) => res.json())
            .then((res) => {
                setMessages(res);
                setCurrentUserSelected(messages[0]);
            })
            .catch((err) => console.log(err));
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function logout() {
        sessionStorage.clear();
        navigate("/");
    }

    return (
        <>
            <div className="row">
                {(sessionStorage.getItem("user")) ? 
                    <div className="col-sm-3">
                        <div className="sidebar">
                            <div className="user">
                                <img src={AccountImage} className="user-image"  />
                                <button className="btn btn-info logout" type="button" onClick={logout}>Logout</button>
                                <img src={MessageImage} className="focusable options-image" />
                                <img src={DotsVertical} className="focusable options-image" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <img src={MagnifyImage} className="input-group-text focusable user-image" />
                                </div>
                                <input type="text" placeholder="Search or start new chat" className="form-control rounded" />
                            </div>
                            {messages.map((message) => (
                                <div key={message._id} className="contact focusable" >
                                    <img src={AccountImage} className="contact-user"  />
                                    <p>{message.recipient.firstName} {message.recipient.lastName}</p>
                                    <p>{message.text}</p>
                                </div>
                            ))}
                        </div>
                    </div> 
                    :   
                    <div className="col-sm-12">
                        <p>Sorry, you need a valid login to see content</p>
                    </div>}
            </div>
        </>
    );
}

export default MessagesList;
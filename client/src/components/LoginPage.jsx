import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function handleValue(e) {
        switch(e.target.name) {
            case "username":
                setUsername(e.target.value);
                break;
            case "password": 
                setPassword(e.target.value);
                break;
        }
    }

    function submitLogin() {
        if (username.length > 0 && password.length > 0) {
            fetch("http://localhost:9000/api/login", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username: username, password: password })
            })
            .then((res) => res.json())
            .then((res) => {
                if (res._id) {
                    sessionStorage.setItem("id", res._id);
                    sessionStorage.setItem("user", res.username);
                    sessionStorage.setItem("name", res.firstName + " " + res.lastName);
                } 
            })
            .then(() => {
                if (sessionStorage.getItem("user") !== null) {
                    navigate("/messages-list");
                } else {
                    setError("Incorrect details. Try again...");
                }
            })
            .catch((err) => {
                console.log(err);
                setUsername("");
                setPassword("");
            });
        }
    }

    return (
        <>
            <div className="content">
                <h1>Welcome to Whatsapp</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input className="form-control" type="text" placeholder="Please enter your username"
                            name="username" id="username" required={true} onChange={handleValue} /> 
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input className="form-control" type="password" placeholder="Please enter your password"
                            name="password" id="password" required={true} onChange={handleValue} />
                    </div>
                    <br />
                    <button className="btn btn-primary" type="button" onClick={submitLogin}>Login</button>
                </form>
                <small className="error">{error}</small>
                <br />
                <br />
                <p>Don't have an account?</p>
                <a href="/sign-up">Sign up here</a>
            </div>
        </>
    );
}

export default LoginPage;
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUpPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleValue(e) {
        switch(e.target.name) {
            case "first-name":
                setFirstName(e.target.value);
                break;
            case "last-name":
                setLastName(e.target.value);
                break;
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "confirm-password":
                setConfirmPassword(e.target.value);
                break;
        }
    }

    function handleSubmit() {
        if (confirmPassword === password && confirmPassword.length > 0 && password.length > 0) {
            const data = { firstName: firstName, lastName: lastName, username: username, password: password };

            fetch("http://localhost:9000/api/sign-up", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error(res.status.text);
                }
            });
        }
    }

    return (
        <>
            <div className="content">
                <h1>Sign up to start chatting</h1>
                <form action="/">
                    <div className="form-group">
                        <label htmlFor="first-name">First name:</label>
                        <input className="form-control" type="text" placeholder="Please enter your first name"
                            name="first-name" id="first-name" required={true} onChange={handleValue} /> 
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="last-name">Last name:</label>
                        <input className="form-control" type="text" placeholder="Please enter your last name"
                            name="last-name" id="last-name" onChange={handleValue} />
                        <small>Optional</small>
                    </div>
                    <br />
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
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm password:</label>
                        <input className="form-control" type="password" placeholder="Please re-enter your password"
                            name="confirm-password" id="confirm-password"  required={true} onChange={handleValue} />
                    </div>
                    <br />
                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit</button>
                </form>
                <br />
                <Link to="/">
                    <button className="btn btn-secondary">Back to login page</button>
                </Link>
            </div>
        </>
      );
}

export default SignUpPage;
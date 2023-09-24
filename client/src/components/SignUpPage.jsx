import { Link } from "react-router-dom";

function SignUpPage() {
    return (
        <>
            <div className="content">
                <h1>Sign up to start chatting</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="first-name">First name:</label>
                        <input className="form-control" type="text" placeholder="Please enter your first name"
                            name="first-name" required={true} /> 
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="last-name">Last name:</label>
                        <input className="form-control" type="text" placeholder="Please enter your last name"
                            name="last-name" />
                        <small>Optional</small>
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input className="form-control" type="text" placeholder="Please enter your username"
                            name="username" required={true} /> 
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input className="form-control" type="password" placeholder="Please enter your password"
                            name="password" required={true} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm password:</label>
                        <input className="form-control" type="password" placeholder="Please re-enter your password"
                            name="password" required={true} />
                    </div>
                    <br />
                    <button className="btn btn-primary" type="submit">Submit</button>
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
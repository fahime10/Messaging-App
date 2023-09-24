function LoginPage() {
  return (
    <>
        <div className="content">
            <h1>Welcome to Whatsapp</h1>
            <form>
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
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <br />
            <p>Don't have an account?</p>
            <a href="/sign-up">Sign up here</a>
        </div>
    </>
  );
}

export default LoginPage;
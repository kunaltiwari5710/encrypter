import React from "react";

const Login = () => {



  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name='username'
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name='password'
            required
          />
        </div>
        <button type="submit" className='login'>Login</button>
      </form>
    </div>
  );
};

export default Login;
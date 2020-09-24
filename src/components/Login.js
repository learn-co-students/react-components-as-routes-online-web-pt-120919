import React from "react"

const Login = () => {
    return (
      <div>
        <form>
            <div>
              <br/>
              <input type="text" name="username" placeholder="Username"/>
              <label htmlFor="username">UserName</label>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password"/>
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Login"/>      
        </form>
      </div>
    )
}

export default Login
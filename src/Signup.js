import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="username">Sign Up</label>
            <input type="text" name="username" placeholder="Username" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
            <input type="submit" value="Sign Up" />
        </form>
      </div>
    )
  }
}

export default Signup;

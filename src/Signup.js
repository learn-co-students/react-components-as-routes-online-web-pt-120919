import React from 'react'

export default class Signup extends React.Component {
  render() {
    return (
      <form>
        <h1>Sign Up!</h1>
          <div>
            <label htmlFor="username">Type in a username:</label>
            <input type="text" name="username" placeholder="Username"/>
          </div>
          <div>
            <label htmlFor="username">Type in a password:</label>
            <input type="password" name="password" placeholder="Password"/>
          </div>
        <input type="submit" value="Sign Up" />
      </form>
    )
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import NavBar from "./components/NavBar"

// const link = {
//   width: '100px',
//   padding: '12px',
//   margin: '0 6px 6px',
//   background: 'blue',
//   textDecoration: 'none',
//   color: 'white',
// }

// const NavBar = () => (
//   <div>
//     <NavLink to="/" exact style={link} activeStyle={{backgound: "darkblue"}}>Home</NavLink>
//     <NavLink to="/about" exact style={link} activeStyle={{backgound: "darkblue"}}>About</NavLink>
//     <NavLink to="/login" exact style={link} activeStyle={{backgound: "darkblue"}}>Login</NavLink>
//   </div>
// )

// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   )
// }

// const Login = () => {
//   return (
//     <div>
//       <form>
//           <div>
//             <input type="text" name="username" placeholder="Username"/>
//             <label htmlFor="username">UserName</label>
//           </div>
//           <div>
//             <input type="password" name="password" placeholder="Password"/>
//             <label htmlFor="password">Password</label>
//           </div>
//           <input type="submit" value="Login"/>      
//       </form>
//     </div>
//   )
// }

ReactDOM.render(
  <Router>
    <div>
        <NavBar /> 
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/login" component={Login}/>
    </div>
  </Router>,
  document.getElementById('root')
);

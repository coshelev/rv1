import logo from './logo.svg';
import './App.css';

import Button from '@mui/material/Button';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home(){
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
	      <p>Hello from App.js</p>
        <Button variant="contained"
          onClick={() => {alert('clicked');}}>Hello World
        </Button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function About(){
  return(
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Edit <code>src/App.js</code> and save to reload.</p>
      <p>About from App.js</p>
      <Button variant="contained">Hello World!!</Button>
      </header>
    </div>
  );
}

import logo from './logo.svg';
import './App.css';

import Button from '@mui/material/Button';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import React, { useState } from 'react';
import FileInput from './FileInput';

const myvar1 = atom({key:'myvar1key', default: "default for myvar1"});

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
      <Button variant="contained" onClick={() => console.log("Hello")}>Hello World!!!</Button>
      <MyBox value="Data transfered by props" va2="Take two"/>
      <MyClass value="Hello" va2="Take two"/>
      <MyRecoilBox1/>
      <MyRecoilBox2/>
      <FileInput/>
      </header>
    </div>
  );
}

function MyBox(props){
  const [count, setCount] = useState(0);
  return(
    <div className={props.va2}>
      <p>Вы нажали {count} раз</p>
      <input type="button" value={props.value} onClick={() => setCount(count + 1)}/>
    </div>
  );
}

class MyClass extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date(), myvar: "myvarvalue"};
  }
  render(){
    return(<div>
            <input type="button" value={this.state.date.toLocaleTimeString()}
            onClick={() => this.setState({myvar:"new value for state myvar"})}
            />
            <input type="button" value={this.state.myvar}/>
          </div>
    ) 
  }
}

function MyRecoilBox1(props){
  return(
    <div>
      <input type="button" value="RecoilBox1"
      onClick={
                () => {const myvar1 = atom({key:'myvar2key', default: "default for myvar1"})}
              }
      />
    </div>
  )
}

function MyRecoilBox2(props){
  return(
    <div>
      <input type="button" value = {useRecoilState(myvar1)}
      />
    </div>
  )
}

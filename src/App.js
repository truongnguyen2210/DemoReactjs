import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todoitem from './Components/Todoitem';
let todos = [
    "Learn English",
    "Learn JavaScript",
    "Learn English",
    "Learn Reactjs"
];

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p > {
            todos.map((item, index) => < Todoitem key = { index }
                title = { item }
                />)
            }
            Edit < code > src / App.js < /code> and save to reload. <
            /p> <
            a
            className = "App-link"
            href = "https://reactjs.org"
            target = "_blank"
            rel = "noopener noreferrer" >

            <
            /a> <
            /header> <
            /div>
        );
    }



    export default App;
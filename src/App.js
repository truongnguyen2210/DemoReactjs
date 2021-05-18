import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todoitem from './Components/Todoitem';
let todos = [
    { title: "Learn English", none: true },
    { title: "Learn JavaScript", none: false },
    { title: "Learn English", none: true },
    { title: "Learn Reactjs", none: false }
];

function App() {
    return ( <
            div className = "App" >
            <
            header className = "App-header" >
            <
            h3 className = "Title-header" > Todo List < /h3> <
            img src = { logo }
            className = "App-logo"
            alt = "logo" / > {
                todos.length > 0 && todos.map((item, index) => < Todoitem key = { index }
                    item = { item }
                    />)} { todos.length == 0 && 'Nothing here??' } <
                    a className = "App-link"
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
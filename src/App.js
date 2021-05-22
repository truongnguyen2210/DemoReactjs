import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todoitem from './Components/Todoitem';
class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: [
                { title: "Learn English", none: true },
                { title: "Learn JavaScript", none: false },
                { title: "Learn English", none: true },
                { title: "Learn Reactjs", none: false }
            ]
        };
    }
    onClickItem(item) {
        return (event) => {
            console.log("on clicked", item);
            const none = item.none;
            const { todos } = this.state;
            const index = todos.indexOf(item);
            this.setState({
                todos: [
                    ...todos.slice(0, index),
                    {
                        ...item,
                        none: !none
                    },
                    ...todos.slice(index + 1)
                ]
            });
        }
    }
    render() {
            const { item, onClick } = this.props;
            return ( <
                div className = "App" >
                <
                header className = "App-header" >
                <
                h3 className = "Title-header" > Todo List < /h3> <
                img src = { logo }
                className = "App-logo"
                alt = "logo" / > {
                    this.state.todos.length > 0 && this.state.todos.map((item, index) => < Todoitem key = { index }
                        item = { item }
                        onClick = { this.onClickItem(item) }
                        />)} { this.state.todos.length == 0 && 'Nothing here??' } <
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
            }

            export default App;
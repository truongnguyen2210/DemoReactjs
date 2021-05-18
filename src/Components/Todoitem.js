import React, { Component } from 'react';
import './Todoitem.css';
class Todoitem extends Component {
    render() {
        const { item } = this.props;
        let className = "Todoitem";
        if (item.none) {
            className += " Todoitem-None"
        }
        return ( <
            div className = { className } >
            <
            p > { this.props.item.title } < /p> <
            /div>
        );
    }
}
export default Todoitem;
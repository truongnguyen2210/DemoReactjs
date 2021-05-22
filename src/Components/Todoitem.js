import React, { Component } from 'react';
import classNames from 'classnames';
import './Todoitem.css';
class Todoitem extends Component {
    render() {
        const { item, onClick } = this.props;
        return ( <
            div onClick = { onClick }
            className = {
                classNames('Todoitem', {
                    TodoitemNone: item.none == true,
                })
            } >
            <
            p > { this.props.item.title } < /p> <
            /div>
        );
    }
}
export default Todoitem;
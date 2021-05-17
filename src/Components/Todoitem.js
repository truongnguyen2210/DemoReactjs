import React, { Component } from 'react';
class Todoitem extends Component {
    render() {
        return ( <
            div className = "Todoitem" >
            <
            p > { this.props.title } < /p> <
            /div>
        );
    }
}
export default Todoitem;
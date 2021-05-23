import React, { Component } from 'react';
import classNames from 'classnames';
import './Todoitem.css';
import check from '../images/check.png';
import checkNone from '../images/checkNone.png';
class Todoitem extends Component {
    render() {
        const { item, onClick } = this.props;
        let urlImg = check;
        if (item.none == true)
            urlImg = checkNone;
        return ( <
            div className = "Todo" >
            <
            div onClick = { onClick }
            className = {
                classNames('Todoitem', {
                    TodoitemNone: item.none == true,
                })
            } >
            <
            img src = { urlImg }
            width = "30px"
            alt = "trang thai" / >
            <
            p > { this.props.item.title } < /p> <
            /div> <
            /div>
        );
    }
}
export default Todoitem;
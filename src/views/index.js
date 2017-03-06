
import React from 'react'
import List from '../assets/js/list.js';
import Item from '../components/list.js';

export default class myIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render() {
        return (
            <div className="home_info">
                <nav>
                    <ul className="clearfix">
                        <li><a href="javascript:;">影院热映</a></li>
                        <li><a href="javascript:;">跳蚤市场</a></li>
                        <li><a href="javascript:;">美好的事情</a></li>
                        <li><a href="javascript:;">使用豆瓣App</a></li>
                    </ul>
                </nav>
                <Item list={List.info} />
            </div>
        )
    }
}

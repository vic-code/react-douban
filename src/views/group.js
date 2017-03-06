
import React from 'react'
import group from '../assets/js/group.js';


export default class Group extends React.Component {
    static defaultProps ={
        list:group.info
    };

    constructor(props) {
        super(props)
        this.state = {
          
        }
    }

    render() {
        return (
           <div className="group">
            <ul>
            {
                this.props.list.map((item, i)=>
                    <li key={i} className="group_item">
                        <h3>{item.title}</h3>
                        <ul className="group_list">
                            {
                                item.arr.map((d ,n)=>
                                <li className="ui-bottom-line" key={n}>
                                    <a href="javascript:;">
                                    <div className="ui-flex-align">
                                        <div className="ui-flex-left group_list_l">
                                            <img src={d.url}/>
                                        </div>
                                    <div className="ui-flex-1 group_list_m">
                                        {d.name}
                                    </div>
                                    <div className="group_list_r">{d.num}</div>
                                    </div>
                                    <p>{d.des}</p>
                                </a>
                                </li>
                                )
                            }
                        </ul>
                        <div className="group_more ui-bottom-line">更多相关小组</div>
                    </li>
                    )
            }
            </ul>
        </div>
        )
    }
}

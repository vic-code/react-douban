
import React from 'react'


export default class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    render() {
        return (
            <div className="info">
                <ul>
                {
                   this.props.list.map((item, i)=>
                         <li key={i} className="ui-bottom-line">
                                <a href="javascript:;">
                                    <div className="info_head ui-flex-align">
                                        <div className="ui-flex-left info_head_l">
                                        <img src={item.author.avatar}/>
                                    </div>
                                    <div className="ui-flex-1 info_head_m">{item.author.name}</div>
                                        <div className="info_head_r">
                                        <span>{item.column.name}</span>
                                    </div>
                                </div>
                                <div className="info_main ui-flex">
                                    <div className="ui-flex-1 info_main_l">
                                        <h3 className="line-3">{item.title}</h3>
                                    </div>
                                    <div className="info_main_r">
                                        <img src={item.cover_url}/>
                                    </div>
                                </div>
                                <div className="info_foot">
                                    <p className="line-6">{item.desc}</p>
                                    <div className="info_feed">
                                        <i className="likers_num"></i>
                                        <span>{item.likers_count}</span>
                                        <i className="comment_num"></i>
                                        <span>{item.comment_count}</span>
                                    </div>
                                </div>
                            </a>
                        </li>            
                    ) 
                 } 
                 </ul>
            </div>
        )
    }
}

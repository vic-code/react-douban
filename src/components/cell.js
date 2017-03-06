
import React from 'react'


export default class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    render() {
        return (
            <div className="movie">
                <ul>
                {
                   this.props.list.map((item, i)=>
                         <li key={i} className="movie_item">
                                <div className="movie_head ui-flex-align">
                    				<div className="ui-flex-1 movie_head_l">{item.title}</div>
                    				<div className="ui-flex-right movie_head_r">更多</div>
                				</div>
                				<div className="scroll_pic">
                    			<ul>
                    				{
                    					item.arr.map((d ,n)=>
                    						<li key={n}>
                            					<a href="javascript:;">
                                					<div className="pic">
                                    					<img src={d.cover.url}/>
                                					</div>
                                					<h3>{d.title}</h3>
                            					</a>
                        					</li>

                    					)
                    				}               
                    			</ul>
                			</div>
                        </li>            
                    ) 
                 } 
                 </ul>
            </div>
        )
    }
}

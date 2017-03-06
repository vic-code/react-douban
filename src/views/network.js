
import React from 'react'


export default class Network extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }
    render() {
        return (
            <div className="network">
                <div className="weui_cells weui_cells_form">
                    <div className="weui_cell">
                        <div className="weui_cell_hd"><label className="weui_label">用户名</label></div>
                        <div className="weui_cell_bd weui_cell_primary">
                        <input className="weui_input" type="text"  placeholder="请输入用户名" />
                    </div>
                </div>
                <div className="weui_cell">
                    <div className="weui_cell_hd"><label className="weui_label">密码</label></div>
                    <div className="weui_cell_bd weui_cell_primary">
                        <input className="weui_input" type="password"  placeholder="请输入密码" />
                    </div>
                </div>
                <div className="weui_cell">
                    <div className="weui_cell_hd"><label className="weui_label">验证码</label></div>
                    <div className="weui_cell_bd weui_cell_primary">
                    <input className="weui_input" type="password"  placeholder="请输入验证码" />
                    </div>
                </div>
            </div>
            <div className="weui_btn_area">
            <a className="weui_btn weui_btn_primary" href="javascript:" id="showTooltips">确定</a>
        </div>
    </div>
        )
    }
}

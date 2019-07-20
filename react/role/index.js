import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Button } from 'choerodon-ui/pro';
import './r.less'
import pic9 from './img/pic9.png'
import pic10 from './img/pic10.jpg'
import Drop3 from './drop3'
import Table1 from './table1'
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";

export default class index extends Component {
    render() {
        return (
            <div className='r3'>
                <div className='c_top' style={{ backgroundColor: 'white' }}>
                    <img src={pic9} style={{ marginTop: '10px' }}></img>
                    <Drop3 />
                    <Link to="/wyq/index/insert">
                        <div className='sty1'><Icon type="queue" />&nbsp;创建角色</div>
                    </Link>
                    <div className='sty2'><Icon type="filter_none" />&nbsp;基于所选角色创建</div>
                    <div className='sty3'><Icon type="replay" />&nbsp;刷新</div>
                </div>
                <div className='c_top2'><img src={pic10}></img></div>
                <Table1 />
            </div>
        )
    }
}

import React, { Component } from 'react'
import './r.less'
import { Menu, Dropdown, Icon, Button } from 'choerodon-ui/pro';
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";

const menu = (
    <Menu>
        <Menu.Item key="0">
            <Link to="/wyq/index/insert">
                <a href="">基于该角色创建</a>
            </Link>
        </Menu.Item>
        <Menu.Item key="1">
            <Link to="/wyq/index/update">
                <a href="">修改</a>
            </Link>
        </Menu.Item>
        <Menu.Item key="2">停用</Menu.Item>
    </Menu>
);

export default class drop3 extends Component {
    render() {
        return (
            <div>
                <div className='drop3' style={{ marginTop: '0px' }}>
                    <Dropdown overlay={menu} trigger={['click']} >
                        <a className="c7n-dropdown-link" href="#" style={{ fontSize: 14, color: '#3f51b5', marginLeft: '10px' }}>
                            <Icon type="more_vert" style={{ marginTop: '-3px', marginLeft: '10px' }}/>
                        </a>
                    </Dropdown>
                    <Dropdown overlay={menu} trigger="click">
                        {/* <Button shape="circle" icon="more_vert" style={{ fontSize: 16, color: '#fff',marginTop:'-3px' }} /> */}
                    </Dropdown>
                </div>
            </div>
        )
    }
}

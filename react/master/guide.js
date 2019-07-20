import React, { Component } from 'react'
import { Menu, Icon, Button } from 'choerodon-ui';
import RouteIndex from '../RouteIndex'
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";

const SubMenu = Menu.SubMenu;

export default class guide extends Component {

    state = {
        collapsed: false,
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div>
                <div style={{ width: 256 }}>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16, marginTop: '12px' }}>
                        <Icon type="multistage_combo_box" />
                        {/* <Icon type={this.state.collapsed ? 'folder_open' : 'folder'} /> */}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="3">
                            <Link to="/wyq/index">
                                <Icon type="account_box" />
                                <span>角色管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="1">
                            <Link to="/wyq/r1">
                                <Icon type="domain" />
                                <span>组织类型</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/wyq/r2">
                                <Icon type="device_hub" />
                                <span>项目类型</span>
                            </Link>
                        </Menu.Item>
                    </Menu>
                    {/* <RouteIndex /> */}
                </div>
            </div>
        )
    }
}

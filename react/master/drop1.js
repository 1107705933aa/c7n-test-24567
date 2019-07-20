import React, { Component } from 'react'
import './one.less'
import { Menu, Dropdown, Icon, Button } from 'choerodon-ui/pro';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="">运营组织</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="">上海汉得信息技术股份有限公司</a>
        </Menu.Item>
        <Menu.Item key="2">
            <a href="">Laraine的测试组织</a>
        </Menu.Item>
        <Menu.Item key="3">
            <a href="">猪齿鱼</a>
        </Menu.Item>
        <Menu.Item key="4">
            <a href="">重新测试组织</a>
        </Menu.Item>
        <Menu.Item key="5">
            <a href="">Choerdon猪齿鱼产品运营</a>
        </Menu.Item>
        <Menu.Item key="6">
            <a href="">演示测试组织</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="7">敏捷Agile测试应用</Menu.Item>
    </Menu>
);

export default class drop1 extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <Dropdown overlay={menu} trigger={['click']} >
                        <a className="c7n-dropdown-link" href="#" style={{ fontSize: 14, color: '#fff', marginLeft: '10px' }}>
                            &nbsp;&nbsp;
                             请选择组织
                   <Icon type="arrow_drop_down" style={{ marginTop: '-3px', marginLeft: '10px' }} />
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

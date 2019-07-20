import React, { Component } from 'react'
import './one.less'
import pic4 from './img/pic4.jpg'
import { Menu, Dropdown, Icon, Button } from 'choerodon-ui/pro';
import store2 from './Store2'
import { axios, store } from '@choerodon/boot';

export default class drop2 extends Component {
    componentDidMount() {
        axios.get("http://api.staging.saas.hand-china.com/iam/v1/users/self")
        .then(res=>{
            // console.log("车功能");
            // console.log(res.realName);
            // console.log(res.email)
          store2.datak={
              name:res.realName,
              email:res.email
          }
            store2.setData()
            // console.log(res);
        })
    }

    loadData = () => {
        store2.loadData();
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="">
                        <img style={{ width: '30px', height: '30px', borderRadius: '25px 25px' }} src={pic4}></img>
                        &nbsp;&nbsp;&nbsp;
                        {/* 管理员 */}
                        <span style={{color:'#757575'}}>{store2.datak.name}{store2.datak.email}</span>
                        </a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href=""><Icon type="unlock" style={{color:'#595959'}} />修改密码</a>
                </Menu.Item>
                <Menu.Item key="2">
                    <a href=""><Icon type="sync_user" style={{color:'#595959'}} />个人信息</a>
                </Menu.Item>
                <Menu.Item key="3">
                    <a href=""><Icon type="verified_user" style={{color:'#595959'}} />权限信息</a>
                </Menu.Item>
                <Menu.Item key="4">
                    <a href=""><Icon type="token" style={{color:'#595959'}} />授权管理</a>
                </Menu.Item>
                <Menu.Item key="5">
                    <a href=""><Icon type="contact_phone" style={{color:'#595959'}} />消息通知</a>
                </Menu.Item>
                <Menu.Item key="6">
                    <a href=""><Icon type="brightness_high" style={{color:'#595959'}} />平台管理</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="7"><Icon type="recover" style={{color:'#595959'}} />退出登录</Menu.Item>
            </Menu>
        );
        
        return (
            <div>
                <div>
                    <Dropdown overlay={menu} trigger={['click']} >
                        <a className="c7n-dropdown-link" href="#" style={{ fontSize: 14, color: '#fff', marginLeft: '10px' }}>
                            <img style={{ width: '30px', height: '30px', borderRadius: '25px 25px' }} src={pic4}></img>
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

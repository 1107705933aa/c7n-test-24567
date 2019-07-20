import React, { Component } from 'react';
import './one.less'
import Drop1 from './drop1'
import Drop2 from './drop2'
import Index from '../home/index'
import Guide from './guide'

import { Menu, Dropdown, Icon, Button } from 'choerodon-ui/pro';
import pic2 from './img/pic2.png'
import pic3 from './img/pic3.png'

export default class Master extends Component {

  render() {
    const { AutoRouter } = this.props;
    return (
      <div>
        {/* -----------头部菜单----------- */}
        <div className='top' style={{position:"fixed",zIndex:'99999'}}>
          <div className='top_l'>
            <img src={pic3}></img>
            <img src={pic2}></img>
          </div>
          <div className='top_r'>
            <div className='menu1'><Icon type="accessibility" style={{ fontSize: 18, color: '#fff', marginTop: '-3px' }} />&nbsp;&nbsp;协作链接</div>
            <div className='menu1'><Icon type="versionline" style={{ fontSize: 18, color: '#fff', marginTop: '-3px' }} />&nbsp;&nbsp;项目</div>
            <div className='menu1'><Icon type="business_center" style={{ fontSize: 18, color: '#fff', marginTop: '-3px' }} />&nbsp;&nbsp;应用市场</div>
            <div className='menu1'><Icon type="book" style={{ fontSize: 18, color: '#fff', marginTop: '-3px' }} />&nbsp;&nbsp;知识</div>
            <div className='menu2' style={{ marginLeft: '190px', borderLeft: '1px solid #7e8cda', borderRight: '1px solid #7e8cda' }}>
              <Drop1 />
            </div>
            <div className='menu1'><Icon type="brightness_high" style={{ fontSize: 18, color: '#fff', marginTop: '-3px' }} />&nbsp;&nbsp;管理中心</div>
            <div className='menu3'>
              <Drop2 />
            </div>
            <div className='menu4'><Icon type="add_alert" style={{ fontSize: 22, color: '#fff', marginLeft: '9px', marginTop: '8px' }} /></div>
            <div className='menu5'><Icon type="contact_support" style={{ fontSize: 22, color: '#fff', marginLeft: '9px', marginTop: '8px' }} /></div>

          </div>
        </div>


        {/* ------------左侧菜单和内容组件------------ */}
        <div className='content' style={{position:"fixed",zIndex:'99999',marginTop:'50px',backgroundColor:'#fafafa'}}>
            <div className='content_l'>
              <Guide />
            </div>
            <div className='content_r'></div>
        </div>


        <AutoRouter />
      </div>
    );
  }
}
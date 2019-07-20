import React, { Component } from 'react'
import './r.less'
import { Select, Button, Row, Col } from 'choerodon-ui';
import store from './Store'
import { observer } from 'mobx-react';

const { Option } = Select;
const data = store.data;

@observer
export default class drop3 extends Component {

    handleChange =(value)=>{
        if(value==='site') {
            store.setLevelvalue ('site');
            console.log('0000000000');
            store.loadData();
        }else if(value==='organization'){
            store.setLevelvalue  ('organization');
            console.log('0000000000'+store.setLevelvalue)
            store.loadData();
        }else {
            store.setLevelvalue ('project');
            console.log('0000000000'+store.setLevelvalue)
            store.loadData();
        }
    }
   
    render() {
        return (
            <div className='drop33'>
                <li style={{ paddingTop: '13px', fontSize: '13px', color: '#3f51b5' }}>
                    <Select defaultValue='site' onChange={this.handleChange} dropdownStyle={{ marginTop: '77px', width: '100px', color:'#3f51b5'}} style={{color:'#3f51b5'}}>
                        <Option value="site">全局</Option>
                        <Option value="organization">组织</Option>
                        <Option value="ha">项目</Option>
                    </Select>
                </li>
            </div>
        )
    }
}

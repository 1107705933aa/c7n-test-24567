import React, { Component } from 'react'
import { Input, Menu, Dropdown, Icon, DataSet, Button, Row, Col, Select, Radio } from 'choerodon-ui';
import './r.less'
import pic11 from './img/pic11.png'
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";
import Table3 from './table3'

const Option = Select.Option;

const children = [];
for (let i = 10; i < 11; i++) {
    children.push(<Option key={i.toString(11) + i}>{'全局'}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export default class update extends Component {
    state = {
        size: 'default',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    }

    render() {
        const { size } = this.state;
        return (
            <div className='r3' style={{ borderBottom: '1px solid #d3d3d3' }}>
                <div className='c_top' style={{ backgroundColor: 'white' }}>
                    <Link to="/wyq/index">
                        <div className='back'><Icon type="arrow_back" style={{ fontSize: 22 }} /></div>
                    </Link>
                    <img src={pic11} style={{ marginTop: '-61px', marginLeft: '60px' }}></img>
                </div>
                <form>
                    <div className='form1'>
                        <Row gutter={8}>
                            <Col span={12}>
                                <Input placeholder="角色编码 *" maxLength={50} required label="Basic" copy style={{ width: '270px' }} />
                            </Col>
                            <Col span={12}>
                                <Input placeholder="角色名称 *" maxLength={50} required label="Basic" copy style={{ width: '270px' }} />
                            </Col>
                        </Row>

                        <Select
                            mode="multiple"
                            size={size}
                            placeholder="角色标签*"
                            defaultValue={[]}
                            onChange={handleChange}
                            style={{ width: '99%', border: '1px solid #cccccc', borderRadius: '5px 5px', marginTop: '45px' }}
                        >
                            {children}
                        </Select>
                        <div style={{ marginTop: '30px', marginLeft: '0px' }}>
                            <Button funcType="raised" style={{ backgroundColor: '#3f51b5', color: 'white' }}>保存</Button>
                            &nbsp;&nbsp;&nbsp;
                    <Button funcType="raised" style={{ backgroundColor: 'white', color: '#3f51b5' }}>取消</Button>
                        </div>
                    </div>
                </form>
                <div>
                    <Table3 />
                </div>
            </div>
        )
    }
}

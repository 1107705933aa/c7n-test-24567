import React, { Component } from 'react'
import { Input, Menu, Dropdown, Icon, DataSet, Button, Row, Col, Select, Radio } from 'choerodon-ui';
import './r.less'
import pic10 from './img/pic10.png'
import { BrowserRouter as Router, Route, Link, Switch, } from "react-router-dom";
import Table2 from './table2'
import store3 from './Store3'

const Option = Select.Option;

const children = [];
for (let i = 10; i < 11; i++) {
    // children.push(<Option key={i.toString(11) + i}>{i.toString(11) + i}</Option>);
    children.push(<Option key={i.toString(11) + i}>{'全局'}</Option>);
}

function handleChange(value) {
    console.log(`Selected: ${value}`);
}

export default class insert extends Component {

    state = {
        size: 'default',
        inputValue: '', //用于存放input的值
        list: []        //存放列表的值
    };

    handleChange(e) {
        //同步setState
        this.setState({
            inputValue: e.target.value
        });
    }

    //提交添加UI列表
    handleSubmit() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => { //回调函数
            console.log('ooooooo'+this.ul.querySelectorAll('li').length);
        });
        // 将list的值在页面展示出来,可以通过map方法，循环li。
        this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>
        })
    }

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
                    <img src={pic10} style={{ marginTop: '-55px', marginLeft: '60px' }}></img>
                </div>
                <form>
                    <div className='form1'>
                        <Row gutter={8}>
                            <Col span={12}>
                                <Input onChange={this.handleChange} value={this.state.inputvalue} placeholder="角色编码 *" maxLength={50} required label="Basic" copy style={{ width: '270px' }} />
                            </Col>
                            <Col span={12}>
                                <Input onChange={this.handleChange} value={this.state.inputvalue} placeholder="角色名称 *" maxLength={50} required label="Basic" copy style={{ width: '270px' }} />
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
                            <Button onClick={this.handleSubmit} funcType="raised" style={{ backgroundColor: '#3f51b5', color: 'white' }}>创建</Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button funcType="raised" style={{ backgroundColor: 'white', color: '#3f51b5' }}>取消</Button>
                        </div>
                    </div>
                </form>
                <div>
                    <Table2 />
                </div>
            </div>
        )
    }
}
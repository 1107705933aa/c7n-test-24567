import React, { Component } from 'react'
import { Table, Icon, Switch,Button, Radio, Form, Divider } from 'choerodon-ui';
import Drop4 from './drop4'
import './table1.less'
import store3 from './Store3'
import { observer } from 'mobx-react';

const columns = [{
    title: '菜单',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
        <span>
        <Icon type={record.icon} />{text}
        </span>
    ),
  }, {
    title: '页面入口',
    dataIndex: 'code',
    key: 'age',
    width: '12%',
  }, {
    title: '',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
    render: () => {
        <Icon type="predefine" />
    },
  }];
  
  const data = [{
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [{
      key: 11,
      name: 'John Brown',
      age: 42,
      address: 'New York No. 2 Lake Park',
    }, {
      key: 12,
      name: 'John Brown jr.',
      age: 30,
      address: 'New York No. 3 Lake Park',
      children: [{
        key: 121,
        name: 'Jimmy Brown',
        age: 16,
        address: 'New York No. 3 Lake Park',
      }],
    }, {
      key: 13,
      name: 'Jim Green sr.',
      age: 72,
      address: 'London No. 1 Lake Park',
      children: [{
        key: 131,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 2 Lake Park',
        children: [{
          key: 1311,
          name: 'Jim Green jr.',
          age: 25,
          address: 'London No. 3 Lake Park',
        }, {
          key: 1312,
          name: 'Jimmy Green sr.',
          age: 18,
          address: 'London No. 4 Lake Park',
        }],
      }],
    }],
  }, {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];
  
  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };  

@observer
export default class table2 extends Component {
    componentDidMount() {
        store3.loadData();
    }

    render() {
        return (
            <div>
                {
                    store3&&store3.getData
                    ?<Table columns={columns} rowSelection={rowSelection} dataSource={store3.getData} />
                    : '加载中'
                }
               {/* <Table columns={columns} rowSelection={rowSelection} dataSource={store3.getData} /> */}
            </div>
        )
    }
}

/* eslint max-len: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    if (i % 2 === 0) {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i,
        expandable: true,
        expand: [ {
          fieldA: 'test1',
          fieldB: (i + 1) * 99,
          fieldC: (i + 1) * Math.random() * 100,
          fieldD: '123eedd' + i
        }, {
          fieldA: 'test2',
          fieldB: i * 99,
          fieldC: i * Math.random() * 100,
          fieldD: '123eedd' + i
        } ]
      });
    } else {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i
      });
    }
  }
}
addProducts(5);

class BSTable extends React.Component {
  render() {
    if (this.props.data) { // prevent from data error
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='fieldA' isKey={ true }>Field A</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldB'>Field B</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldC'>Field C</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldD'>Field D</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}

export default class ExpandRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: {}
    };
  }
  render() {
    const me = this;
    const options = {
      onRowClick: function(row) {
        me.setState({
          rowData: row
        });
      }
    };
    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: 'rgb(215, 221, 224)',
      color: 'rgb(255, 255, 255)',
      hideSelectColumn: true
    };
    return (
      <BootstrapTable data={ products }
        selectRow={ selectRow }
        options={ options }
        enableExpandRow={ true }
        expandComponent={ <BSTable data={ me.state.rowData.expand } /> }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

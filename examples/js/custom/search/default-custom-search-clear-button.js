/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, ClearSearchButton } from 'react-bootstrap-table';


const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i
    });
  }
}

addProducts(5);

export default class DefaultCustomClearButtonTable extends React.Component {

  createCustomClearButton = () => {
    return (
      <ClearSearchButton
        btnText='MyClear'
        btnContextual='btn-warning'
        btnClass='my-custom-class'
        wrapperClass='my-span-wrapper-class'/>
    );
  }

  render() {
    const options = {
      clearSearch: true,
      clearSearchBtn: this.createCustomClearButton
    };
    return (
      <BootstrapTable data={ products } options={ options } search>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

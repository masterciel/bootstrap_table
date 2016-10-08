/* eslint max-len: 0 */
/* eslint no-unused-vars: 0 */
/* eslint no-alert: 0 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn, ShowSelectedOnlyButton } from 'react-bootstrap-table';


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

export default class DefaultCustomShowSelectButtonTable extends React.Component {

  handleShowSelectButtonClick = (onClick) => {
    // Custom your onClick event here,
    // it's not necessary to implement this function if you have no any process before onClick
    console.log('This is my custom function for ShowSelectedOnlyButton click event');
    onClick();
  }

  createCustomShowSelectButton = (onClick, showSelected) => {
    console.log(showSelected);
    return (
      <ShowSelectedOnlyButton
        showAllText='custom all'
        showOnlySelectText='custom show only select'
        btnContextual='btn-info'
        btnClass='my-custom-class'
        onClick={ e => this.handleShowSelectButtonClick(onClick) }/>
    );
  }

  render() {
    const selectRow = {
      mode: 'radio',
      showOnlySelected: true
    };
    const options = {
      showSelectedOnlyBtn: this.createCustomShowSelectButton
    };
    return (
      <BootstrapTable data={ products } options={ options } selectRow={ selectRow }>
        <TableHeaderColumn dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

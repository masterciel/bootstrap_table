import React, { Component, PropTypes } from 'react';

const clearBtnDefaultClass = 'react-bs-table-search-clear-btn';

class ClearSearchButton extends Component {

  render() {
    const {
      btnContextual,
      btnClass,
      onClick,
      btnText
    } = this.props;
    return (
      <button ref='btn'
        className={ `btn ${btnContextual} ${btnClass} ${clearBtnDefaultClass}` }
        type='button'
        onClick={ onClick }>
        { btnText }
      </button>
    );
  }
}

ClearSearchButton.propTypes = {
  btnContextual: PropTypes.string,
  btnClass: PropTypes.string,
  btnText: PropTypes.string,
  onClick: PropTypes.func
};
ClearSearchButton.defaultProps = {
  btnContextual: 'btn-default',
  btnClass: '',
  btnText: 'Clear',
  onClick: undefined
};

export default ClearSearchButton;

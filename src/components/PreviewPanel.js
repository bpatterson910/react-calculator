import React from 'react';
import PropTypes from 'prop-types';


const PreviewPanel = (props) => {
  const { total, next, operation, isShowOperation } = props;
  return (
    <div>
      <span 
        className="break-all bg-gray-100 text-gray-400 text-base w-full h-18 px-2 flex justify-end items-end border-white border-2 border-gray-200 border-b-0 select-all">
       { total ? total : '0' } {next || isShowOperation ? operation : ""}
      </span>
    </div>
  )
};

PreviewPanel.defaultProps = {
  state: null,
  next: null,
  operation: null,
  isShowOperation: false
};

PreviewPanel.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
  isShowOperation: PropTypes.bool
};

export default PreviewPanel;
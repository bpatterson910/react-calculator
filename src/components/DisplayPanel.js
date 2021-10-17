import React from 'react';
import PropTypes from 'prop-types';

const isNull = (prop) => {
  if (!prop) {
    return '0';
  }
  return prop;
};

const current = (total, next) => {
  if (total && next) {
    return isNull(next);
  }
  if (total) {
    return total;
  }
  return isNull(next);
};

const DisplayPanel = (props) => {
  const { total, next } = props;

  return (
    <div>
      <span type="text" className="break-all text-right bg-gray-100 text-black text-5xl w-full h-18 px-2 flex justify-end items-end border-white border-2 border-gray-200 border-t-0 select-all" >
       { current(total, next) }
      </span>
    </div>
  )
};

DisplayPanel.defaultProps = {
  total: null,
  next: null,
};

DisplayPanel.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
};

export default DisplayPanel;
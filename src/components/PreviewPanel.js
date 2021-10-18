import React from 'react';
import PropTypes from 'prop-types';

const limitDigits = (str, mode) => {
  let result = str;

  if (!mode) {
    if (str.length > 16) {
      let index = str.indexOf('e');
      let expString = str.substring(index, str.length);
      result = str.substring(0, 15 - expString.length) + expString;
    }

  }
  return result;
}


const PreviewPanel = (props) => {
  const { state, isShowOperation, prevObj, modeSwitch } = props;
  let result = state.total ? limitDigits(state.total, modeSwitch) : '0';
  result += (state.next || isShowOperation) && state.operation !== null ? state.operation : "";
  if (prevObj.total) {
    result = limitDigits(prevObj.total, modeSwitch) + prevObj.operation;
    result += prevObj.next ? limitDigits(prevObj.next, modeSwitch) + "=" : ""
  }

  return (
    <div>
      <input
        type="text"
        className="bg-gray-100 text-gray-400 text-xs w-full h-18 px-2 flex justify-end items-end border-white border-2 border-gray-200 border-b-0"
        value={result}
        disabled
      />
    </div>
  )
};

PreviewPanel.defaultProps = {
  state: null,
  isShowOperation: false,
  prevObj: null,
  modeSwitch: false
};

PreviewPanel.propTypes = {
  state: PropTypes.object,
  isShowOperation: PropTypes.bool,
  prevObj: PropTypes.object,
  modeSwitch: PropTypes.bool
};

export default PreviewPanel;
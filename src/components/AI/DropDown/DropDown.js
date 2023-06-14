import React from 'react';
import "./DropDown.scss"
const DropDown = ({onSelectChange}) => {
  return (
    <select className="drop-down" defaultValue="3" onChange={e => onSelectChange(e.target.value)}>
      <option value="9">9x9</option>
      <option value="3" >3x3</option>
    </select>
  );
};

export default DropDown;
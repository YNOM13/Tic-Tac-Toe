import React from 'react';
import "./Modal.scss"
const Modal = ({active, setActive, children}) => {
  if(active){
    return (
      <div className={active ? "modal active" : "modal"} onClick={()=>setActive(false)}>
        <div className="modal__content" onClick={(e)=>e.stopPropagation()}>
          {children}
          <button onClick={()=>setActive(false)}>&times;</button>
        </div>
      </div>
    );
  }

};

export default Modal;
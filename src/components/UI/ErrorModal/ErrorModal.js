import React from 'react';
import './ErrorModal.css';
import Aux from '../../../HOC/Auxiliary'

const errorModal = React.memo(props => {
  return (
    <Aux>
      <div className='Backdrop' onClick={props.onClose} />
      <div className='Error-Modal'>
        <h2>An Error Occurred!</h2>
        <p>{props.children}</p>
        <div className='Error-Modal__Actions'>
          <button className='Button' type='button' onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </Aux>
  );
});

export default errorModal;

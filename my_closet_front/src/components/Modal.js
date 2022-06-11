import React, { useState } from "react";
import CategoryButton from "./CategoryButton";
import "./Modal.css";
import SeasonButton from "./SeasonButton";

const Modal = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        {props.value}
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            {props.type==='category'
            ? <CategoryButton />
            : <SeasonButton />}
            <button className="close-modal" onClick={toggleModal}>
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
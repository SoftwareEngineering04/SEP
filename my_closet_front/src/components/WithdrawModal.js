import React, { useState } from "react";
import "./Modal.css";

const WithDrawModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const doWithDraw = () => {
    
  }
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
            <p>탈퇴하시면 계정에 등록되어있는 <b>모든 데이터가 삭제</b>됩니다. 
              정말 탈퇴하시겠습니까?</p>
            <button className="close-modal" onClick={() => {
              toggleModal(); doWithDraw(); }}>
            네</button>
            <button className="close-modal" onClick={() => {
              toggleModal();}}>
            아니오</button>
          </div>
        </div>
      )}
    </>
  );
}

export default WithDrawModal;
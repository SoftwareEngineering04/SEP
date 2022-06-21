import React, { useState } from "react";
import "./Modal.css";
import axios from 'axios'
import { Link } from "react-router-dom";

const DeleteCloth = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const deleteCloth = () => {
    const cloth = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    cloth.post('/clothes/delete', null,{params: {
        cId:parseInt(props.cid),
      }}).then(function (response){
      if(response===-1) {
        alert('옷 삭제 실패...');
      }
      else {
     alert('옷 삭제 성공!')
    }
    }).catch(function (error){
      alert(`에러 발생 : ${error}`);
    })
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
            <p>정말 옷을 삭제하시겠습니까?</p>

            <Link to={'/main'}>
            <button className="close-modal" onClick={() => {
              toggleModal(); deleteCloth(); }}> 네 </button>
            </Link>
            <button className="close-modal" onClick={() => {
              toggleModal();}}>아니오</button>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteCloth;
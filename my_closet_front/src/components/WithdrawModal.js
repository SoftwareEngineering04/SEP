import React, { useState } from "react";
import "./Modal.css";
import axios from 'axios'

const WithDrawModal = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const doWithDraw = () => {
    const withDraw = axios.create({
      baseURL: 'http://localhost:8000/'
    })
    withDraw.post('/api/login', null,{params: {
        id: props.id, password: props.pw
      }}).then(function (response){
      if(response===-1) {
        alert('회원탈퇴 실패...');
      }
      else {
     alert('회원탈퇴 성공!')
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
            <p>탈퇴하시면 계정에 등록되어있는 <b>모든 데이터가 삭제</b>됩니다. 
              정말 탈퇴하시겠습니까?</p>
              {/*여기에 로그인 전 메인화면으로 가는 Link 나중에 삽입해야함*/}
            <button className="close-modal" onClick={() => {
              toggleModal(); doWithDraw(); }}> 네 </button>
            <button className="close-modal" onClick={() => {
              toggleModal();}}>아니오</button>
          </div>
        </div>
      )}
    </>
  );
}

export default WithDrawModal;
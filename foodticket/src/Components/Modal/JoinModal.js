import React from "react";
import "./JoinModal.css";

const Modal = (content) => {
  return (
    <>
      <div className="ModalOverlay">
        <div className="Modal">
          <p className="title">{content.title}</p>
          <div className="content">
            <p>{content.message}</p>
          </div>
          <div className="button-wrap">
            <button onClick={(e) => content.submit(e)}>{content.confirm}</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;

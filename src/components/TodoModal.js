import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (


    <Modal 
        isOpen={!!props.hasSelectedToDo}
        contentLabel="selectedToDo"
        ariaHideApp={false}
        onRequestClose={props.handleCloseModal} 
        closeTimeoutMS={100} 
        className="modal"
    >
    <h3>You Should Do</h3>
    {props.hasSelectedToDo && <p>{props.hasSelectedToDo}</p>}
    <button className="button" onClick={props.handleCloseModal}>Okay!</button>
    
    </Modal>


);


export default OptionModal;
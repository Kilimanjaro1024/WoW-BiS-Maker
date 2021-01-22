import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button'
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalPopup = (props) =>{
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.icon}
            <br></br>
            {props.itemName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.itemStats}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.buttonFunction}>{props.buttonText}</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalPopup
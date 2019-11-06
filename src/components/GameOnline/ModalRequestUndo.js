import React from 'react'
import { Button, Modal } from "react-bootstrap"
import { emitResponseUndoRequest } from "../../Config/Socket"

const ModalRequestUndo = ({props}) =>{
    const {modalRequestUndo, closeModalRequestUndo, roomInfo} = props
    return (
        <Modal show={modalRequestUndo} onHide={modalRequestUndo}>
        <Modal.Header>
          <Modal.Title>Request from your enemy</Modal.Title>
        </Modal.Header>
        <Modal.Body>Can you accept undo!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> {
              closeModalRequestUndo()
              emitResponseUndoRequest(roomInfo.idRoom, roomInfo.areYouPlayer1, false)
          }}>
            No
          </Button>
          <Button variant="success" onClick="" onClick={()=> {
              closeModalRequestUndo()
              emitResponseUndoRequest(roomInfo.idRoom, roomInfo.areYouPlayer1, true)
          }}>
            Oke
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalRequestUndo
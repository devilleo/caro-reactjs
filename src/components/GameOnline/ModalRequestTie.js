import React from 'react'
import { Button, Modal } from "react-bootstrap"
import { emitResponseTieRequest } from "../../Config/Socket"

const ModalRequestTie = ({props}) =>{
    const {modalRequestTie, closeModalRequestTie, roomInfo, setGameTie, stopGameOnline} = props
    return (
        <Modal show={modalRequestTie} onHide={!modalRequestTie}>
        <Modal.Header>
          <Modal.Title>Request from your enemy</Modal.Title>
        </Modal.Header>
        <Modal.Body>Can you accept tie!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> {
              closeModalRequestTie()
              emitResponseTieRequest(roomInfo.idRoom, roomInfo.areYouPlayer1, false)
          }}>
            No
          </Button>
          <Button variant="success" onClick={()=> {
              closeModalRequestTie()
              setGameTie()
              stopGameOnline()
              emitResponseTieRequest(roomInfo.idRoom, roomInfo.areYouPlayer1, true)
          }}>
            Oke
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalRequestTie
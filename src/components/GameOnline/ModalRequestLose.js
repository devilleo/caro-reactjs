import React from 'react'
import { Button, Modal } from "react-bootstrap"
import { emitResponseLoseRequest } from "../../Config/Socket"

const ModalRequestLose = ({props}) =>{
    const {modalRequestLose, closeModalRequestLose, roomInfo, setYouWinGame, stopGameOnline} = props
    return (
        <Modal show={modalRequestLose} onHide={!modalRequestLose}>
        <Modal.Header>
          <Modal.Title>Request from your enemy</Modal.Title>
        </Modal.Header>
        <Modal.Body>Can you let your enemy lose!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> {
              closeModalRequestLose()
              emitResponseLoseRequest(roomInfo.idRoom, roomInfo.areYouPlayer1, false)
          }}>
            No
          </Button>
          <Button variant="success" onClick={()=> {
              closeModalRequestLose()
              setYouWinGame(roomInfo.areYouPlayer1)
              stopGameOnline()
              emitResponseLoseRequest(roomInfo.idRoom, roomInfo.areYouPlayer1, true)
          }}>
            Oke
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalRequestLose
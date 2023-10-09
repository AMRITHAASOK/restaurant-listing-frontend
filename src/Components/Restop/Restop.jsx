import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Restop({op}) {
    console.log(op);//day details

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
       Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Restaurant Timing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item style={{color:'green'}}>Monday : {op?.Monday}</ListGroup.Item>
      <ListGroup.Item style={{color:'green'}} >Tuesday: {op?.Tuesday}</ListGroup.Item>
      <ListGroup.Item style={{color:'green'}}>Wednesday : {op?.Wednesday}</ListGroup.Item>
      <ListGroup.Item style={{color:'green'}}>Thursday : {op?.Thursday}</ListGroup.Item>
      <ListGroup.Item style={{color:'green'}}>Friday : {op?.Friday}</ListGroup.Item>
      <ListGroup.Item style={{color:'green'}}>Saturday : {op?.Saturday}</ListGroup.Item>
      <ListGroup.Item style={{color:'red'}}>Sunday : {op?.Sunday}</ListGroup.Item>

    </ListGroup>

         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Restop
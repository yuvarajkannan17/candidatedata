import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({ show, onHide, title, message, onConfirm, confirmLabel, cancelLabel }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {cancelLabel || 'Cancel'}
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          {confirmLabel || 'Confirm'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;

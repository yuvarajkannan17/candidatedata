import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({ show, onHide, title, message, confirmLabel, cancelLabel, onConfirm, icon }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="sm">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {icon && (
          <img
            src={icon}
            alt="icon"
            className="modal-icon"
            style={{ width: '80px', height: '80px', marginBottom: '15px' }}
          />
        )}
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        {cancelLabel && (
          <Button variant="secondary" onClick={onHide}>
            {cancelLabel}
          </Button>
        )}
        {confirmLabel && (
          <Button
            variant="primary"
            onClick={() => {
              if (onConfirm) {
                onConfirm();
              }
              if (onHide) {
                onHide(); // Close modal after action
              }
            }}
          >
            {confirmLabel}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;

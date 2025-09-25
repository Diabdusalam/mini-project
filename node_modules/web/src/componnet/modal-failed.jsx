import { X } from "lucide-react";
import { Button, Modal } from "react-bootstrap";
export default function ModalFailed({ show, onClose }) {
  if (!show) return null;
  return (
    <>
      <Modal show={show} onHide={onClose} centered>
        <Modal.Body className="text-center p-4">
          <div
            className="mx-auto d-flex justify-content-center align-items-center mb-3"
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#fee2e2",
              borderRadius: "50%",
            }}
          >
            <X color="#ef4444" size={28} />
          </div>

          <h5 className="fw-bold mb-2">Error</h5>
          <p className="text-muted mb-4">
            Something went wrong. Please Try Again.
          </p>
          <div className="d-flex justify-content-center gap-g-4">
            <Button
              variant="light"
              onClick={onClose}
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                minWidth: "100%",
              }}
            >
              Close
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

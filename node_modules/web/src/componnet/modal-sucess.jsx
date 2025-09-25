import { CircleCheck } from "lucide-react";
import { Button, Modal } from "react-bootstrap";
export default function ModalSucess({ show, onClose }) {
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
              backgroundColor: "#12B569",
              borderRadius: "50%",
            }}
          >
            <CircleCheck color="white" size={50} />
          </div>

          <h5 className="fw-bold mb-2">Success</h5>
          <p className="text-muted mb-4">Data has been successfully</p>
          <div className="d-flex justify-content-center gap-g-4">
            <Button
              variant="light"
              onClick={onClose}
              style={{
                backgroundColor: "#12B569",
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

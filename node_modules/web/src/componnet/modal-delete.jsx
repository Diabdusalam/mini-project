import { Trash2 } from "lucide-react";
import { Button, Modal } from "react-bootstrap";
export default function ModalDelete({ show, onClose, onSubmit }) {
  if (!show) return null;
  return (
    <>
      <Modal show={show} onHide={onClose} centered backdrop={false}>
        <Modal.Body className="text-center p-3">
          <div
            className="mx-auto d-flex justify-content-center align-items-center mb-3"
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#fee2e2",
              borderRadius: "50%",
            }}
          >
            <Trash2 color="#ef4444" size={28} />
          </div>

          <h5 className="fw-bold mb-2">Delete</h5>

          <p className="text-muted mb-4">
            Are you sure want to delete this data?
          </p>

          <div className="d-flex justify-content-center gap-4">
            <Button
              variant="light"
              onClick={onClose}
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                border: "none",
                minWidth: "200px",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={onSubmit}
              style={{
                backgroundImage: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                border: "none",
                minWidth: "200px",
              }}
            >
              Delete
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

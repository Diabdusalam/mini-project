import { useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Input from "../../../componnet/input";
import { useModal } from "../../../hook/use-context";
import { addProductService } from "../api/add-product";
export default function HandelAddProduct() {
  const [openAdd, setOpenAdd] = useState(false);
  const { setOpenModalSucess, setOpenModalFailed } = useModal();
  const { setValue, formState, handleSubmit } = useForm({
    values: {
      name: "",
      price: 0,
      stock: 0,
      is_sell: "",
    },
  });
  const queryClient = useQueryClient();
  const onSubmit = async (data) => {
    try {
      const payload = {
        name: data.name,
        price: Number(data.price),
        stock: Number(data.stock),
        is_sell: data.is_sell,
      };

      await addProductService(payload);
      setOpenAdd(false);
      setOpenModalSucess(true);
      queryClient.invalidateQueries({ queryKey: ["getProducts"] });
    } catch (error) {
      setOpenAdd(false);
      setOpenModalFailed(true);
    }
  };

  return (
    <>
      <button
        className="btn btn-sm  rounded-2 p-2 text-white max-md fw-semibold"
        style={{
          backgroundImage: "linear-gradient(to right, #3b82f6, #8b5cf6)",
        }}
        onClick={() => setOpenAdd(true)}
      >
        <Plus style={{ height: "20px", width: "20px" }} /> Add Products
      </button>
      <Modal show={openAdd} centered onHide={() => setOpenAdd(false)}>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-center  flex-column d-flex gap-4"
          >
            <h5 className=" fw-bold  d-flex justify-align-content-start">
              Add Product
            </h5>
            <div className="d-flex flex-column gap-2">
              <Input
                name="Nama Produk"
                placeholder={"Input Nama Produk"}
                type={"text"}
                onChange={(e) => setValue("name", e.target.value)}
              />
              <Input
                name="Harga Produk"
                placeholder={"Input Harga Produk"}
                type={"number"}
                onChange={(e) => setValue("price", e.target.value)}
              />
              <Input
                name="Stok Produk"
                placeholder={"Input Stok Produk"}
                type={"number"}
                onChange={(e) => setValue("stock", e.target.value)}
              />
              <div className="d-flex flex-column gap-2">
                <div className="justify-align-content-start d-flex fw-semibold">
                  Status Product
                </div>
                <select
                  onChange={(e) => setValue("is_sell", e.target.value)}
                  className="form-select rounded-2"
                >
                  <option>Select Status</option>{" "}
                  <option value={"Dijual"}>Dijual</option>{" "}
                  <option value={"Tidak_Dijual"}>Tidak Dijual</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-center d-lg-flex gap-4 mt-2">
              <Button
                variant="light"
                className="px-1 py-2 rounded-2"
                onClick={() => setOpenAdd(false)}
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  border: "none",
                  width: "100%",
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="px-1 py-2 rounded-2"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b82f6, #8b5cf6)",
                  border: "none",
                  width: "100%",
                }}
              >
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

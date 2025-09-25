import { useQueryClient } from "@tanstack/react-query";
import { SquarePen } from "lucide-react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useModal } from "../../../hook/use-context";
import { use, useEffect, useState } from "react";
import Input from "../../../componnet/input";
import { editProductService } from "../api/edit-product";

export default function HandelEditProduct({ item }) {
  console.log(item, "isi");
  const { setOpenModalSucess, setOpenModalFailed } = useModal();
  const [openEdit, setOpenEdit] = useState(false);
  const { register, handleSubmit } = useForm({
    values: {
      name: item.name,
      price: Number(item.price),
      stock: Number(item.stock),
      is_sell: item.is_sell,
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
      await editProductService(item.id, payload);
      setOpenEdit(false);
      setOpenModalSucess(true);
      queryClient.invalidateQueries({ queryKey: ["getProducts"] });
    } catch (error) {
      console.log(error);
      setOpenEdit(false);
      setOpenModalFailed(true);
    }
  };

  return (
    <>
      <button
        className="btn btn-sm  text-white  rounded-2 p-2"
        style={{ backgroundColor: "#f97316" }}
        onClick={() => setOpenEdit(true)}
      >
        <SquarePen style={{ height: "20px", width: "20px" }} />
      </button>
      <Modal show={openEdit} centered onHide={() => setOpenEdit(false)}>
        <Modal.Body>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-center  flex-column d-flex gap-4"
          >
            <h5 className=" fw-bold  d-flex justify-align-content-start">
              Edit Product
            </h5>
            <div className="d-flex flex-column gap-2">
              <Input
                name="Nama Produk"
                placeholder={"Input Nama Produk"}
                type={"text"}
                {...register("name")}
              />
              <Input
                name="Harga Produk"
                placeholder={"Input Harga Produk"}
                type={"number"}
                {...register("price")}
              />
              <Input
                name="Stok Produk"
                placeholder={"Input Stok Produk"}
                type={"number"}
                {...register("stock")}
              />
              <div className="d-flex flex-column gap-2">
                <div className="justify-align-content-start d-flex fw-semibold">
                  Status Product
                </div>
                <select
                  {...register("is_sell")}
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
                onClick={() => setOpenEdit(false)}
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
                onClick={onSubmit}
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

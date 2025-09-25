import { ArrowBigLeft } from "lucide-react";
import Input from "../../../componnet/input";
import ModalFailed from "../../../componnet/modal-failed";
import ModalSucess from "../../../componnet/modal-sucess";
import EditProductModel from "./_view-edit-model";

export default function EditProduct() {
  const model = EditProductModel();
  return (
    <>
      <form className="p-5" onSubmit={model.handleSubmit(model.onSubmit)}>
        <div
          className="my-3 fw-bold gap-2 d-flex"
          onClick={() => model.navigate(-1)}
        >
          <ArrowBigLeft />
          Back
        </div>
        <div className="text-center  flex-column d-flex gap-4 ">
          <h5
            className=" fw-bold justify-content-center d-flex items-center"
            style={{ fontSize: "30px" }}
          >
            Add Product
          </h5>
          <div className="d-flex flex-column gap-3">
            <Input
              name="Nama Produk"
              placeholder={"Input Nama Produk"}
              type={"text"}
              onChange={(e) => model.setValue("name", e.target.value)}
            />
            <Input
              name="Harga Produk"
              placeholder={"Input Harga Produk"}
              type={"number"}
              onChange={(e) => model.setValue("price", e.target.value)}
            />
            <Input
              name="Stok Produk"
              placeholder={"Input Stok Produk"}
              type={"number"}
              onChange={(e) => model.setValue("stock", e.target.value)}
            />
            <div className="d-flex flex-column gap-2">
              <div className="justify-align-content-start d-flex fw-semibold">
                Status Product
              </div>
              <select
                onChange={(e) => model.setValue("is_sell", e.target.value)}
                className="form-select rounded-2"
              >
                <option>Select Status</option>{" "}
                <option value={"Dijual"}>Dijual</option>{" "}
                <option value={"Tidak_Dijual"}>Tidak Dijual</option>
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-center d-lg-flex gap-4 mt-2">
            <button
              type="submit"
              className="px-1 py-2 rounded-2 text-light"
              style={{
                backgroundImage: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                border: "none",
                width: "100%",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <ModalSucess
        show={model.openModalSucess}
        onClose={() => model.setOpenModalSucess(false)}
      />
      <ModalFailed
        show={model.openModalFailed}
        onClose={() => model.setOpenModalFailed(false)}
      />
    </>
  );
}

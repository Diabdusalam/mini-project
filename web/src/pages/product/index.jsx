import { Plus, SquarePen, Trash } from "lucide-react";
import ModalDelete from "../../componnet/modal-delete";
import ModalSucess from "../../componnet/modal-sucess";
import ViewModelProduct from "./_view-model-product";
import setDetailProducts from "../../modules/product/hook/use-get-products";
import formatRupiahFromString from "../../hook/use-format-rp";
import { useState } from "react";
export default function Product() {
  const model = ViewModelProduct();
  const [searchQuery, setSearchQuery] = useState("");
  const { data } = setDetailProducts({ search: searchQuery });
  return (
    <>
      <section className="p-4 flex-column w-full gap-4">
        <section className="p-3 d-flex  gap-4 justify-content-center">
          <div
            className="text-center p-1 shadow rounded-2"
            style={{ width: "100%", backgroundColor: "#f3f3f6" }}
          >
            <h5>Style 1</h5>
            <p>Style 1 About Something</p>
          </div>
          <div
            className="text-center p-1 shadow rounded-2 "
            style={{ width: "100%", backgroundColor: "#f3f3f6" }}
          >
            <h5>Style 2</h5>
            <p>Style 2 About Something</p>
          </div>
        </section>
        <div
          className={`w-full border rounded-2 p-4 gap-3 shadow d-flex flex-column`}
          style={{ borderColor: "#f3f3f6" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold fs-5">Products</div>
            <button className="btn btn-sm bg-primary rounded-2 p-2 text-white max-md ">
              <Plus style={{ height: "20px", width: "20px" }} /> Add Products
            </button>
          </div>
          <div
            className="d-flex  gap-4 justify-content-between text-center p-2 rounded-2"
            style={{ border: "2px solid #f3f3f6", backgroundColor: "#f3f4f6" }}
          >
            <input
              type="text"
              className="form-control no-outline"
              style={{ width: "fit-content" }}
              placeholder="Search Product"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="table table-bordered table-responsive">
              <thead className="table-light">
                <tr className="rounded-2">
                  <th className="text-center">No</th>
                  <th className="text-center">Nama Produk</th>
                  <th className="text-center">Harga Produk</th>
                  <th className="text-center">Jumlah Stock</th>
                  <th className="text-center">Status Produk</th>
                  <th className="text-center" style={{ width: "0" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => (
                  <tr>
                    <td style={{ width: "0" }} className="text-center">
                      {index + 1}
                    </td>
                    <td>{item.name}</td>
                    <td>{formatRupiahFromString(item.price)}</td>
                    <td>{item.stock}</td>
                    <td className="text-center m-x-auto">
                      <div className="form-check form-switch t">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="d-flex gap-2 text-center justify-content-center">
                      <button
                        className="btn btn-sm  text-white  rounded-2 p-2"
                        style={{ backgroundColor: "#f97316" }}
                        onClick={() => model.setOpenModalDelete(true)}
                      >
                        <SquarePen style={{ height: "20px", width: "20px" }} />
                      </button>
                      <button
                        className="btn btn-sm btn-danger rounded-2 p-2"
                        onClick={() => model.setOpenModalDelete(true)}
                      >
                        <Trash style={{ height: "20px", width: "20px" }} />
                      </button>
                    </td>
                  </tr>
                ))}

                {/* <tr>
                  <td style={{ width: "0" }}>1</td>
                  <td>Batu</td>
                  <td>Rp.10.000</td>
                  <td>10</td>
                  <td className="text-center"></td>
                  <td className="d-flex gap-2 text-center justify-content-center">
                    <button
                      className="btn btn-sm  text-white  rounded-2 p-2"
                      style={{ backgroundColor: "#f97316" }}
                    >
                      <SquarePen style={{ height: "20px", width: "20px" }} />
                    </button>
                    <button className="btn btn-sm btn-danger rounded-2 p-2">
                      <Trash style={{ height: "20px", width: "20px" }} />
                    </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <ModalDelete
        show={model.openModalDelete}
        onClose={() => model.setOpenModalDelete(false)}
      />
      <ModalSucess
        show={model.openModalSucess}
        onClose={() => model.setOpenModalSucess(false)}
      />
      <ModalDelete
        show={model.openModalFailed}
        onClose={() => model.setOpenModalFailed(false)}
      />
    </>
  );
}

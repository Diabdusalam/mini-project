import { Plus, SquarePen, Trash } from "lucide-react";
import { useState } from "react";
import ModalDelete from "../../componnet/modal-delete";
import ModalSucess from "../../componnet/modal-sucess";
import { useModal } from "../../hook/use-context.jsx";
import formatRupiahFromString from "../../hook/use-format-rp";
import setDetailProducts from "../../modules/product/hook/use-get-products";
import HandelDeleteProduct from "../../modules/product/hook/use-delete-product.jsx";
export default function Product() {
  const {
    openModalDelete,
    openModalSucess,
    openModalFailed,
    setOpenModalDelete,
    setOpenModalSucess,
    setOpenModalFailed,
  } = useModal();
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
            <div className="fw-bold fs-2">Products</div>
            <button className="btn btn-sm bg-primary rounded-2 p-2 text-white max-md fw-semibold ">
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
                  <tr key={index}>
                    <td
                      style={{ width: "0" }}
                      className="text-center align-middle"
                    >
                      {index + 1}
                    </td>
                    <td className="align-middle">{item.name}</td>
                    <td className="align-middle">
                      {formatRupiahFromString(item.price)}
                    </td>
                    <td className="align-middle">{item.stock}</td>
                    <td className="text-center m-x-auto align-middle text-center">
                      <div className="form-check form-switch t">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td className="d-flex gap-2 text-center justify-content-center">
                      <button
                        className="btn btn-sm  text-white  rounded-2 p-2"
                        style={{ backgroundColor: "#f97316" }}
                        onClick={() => setOpenModalDelete(true)}
                      >
                        <SquarePen style={{ height: "20px", width: "20px" }} />
                      </button>
                      <HandelDeleteProduct id={item.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ModalSucess
        show={openModalSucess}
        onClose={() => setOpenModalSucess(false)}
      />
      <ModalDelete
        show={openModalFailed}
        onClose={() => setOpenModalFailed(false)}
      />
    </>
  );
}

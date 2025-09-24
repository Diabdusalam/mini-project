import { useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import ModalFailed from "../../componnet/modal-failed.jsx";
import ModalSucess from "../../componnet/modal-sucess";
import { useModal } from "../../hook/use-context.jsx";
import formatRupiahFromString from "../../hook/use-format-rp";
import { editProductService } from "../../modules/product/api/edit-product.jsx";
import HandelAddProduct from "../../modules/product/hook/use-add-product.jsx";
import HandelDeleteProduct from "../../modules/product/hook/use-delete-product.jsx";
import HandelEditProduct from "../../modules/product/hook/use-edit-product.jsx";
import setDetailProducts from "../../modules/product/hook/use-get-products";
import { Plus, SquarePen } from "lucide-react";
import EditProduct from "./edit/index.jsx";
export default function Product() {
  const {
    openModalSucess,
    openModalFailed,
    setOpenModalSucess,
    setOpenModalFailed,
  } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(undefined);
  const [sort_product, setSortProduct] = useState(undefined);
  const [sort_price, setSortPrice] = useState(undefined);
  const [sort_stock, setSortStock] = useState(undefined);
  const { data } = setDetailProducts({
    search: searchQuery,
    sort_product,
    sort_price,
    sort_stock,
  });
  const navigate = useNavigate();
  return (
    <>
      <section className="p-4 flex-column w-full gap-4">
        <div className="fw-bold fs-2 text-center  ">MINI PROJECT</div>
        <section className="p-3 d-flex  gap-4 justify-content-center">
          <div
            className={`text-center p-2 shadow rounded-2 gap-2 d-flex flex-column ${
              searchParams.get("table") != "v2"
                ? "bg-primary text-white"
                : "bg-light"
            }`}
            style={{ width: "100%", backgroundColor: "#f3f3f6" }}
            onClick={() => setSearchParams({ table: "v1" })}
          >
            <h5>Versi Modal</h5>
            <p>
              Versi Modal Tambah Produk dan Edit Produk menggunakan Popup Modal
            </p>
          </div>
          <div
            className={`text-center p-1 shadow rounded-2 ${
              searchParams.get("table") === "v2"
                ? "bg-primary text-white"
                : "bg-light"
            }`}
            style={{ width: "100%", backgroundColor: "#f3f3f6" }}
            onClick={() => setSearchParams({ table: "v2" })}
          >
            <h5>Versi Redirect</h5>
            <p>
              Versi Redirect Tambah Produk dan Edit Produk ketika di klik pindah
              halaman
            </p>
          </div>
        </section>
        <div
          className={`w-full border rounded-2 p-4 gap-3 shadow d-flex flex-column`}
          style={{ borderColor: "#f3f3f6" }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="fw-bold fs-2">Products</div>
            {searchParams.get("table") !== "v2" ? (
              <HandelAddProduct />
            ) : (
              <button
                className="btn btn-sm  rounded-2 p-2 text-white max-md fw-semibold"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #3b82f6, #8b5cf6)",
                }}
                onClick={() => navigate("/add")}
              >
                <Plus style={{ height: "20px", width: "20px" }} /> Add Products
              </button>
            )}
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
                      <div className="d-flex flex-column gap-2">
                        <select
                          className="form-select rounded-2"
                          value={
                            item.is_sell === "Dijual"
                              ? "Dijual"
                              : "Tidak_Dijual"
                          }
                          onChange={(e) => {
                            editProductService(item.id, {
                              is_sell: e.target.value,
                            });
                          }}
                        >
                          <option value={"Dijual"}>Dijual</option>
                          <option value={"Tidak_Dijual"}>Tidak Dijual</option>
                        </select>
                      </div>
                    </td>
                    <td className="d-flex gap-2 text-center justify-content-center">
                      {searchParams.get("table") !== "v2" ? (
                        <HandelEditProduct item={item} />
                      ) : (
                        <button
                          className="btn btn-sm  text-white  rounded-2 p-2"
                          style={{ backgroundColor: "#f97316" }}
                          onClick={() => navigate("/add?id=" + item.id)}
                        >
                          <SquarePen
                            style={{ height: "20px", width: "20px" }}
                          />
                        </button>
                      )}

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
      <ModalFailed
        show={openModalFailed}
        onClose={() => setOpenModalFailed(false)}
      />
    </>
  );
}

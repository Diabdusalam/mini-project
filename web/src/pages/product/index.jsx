import { Plus, SquarePen, Trash } from "lucide-react";

export default function Product() {
  return (
    <section className="p-5 flex-column w-full gap-4">
      <div
        className={`w-full border rounded-2 p-4 gap-4 shadow d-flex flex-column`}
        style={{ borderColor: "#f3f3f6" }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="fw-bold fs-5">Products</div>
          <button className="btn btn-sm bg-primary rounded-2 p-2 text-white max-md ">
            <Plus style={{ height: "20px", width: "20px" }} /> Add Products
          </button>
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
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "0" }}>1</td>
                <td>Batu</td>
                <td>Rp.10.000</td>
                <td>10</td>
                <td>Dibeli</td>
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
              </tr>
              <tr>
                <td style={{ width: "0" }}>1</td>
                <td>Batu</td>
                <td>Rp.10.000</td>
                <td>10</td>
                <td>Dibeli</td>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

import React, { useContext } from "react";
import { dashContext } from "../context/dashContext";
import Pagination from "../common/Pagination";

const ProductTable = () => {
  const context = useContext(dashContext);

  const {
    currentPage,
    perPage,
    handlePageChange,
    productData,
    openNewProductDialog,
    openNewEditDialog,
    openDeletProductDialog,
    setSearch,
    filteredProduct,
  } = context;

  return (
    <section style={{ marginTop: "80px", marginRight: "20px" }}>
      <div>
        <div>
          <h3 className="alert alert-info text-center ">لیست  محصولات</h3>
          <div className="row inline-block" style={{ marginBottom: "50px" }}>
            <button className="btn btn-primary" onClick={openNewProductDialog}>
              <span
                className="fa fa-plus"
                style={{
                  verticalAlign: "middle",
                  marginLeft: "1em",
                }}
              ></span>
              اضافه کردن  محصولات جدید
            </button>
            <input
              type="text"
              placeholder="جستجو کنید"
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "20%",
                float: "left",
                marginLeft: "2em",
                padding: "4px 6px 4px ",
              }}
            ></input>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">عنوان محصول</th>
                <th scope="col">تصویر محصول</th>
                <th scope="col">قیمت محصول</th>
                <th scope="col">ویرایش</th>
                <th scope="col">حذف</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product) => (
                <tr key={product._id}>
                  <td>{product.title}</td>
                  <td>
                    <a
                      href={`http://localhost:4000/${product.imageUrl}`}
                    >
                      {" "}
                      نمایش تصویر
                    </a>
                  </td>
                  <td>{product.price === 0 ? "رایگان" : `${product.price}`}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => openNewEditDialog(product)}
                    >
                      ویرایش
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => openDeletProductDialog(product)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="navbar-bottom-fixed text-center footer">
          <Pagination
            totalProduct={filteredProduct.length}
            currentPage={currentPage}
            perPage={perPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductTable;

import React from "react";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { useDispatch } from "react-redux";
import { DeletProduct } from "../../../actions/products";
import "@reach/dialog/styles.css";

const DeletProductDialog = ({ showDeletDialog, closeDeletDialog, product }) => {
  const dispatch = useDispatch();

  return (
    <DialogOverlay
      isOpen={showDeletDialog}
      onDimiss={closeDeletDialog}
      style={{ background: "hsla(0, 100%, 100%, 0.9)" }}
    >
      <DialogContent
        style={{
          border: "solid 5px hsla(0, 0%, 0%, 0.5)",
          borderRadius: "10px",
          boxShadow: "0px 10px 50px hsla(0, 0%, 0%, 0.33)",
        }}
      >
        <div className="card text-center">
          <h3 style={{ fontSize: "2rem" }}>پاک کردن {product.title}</h3>
          <hr />
          <p>مطمئنی میخوای {product.title}  رو پاک کنی؟</p>
        </div>
        <button
          onClick={() => dispatch(DeletProduct(product._id)) && closeDeletDialog()}
          className="btn btn-success "
          style={{ margin: "1em" }}
        >
          مطمئنم پاک کن
        </button>
        <button
          className="btn btn-warning mr-5"
          style={{ margin: "1em" }}
          onClick={closeDeletDialog}
        >
          انصراف
        </button>
      </DialogContent>
    </DialogOverlay>
  );
};

export default DeletProductDialog;

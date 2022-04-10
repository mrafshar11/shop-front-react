import React, { useEffect, useState } from "react";
import { dashContext } from "./dashContext";
import NewProductDialog from "./../admin/dialogs/NewProductDialog";
import { paginate } from "./../../utils/paginate";
import NewEditDialog from "./../admin/dialogs/NewEditDialog";
import DeletProductDialog from "./../admin/dialogs/DeletProductDialog";

const AdminContext = ({ children, products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);
  const [newProductDialog, setNewProductDialog] = useState(false);
  const [newEditDialog, setNewEditDialog] = useState(false);
  const [curruntProduct, setCurrentProduct] = useState({});
  const [newDeletProductDialog, setnewDeletProductDialog] = useState(false);
  const [curruntDeletProduct, setCurrentDeletProduct] = useState({});
  const [search, setSearch] = useState("");
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => setListProduct(products), [products]);

  const filteredProduct = listProduct.filter((product) =>
    product.title.includes(search)
  );

  const openNewProductDialog = () => setNewProductDialog(true);

  const closeNewProductDialog = () => setNewProductDialog(false);

  const openNewEditDialog = (product) => {
    setNewEditDialog(true);
    setCurrentProduct(product);
  };

  const closeNewEditDialog = () => setNewEditDialog(false);

  const openDeletProductDialog = (product) => {
    setnewDeletProductDialog(true);
    setCurrentDeletProduct(product);
  };

  const closeDeletProductDialog = () => setnewDeletProductDialog(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const productData = paginate(filteredProduct, currentPage, perPage);

  return (
    <dashContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        perPage,
        handlePageChange,
        productData,
        openNewProductDialog,
        openNewEditDialog,
        openDeletProductDialog,
        filteredProduct,
        setSearch,
      }}
    >
      <NewProductDialog
        showDialog={newProductDialog}
        closeDialog={closeNewProductDialog}
      />
      <NewEditDialog
        showEditDialog={newEditDialog}
        closeEditDialog={closeNewEditDialog}
        product={curruntProduct}
      />
      <DeletProductDialog
        showDeletDialog={newDeletProductDialog}
        closeDeletDialog={closeDeletProductDialog}
        product={curruntDeletProduct}
      />

      {children}
    </dashContext.Provider>
  );
};

export default AdminContext;

import { createContext } from 'react';

export const dashContext = createContext({
    currentPage: 1,
    setCurrentPage: () => { },
    perPage: 5,
    handlePageChange: () => { },
    currentProduct: {},
    setSearch: () => { },
    openNewProductDialog: () => { },
    openEditProductDialog: () => { },
    openDeleteProductDialog: () => { },
    productData: [],
    filteredProducts: [],
    sortProductsAsc: () => { },
    sortProductsDes: () => { },
}
)
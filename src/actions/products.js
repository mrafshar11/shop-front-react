import { getProducts, newProduct, updateProduct, deleteProduct } from "./../services/productService";
import { successMessage } from '../utils/message';

export const getAllProducts = () => {
    return async dispatch => {
        const { data } = await getProducts();
        await dispatch({ type: "INIT", payload: data.products });
    };
};

export const creatNewProduct = (product) => {
    return async (dispatch, getState) => {
        const { data, status } = await newProduct(product);
        if (status === 201) successMessage("دوره با موفقیت ساخته شد");
        await dispatch({ type: "ADD_COURSE", payload: [...getState().products, data.product] })
    }
}
export const creatNewEdit = (productId, updatedProduct) => {
    return async (dispatch, getState) => {
        const products = [...getState().products];
        const updatedProducts = [...products];
        const productIndex = updatedProducts.findIndex(product => product._id == productId)
        let product = updatedProducts[productIndex];
        product = { ...Object.fromEntries(updatedProduct) };
        updatedProducts[productIndex] = product;
        console.log(updatedProducts)


        try {
            await dispatch({ type: "UPDATE_COURSE", payload: [...updatedProducts] })
            const { data, status } = await updateProduct(productId, updatedProduct);
            console.log(data)
            if (status === 200) successMessage("کاربر باموفقیت ویرایش شد")
        }
        catch (ex) {
            await dispatch({ type: "UPDATE_COURSE", payload: [...products] })

        }

    }
}


export const DeletProduct = (productId) => {
    return async (dispatch, getState) => {
        const products = [...getState().products];
        const filteredProducts = products.filter(product => product._id !== productId);

        try {
            await dispatch({ type: "DELETE_COURSE", payload: [...filteredProducts] });
            const { status } = await deleteProduct(productId);
            if (status === 200) successMessage("دوره حذف شد");
        }
        catch (ex) {
            await dispatch({ type: "DELETE_COURSE", payload: [...products] })
        }
    }
}



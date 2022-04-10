import { getProduct } from "../services/productService";

export const getSingleProduct = productId => {
    return async dispatch => {
        const { data } = await getProduct(productId);
        await dispatch({ type: "GET_COURSE", payload: data.product });
    };
};

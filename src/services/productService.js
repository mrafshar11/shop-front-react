import http from "./httpService";
import config from "./config.json";

export const getProducts = () => {
    return http.get(`${config.localapi}/api/products`);
};

export const getProduct = productId => {
    return http.get(`${config.localapi}/api/product/${productId}`);
};


export const newProduct = product => {
    return http.post(`${config.localapi}/api/product`, product);
};

export const deleteProduct = productId => {
    return http.delete(`${config.localapi}/api/product/${productId}`);
};

export const updateProduct = (productId, product) => {
    return http.put(`${config.localapi}/api/product/${productId}`, product);
};
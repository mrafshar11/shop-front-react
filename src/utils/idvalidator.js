export const productIdValditor = productId => {
    const hexRegExp = new RegExp("^[0-9a-fA-F]{24}$")
    return hexRegExp.test(productId);
}
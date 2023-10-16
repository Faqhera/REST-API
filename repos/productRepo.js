const productModel = require("../model/productModel");
const get = () => {
    return productModel.find();
};
const create = (data) => {
    const product = new productModel(data);
    return product.save()
}

module.exports = {
    get,
    create,
}
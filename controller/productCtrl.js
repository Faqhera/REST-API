const productRepo = require("../repos/productRepo");
const getAll = async(req,res) => {
    try{
       const products = await productRepo.get();
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }};
          const addProduct = async(req,res) => {
     try{
            const data = req.body;
            await productRepo.create(data);
            res.status(201).send("Product Added!");
    } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
    } };
    module.exports = {
        getAll,
        addProduct,
    }
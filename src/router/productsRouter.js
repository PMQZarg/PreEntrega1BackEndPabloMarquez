import { Router } from "express";

import ProductManager from "../manager/productManager.js";

const router = Router();
const products = new ProductManager();

router.get("/", products.getProducts());
router.post("/", carts.createProducts());
router.put("/:prodid", carts.updateProducts());
router.delete("/:prodid", carts.updateProducts());

export default router;

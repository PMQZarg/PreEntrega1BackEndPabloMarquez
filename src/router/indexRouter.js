import { Router } from "express";
import ProductsManager from "./productsRouter.js";
import Carts from "./cartRouter.js";

const router = Router();

router.use("/products", Products);
router.use("/cart", Carts);

export default router;
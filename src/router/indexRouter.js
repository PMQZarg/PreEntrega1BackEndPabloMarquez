import { Router } from "express";
import Products from "./products";
import Carts from "./carts";

const router = Router();

router.use("/products", Products);
router.use("/cart", Carts);

export default router;
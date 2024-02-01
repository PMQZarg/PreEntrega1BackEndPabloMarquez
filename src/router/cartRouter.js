import { Router } from "express";

import { CartManager } from "../manager/cartManager.js";

const router = Router();
const carts = new CartManager();

router.get("/", carts.getCarts());
router.post("/", carts.createCarts());
router.put("/:cartid", carts.updateCart());
router.delete("/:cartid", carts.updateCart());

export default router;

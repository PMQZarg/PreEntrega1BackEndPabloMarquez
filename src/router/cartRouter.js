import { Router } from "express";

import { CartManager } from "../manager/cartManager.js";

const router = Router();
const carts = new CartManager();

router.get("/", carts.getCarts());
router.post("/", carts.createCarts());
router.put("/:cartid", carts.updateCarts());
router.delete("/:cartid", carts.updateCarts());

export default router;

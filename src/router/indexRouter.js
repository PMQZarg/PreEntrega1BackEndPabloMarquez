import { Router } from "express";

const router = Router();

router.get("/products", () => {
  console.log("comprobación");
});

router.post("/cart", () => {
  console.log("comprobación");
});

router.put("/products", () => {
  console.log("comprobación");
});

router.delete("/products", () => {
  console.log("comprobación");
});

export default router;

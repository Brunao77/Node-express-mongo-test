import { Router } from "express";
import * as productsController from "../controllers/products.controllers";

const router = Router();

router.get("/", productsController.getProducts);
router.post("/", productsController.createProduct);
router.get("/:productId", productsController.getProductById);
router.put("/:productId", productsController.editProductById);
router.delete("/:productId", productsController.deleteProductById);

export default router;
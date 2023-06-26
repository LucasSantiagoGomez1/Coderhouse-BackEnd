import { Router } from "express";
import ManagerProducts from "../classes/ProductsManager.class.js";

const router = Router();

const managerProducts = new ManagerProducts()

router.get("/:pid", async (req, res) => {
  const id = req.params.pid;
  try {
    const product = await managerProducts.consultarProductoPorId(id);
    res.send({ product });
  } catch (error) {
    res.status(404).send({ error: "Producto no encontrado" });
  }
});

router.get("/", async (req, res) => {
    const limit = req.query.limit;
    try {
        const products = await managerProducts.consultarProductos();
        if (limit) {
          const limitedProducts = products.slice(0, limit);
          res.send({ products: limitedProducts });
        } else {
          res.send({ products });
        }
      } catch (error) {
        res.status(500).send({ error: "Error al obtener los productos" });
      }
  });

router.post("/", async (req, res) => {
  const product = req.body;
  try {
    await managerProducts.crearProducto(product);
    res.send({ status: "success" });
  } catch (error) {
    res.status(500).send({ error: "Error al crear el producto" });
  }

  router.put("/:pid", async (req, res) => {
    const id = req.params.pid;
    const updatedFields = req.body;
    try {
      const updatedProduct = await managerProducts.modificarProducto(id, updatedFields);
      res.send({ product: updatedProduct });
    } catch (error) {
        res.status(404).send({ error: "Producto no encontrado" });
    }
  });

  router.delete("/:pid", async (req, res) => {
    const id = req.params.pid;
  
    try {
      await managerProducts.eliminarProducto(id);
      res.send({ status: "success", message: "Producto eliminado exitosamente" });
    } catch (error) {
      res.status(404).send({ status: "error", message: error.message });
    }
  });

});

export default router;
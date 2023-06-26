import { Router } from "express";
import ManagerCarts from "../classes/CartManager.class.js";

const router = Router();
const managerCarts = new ManagerCarts();

router.get("/:cid", async (req, res) => {
  const id = req.params.cid;
  try {
    const cart = await managerCarts.consultarCartPorId(id);
    res.send(cart);
  }catch (error) {
    res.status(404).send({ error: "Carrito no encontrado" });
  }
});

router.get("/", async (req, res) => {
    try{
        const carts = await managerCarts.consultarCarts();
        res.send(carts);

    }catch (error) {
    res.status(500).send({ error: "Error al obtener los carritos" });
  }
});

 
router.post("/", async (req, res) => {
    try{
        await managerCarts.crearCart();
        res.send({ status: "success" });
    }catch (error) {
    res.status(500).send({ error: "Error al obtener los carritos" });
  }
});

router.post("/:cid/products/:pid", async (req, res) => {
    const cartId = req.params.cid;
    const productId = req.params.pid;
    try{
        await managerCarts.agregarProductoEnCarrito(cartId, productId);
        res.send({ status: "success" });
    }catch (error){
        res.status(404).send({ error: "Carrito o producto no encontrado" });
    }
});

export default router;
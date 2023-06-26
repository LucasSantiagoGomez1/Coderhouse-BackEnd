class ProductManager {
    constructor() {
      this.products = [];
    }
  
    
    getProducts() {
      return this.products;
    }
  
    addProduct({title, description, price, thumbnail, code, stock}) {
      const id = Math.random().toString(36).substr(2, 9);
      const newProduct = {id, title, description, price, thumbnail, code, stock};
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (!product) {
        throw new Error(`El producto con la id: ${id} no fue encontrado`);
      }
      return product;
    }
  
    updateProduct(id, {title, description, price, thumbnail, code, stock}) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
            throw new Error(`El producto con la id: ${id} no fue encontrado`);
        }
        const updatedProduct = {id, title, description, price, thumbnail, code, stock};
        this.products[productIndex] = updatedProduct;
        return updatedProduct;
    }
    
    deleteProduct(id) {
        const productIndex = this.products.findIndex(product => product.id === id);
        if (productIndex === -1) {
          throw new Error(`El producto con la id: ${id} no fue encontrado`);
        }
        const deletedProduct = this.products.splice(productIndex, 1)[0];
        return deletedProduct;
    }
}
  
  const productManager = new ProductManager();
  console.log(productManager.getProducts()); // []
  
  const newProduct = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
  };
  
  const addedProduct = productManager.addProduct(newProduct);
  console.log(addedProduct);
  
  console.log(productManager.getProducts());
  
  const foundProduct = productManager.getProductById(addedProduct.id);
  console.log(foundProduct);

  const updatedProduct = productManager.updateProduct(addedProduct.id, {title: "producto actualizado",description: 'descripcion actualizada' , price:300 , stock:50 ,thumbnail:'imagen'});
  console.log(updatedProduct); 
  
  const deletedProduct = productManager.deleteProduct(addedProduct.id);
  console.log(deletedProduct); 
  
class ProductManager{
    constructor(){
        this.Products = []
    }

    getProducts(){
        return this.Products
    }

    agregarProduct(title, description, precio, thumbnail, stock){
        if(title == null || description == null || precio == null || thumbnail==null || stock == null){
            console.log("uno de los valores esta vacio, intetelo nuevamente")
            return;
        }
        const product = {
            title, description, precio, thumbnail, stock
        };

        if(this.Products.length === 0){
            product.code = 1
        } else {
            product.code = this.Products[this.Products.length - 1]. code + 1;
        }
        this.Products.push(product)
        console.log("Se almaceno Correctamente")
    }

    getProductByCode(code){
        const product = this.Products.find((product) =>{
            return product.code == code
        })
        if(!product){
            return "no se encontro el producto";
        }
        else{
          return product;
        }
    }
}

const productManager = new ProductManager()

console.log(productManager.agregarProduct("Chocolate", "Chocolate En Barra", 2, "imagen", 500))

console.log(productManager.agregarProduct("Gasesosa", "Botella de Gaseosa", 3, "imagen", 700))

console.log(productManager.agregarProduct("Galletas Dulces", "Paquete de galletas dulces", 1.30, "imagen", 300))

console.log(productManager.getProducts())

console.log(productManager.getProductByCode(1))

console.log(productManager.getProductByCode(7))
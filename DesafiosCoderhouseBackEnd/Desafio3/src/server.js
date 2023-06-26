const express = require('express');
const app = express();


app.get('/products', (req, res) => {
    const limit = req.query.limit;
    const products = limit ? getProducts().slice(0, limit) : getProducts();
    res.json(products);
  });

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = getProductById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no econtrado' });
  }
});


function getProducts() {

  return [
    { id: 1, title: 'Gaseosa' },
    { id: 2, title: 'Galletas' },
    { id: 3, title: 'Mermelada' },
    { id: 4, title: 'Leche' },
    { id: 5, title: 'Cereales' },
    { id: 6, title: 'Sobres de Jugo' },
    { id: 7, title: 'Tiras de Pan' },
    { id: 8, title: 'Bizcoshos' },
    { id: 9, title: 'Facturas' },
    { id: 10, title: 'Postres' }
  ];
}

function getProductById(id) {
  const products = getProducts();
  return products.find(product => product.id === Number(id));
}

app.listen(8080, () => {
  console.log('Servidor escuchando en el puerto 8080');
});
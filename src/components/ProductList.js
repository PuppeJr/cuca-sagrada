import React, { useState } from 'react';
import PropTypes from 'prop-types';
import image1 from '../images/cuca.jpg';
import image2 from '../images/cuca.jpg';
import image3 from '../images/cuca.jpg';
import image4 from '../images/cuca.jpg';


function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: 'Abacaxi ao Leite Condensado', price: 17.00, size: ['Pequena, 300g'], image: image1, quantity: 0 },
    { id: 2, name: 'Abacaxi ao Leite Condensado', price: 23.00, size: ['Media, 450g'], image: image2, quantity: 0 },
    { id: 3, name: 'Abacaxi ao Leite Condensado', price: 29.00, size: ['Grande, 700g'], image: image3, quantity: 0 },
    { id: 4, name: 'Chocolate', price: 17.00, size: ['Pequena, 300g'], image: image4, quantity: 0 },
    { id: 5, name: 'Chocolate', price: 23.00, size: ['Media, 450g'], image: image4, quantity: 0 },
    { id: 6, name: 'Chocolate', price: 29.00, size: ['Grande, 700g'], image: image4, quantity: 0 },
    { id: 7, name: 'Coco ao Leite Condensado', price: 17.00, size: ['Pequena, 300g'], image: image4, quantity: 0 },
    { id: 8, name: 'Coco ao Leite Condensado', price: 23.00, size: ['Media, 450g'], image: image4, quantity: 0 },
    { id: 9, name: 'Coco ao Leite Condensado', price: 29.00, size: ['Grande, 700g'], image: image4, quantity: 0 },
    { id: 10, name: 'Doce de Leite', price: 17.00, size: ['Pequena, 300g'], image: image4, quantity: 0 },
    { id: 11, name: 'Doce de Leite', price: 23.00, size: ['Media, 450g'], image: image4, quantity: 0 },
    { id: 12, name: 'Doce de Leite', price: 17.00, size: ['Grande, 700g'], image: image4, quantity: 0 },
    { id: 13, name: 'Goiabada', price: 17.00, size: ['Pequena, 300g'], image: image4, quantity: 0 },
    { id: 14, name: 'Goiabada', price: 23.00, size: ['Media, 450g'], image: image4, quantity: 0 },
    { id: 15, name: 'Goiabada', price: 17.00, size: ['Grande, 700g'], image: image4, quantity: 0 },
    { id: 16, name: 'Uva (sem semente)', price: 17.00, size: ['Pequena, 300g'], image: image4, quantity: 0 },
    { id: 17, name: 'Uva (sem semente)', price: 23.00, size: ['Media, 450g'], image: image4, quantity: 0 },
    { id: 18, name: 'Uva (sem semente)', price: 17.00, size: ['Grande, 700g'], image: image4, quantity: 0 },
    { id: 19, name: 'Tradicional', price: 17.00, size: ['Pequena, 300g'], image: image4, quantity: 0 },
    { id: 20, name: 'Tradicional', price: 23.00, size: ['Media, 450g'], image: image4, quantity: 0 },
    { id: 21, name: 'Tradicional', price: 17.00, size: ['Grande, 700g'], image: image4, quantity: 0 },
  ];

  const [quantity, setQuantity] = useState({});
  const [selectedSize, setSelectedSize] = useState({});

  const handleQuantityChange = (id, e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setQuantity((prevQuantity) => ({ ...prevQuantity, [id]: value }));
    }
  };

  const handleSizeChange = (id, e) => {
    const value = e.target.value;
    setSelectedSize((prevSelectedSize) => ({ ...prevSelectedSize, [id]: value }));
  };

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-6 col-lg-4 mb-4" key={product.name}>
            <div className="card h-100">
              <img src={product.image} alt={product.name} className="card-img-top" style={{ width: "100%", height: "auto" }} />
              <div className="card-body d-flex flex-column">
                <h3 className="card-title">{product.name}</h3>
                <span className="product-price h5">R${product.price.toFixed(2)}</span>
                <div className="form-group">
                  <label htmlFor={`size${product.id}`}>Tamanho</label>
                  <select className="form-control" id={`size${product.id}`} value={selectedSize[product.id]} onChange={(e) => handleSizeChange(product.id, e)}>
                    {product.size.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor={`quantity${product.id}`}>Quantidade</label>
                  <input type="number" className="form-control" id={`quantity${product.id}`} min="1" value={quantity[product.id] || product.quantity} onChange={(e) => handleQuantityChange(product.id, e)} />
                </div>
                <button className="btn btn-primary" onClick={() => addToCart({ ...product, quantity: quantity[product.id] || product.quantity, size: selectedSize[product.id] || product.size[0] })} disabled={(quantity[product.id] || product.quantity) < 1}>Confirme a(s) Compra(s)</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
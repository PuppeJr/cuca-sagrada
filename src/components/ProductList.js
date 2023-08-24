import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ({ addToCart }) => {
  const products = [
    {
      "name": "Abacaxi ao Leite Condensado",
      "color": ["Preto"],
      "size": ["P"],
      "price": 17.00,
      "image": "./src/images/CarouselCaption.jpg",
      "quantity": 0
    },
    {
      "name": "MACACÃO VIRGÍNIA TOP SUPLEX",
      "color": ["Preto"],
      "size": ["PP", "P", "M", "G"],
      "price": 55.90,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-decotado-manga-longa-suplex-1690477910840.png",
      "quantity": 0
    },
    {
      "name": "VESTIDO LÃZINHA OMBRO A OMBRO",
      "color": ["Cinza", "Preto"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 55.90,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-lazinha-ombro-a-ombro-1689086492234.jpeg",
      "quantity": 0
    },
    {
      "name": "VESTIDO MANGA ÚNICA COM FENDA GOLA DIAGONAL",
      "color": ["Preto"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 44.50,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-manga-unica-com-fenda-gola-diagonal-1689086420243.jpeg",
      "quantity": 0
    },
    {
      "name": "CONJUNTO TOP MANGA LONGA + SAIA COM FENDA",
      "color": ["Preto", "Branco", "Vermelho", "Nude"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 52.40,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-conjunto-saia-com-fenda-top-manga-longa-1689085146332.png",
      "quantity": 0
    },
    {
      "name": "CONJUNTO PAETÊ TOP CROPPED RETO ALCINHA + SAIA",
      "color": ["Preto"],
      "size": ["PP", "P", "M", "G"],
      "price": 44.90,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-conjunto-paete-top-cropped-reto-alcinha-saia-1689086350659.jpeg",
      "quantity": 0
    },
    {
      "name": "CONJUNTO LÃZINHA TOP E SAIA FENDA",
      "color": ["Preto", "Cinza"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 55.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-plus-conjunto-lazinha-top-cropped-gola-quadrada-e-saia-fenda-1689096753147.png",
      "quantity": 0
    },
    {
      "name": "MACACÃO FECHADO MANGA COMPRIDA TUMBLR",
      "color": ["Preto"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 59.90,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/conjuntos-macacao-fechado-manga-comprida-tumblr-p-1682695739878.jpeg",
      "quantity": 0
    },
    {
      "name": "Vestido Lãzinha Manga Longa Cacharrel",
      "color": ["Preto", "Cinza"],
      "size": ["PP", "P", "M", "G"],
      "price": 40.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-lazinha-ombro-a-ombro-manga-longa-cacharrel-1686934895859.png",
      "quantity": 0
    },
    {
      "name": "VESTIDO LONGO FENDA COM ARGOLA",
      "color": ["Nude", "Preto", "Branco", "Vermelho"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 44.50,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-fenda-com-argola-1690822101969.png",
      "quantity": 0
    },
    {
      "name": "VESTIDO LONGO TOP + SAIA FENDA",
      "color": ["Preto", "Branco", "Vermelho", "Nude"],
      "size": ["PP", "P", "M", "G", "GG"],
      "price": 37.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/vestido-vestido-longo-top-saia-fenda-1690480891323.jpg",
      "quantity": 0
    },
    {
      "name": "Biquini fio frente única",
      "color": ["Preto", "azul", "pink", "laranja", "nude"],
      "size": ["PP", "P", "M", "G"],
      "price": 25.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-fio-frente-unica-1666295902446.jpeg",
      "quantity": 0
    },
    {
      "name": "BIQUÍNI FIO COM ARGOLA",
      "color": ["Preto", "Laranja", "Pink", "Azul"],
      "size": ["PP", "P", "M", "G"],
      "price": 25.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-fio-com-argola-1666286988971.jpeg",
      "quantity": 0
    },
    {
      "name": "Biquini Cortininha De Amarrar",
      "color": ["Pink", "Rosa-Bebê", "Preto", "Azul", "Laranja"],
      "size": ["PP", "P", "M", "G"],
      "price": 25.00,
      "image": "https://17741.cdn.simplo7.net/static/17741/sku/biquinis-biquini-cortininha-calcinha-de-amarrar-fio-1691423457455.jpeg",
      "quantity": 0
    }
  ]
  ;
  const [quantity, setQuantity] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedColor, setSelectedColor] = useState({});

  const handleQuantityChange = (name, e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setQuantity((prevQuantity) => ({ ...prevQuantity, [name]: value }));
    }
  };

  const handleColorChange = (name, e) => {
    const value = e.target.value;
    setSelectedColor((prevSelectedColor) => ({ ...prevSelectedColor, [name]: value }));
    resetQuantity(name);
  };  

  const handleSizeChange = (name, e) => {
    const value = e.target.value;
    setSelectedSize((prevSelectedSize) => ({ ...prevSelectedSize, [name]: value }));
    resetQuantity(name);
  };

  // Function to reset the quantity to 0 for a particular product
  const resetQuantity = (name) => {
    setQuantity((prevQuantity) => ({ ...prevQuantity, [name]: 0 }));
  };

  return (
    <div className="container my-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-6 col-lg-4 mb-4" key={product.name}>
            <div className="card h-100">
              <div className="card-body">
              <img src={product.image} alt={product.name} className="card-img-top" style={{width: "100%", height: "auto"}} />
                <h5 className="card-title">{product.name}</h5>
                <span className="product-price h5">R${product.price.toFixed(2)}</span>
                <div className="form-group">
                  <label htmlFor={`color${product.name}`}>Color</label>
                  <select 
                    className="form-control" 
                    id={`color${product.name}`} 
                    value={selectedColor[product.name] || product.color[0]} 
                    onChange={(e) => handleColorChange(product.name, e)}
                  >
                    {product.color.map((color) => <option key={color} value={color}>{color}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor={`size${product.name}`}>Size</label>
                  <select 
                    className="form-control" 
                    id={`size${product.name}`} 
                    value={selectedSize[product.name] || product.size[0]} 
                    onChange={(e) => handleSizeChange(product.name, e)}
                  >
                    {product.size.map((size) => <option key={size} value={size}>{size}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor={`quantity${product.name}`}>Quantidade</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id={`quantity${product.name}`} 
                    value={quantity[product.name] || ''}
                    onChange={(e) => handleQuantityChange(product.name, e)} 
                  />
                </div>
                <button 
                    className="btn btn-primary" 
                    onClick={() => addToCart({ 
                      ...product, 
                      quantity: quantity[product.name] || 0, 
                      size: selectedSize[product.name] || product.size[0], 
                      color: selectedColor[product.name] || product.color[0] 
                    })}
                    disabled={!(quantity[product.name] > 0)}
                  >
                    Adicionar ao carrinho
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
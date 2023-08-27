import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const addToCart = (product) => {
    let itemIndex = cart.findIndex((item) => 
      item.name === product.name && 
      item.size === product.size && 
      item.color === product.color
    );

    if (itemIndex === -1) {
      setCart([...cart, product]);
    } else {
      let newCart = [...cart];
      newCart[itemIndex].quantity += product.quantity; // Increment the quantity if the same item is added again
      setCart(newCart);
    }
  };

  const deleteItem = (product) => {
    let itemIndex = cart.findIndex((item) => 
      item.name === product.name && 
      item.size === product.size &&
      item.color === product.color
    );

    let newCart = [...cart];
    newCart.splice(itemIndex, 1);
    setCart(newCart);
  };

  const editQuantity = (product, newQuantity) => {
    let itemIndex = cart.findIndex((item) => 
      item.name === product.name && 
      item.size === product.size &&
      item.color === product.color
    );

    let newCart = [...cart];
    if (newQuantity > 0) {
      newCart[itemIndex].quantity = newQuantity;
    } else {
      newCart.splice(itemIndex, 1);
    }
    setCart(newCart);
  };

  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  const totalQuantity = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const isWhatsAppLinkActive = totalQuantity >= 10;

  return (
    <div className="App">
      <Header cart={cart} setShow={setShow} />
      <ProductList addToCart={addToCart} cart={cart} />
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Carrinho de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CartList cart={cart} deleteItem={deleteItem} editQuantity={editQuantity} />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={() => setShow(false)}>Fechar</button>
        </Modal.Footer>
        {isWhatsAppLinkActive ? (
          <WhatsAppButton 
          message={
            `Olá Cuca Sagrada! Aqui está a minha lista de compras e o valor total:\n` + 
            `${cart.map((item) => `${item.name} - ${item.color} - ${item.size} - ${item.quantity} - R$${item.price * item.quantity}`).join('\n')}` + 
            `\nValor Total: R$${totalPrice}`
          } 
        />
        
        ) : (
          <button className="btn btn-secondary" disabled>Mandar mensagem WhatsApp</button>
        )}
      </Modal>
    </div>
  );
};

export default App;

// Importando as bibliotecas e componentes necessários
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import WhatsAppButton from './components/WhatsAppButton';



// Componente funcional principal da aplicação
function App() {
  // Estado para armazenar os itens no carrinho de compras
  const [cart, setCart] = useState([]);
  // Estado para controlar a exibição do modal
  const [show, setShow] = useState(false);

  // Função para adicionar um produto ao carrinho
  const addToCart = (product) => {
    let itemIndex = cart.findIndex((item) => item.name === product.name &&
      item.size === product.size &&
      item.color === product.color
    );

    if (itemIndex === -1) {
      setCart([...cart, product]);
    } else {
      let newCart = [...cart];
      newCart[itemIndex].quantity += product.quantity; // Incrementa a quantidade se o mesmo item for adicionado novamente
      setCart(newCart);
    }
  };

  // Função para excluir um item do carrinho
  const deleteItem = (product) => {
    let itemIndex = cart.findIndex((item) => item.name === product.name &&
      item.size === product.size &&
      item.color === product.color
    );

    let newCart = [...cart];
    newCart.splice(itemIndex, 1);
    setCart(newCart);
  };

  // Função para editar a quantidade de um item no carrinho
  const editQuantity = (product, newQuantity) => {
    let itemIndex = cart.findIndex((item) => item.name === product.name &&
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

  // Calcula o preço total dos itens no carrinho
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  // Calcula a quantidade total de itens no carrinho
  const totalQuantity = cart.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  // Verifica se o link do WhatsApp deve estar ativo
  const isWhatsAppLinkActive = totalQuantity >= 0;

  // Renderiza o componente
  return (
    <div className="App">
      {/* Componente Header que mostra o cabeçalho da página e o botão do carrinho */}
      <Header cart={cart} setShow={setShow} />
      {/* Componente ProductList que exibe a lista de produtos */}
      <ProductList addToCart={addToCart} cart={cart} />
      {/* Modal que exibe o carrinho de compras */}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Carrinho de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Componente CartList que exibe os itens no carrinho */}
          <CartList cart={cart} deleteItem={deleteItem} editQuantity={editQuantity} />
        </Modal.Body>
        <Modal.Footer>
          {/* Botão para fechar o modal */}
          <button className="btn btn-primary" onClick={() => setShow(false)}>Fechar</button>
        </Modal.Footer>
        {/* Renderiza o botão do WhatsApp ou o botão desativado, dependendo da condição */}
        {isWhatsAppLinkActive ? (
          <WhatsAppButton
            message={
              // Monta a mensagem a ser enviada via WhatsApp com os itens e o valor total
              `Olá Cuca Sagrada! Aqui está a minha lista de compras e o valor total:\n` +
              `${cart.map((item) => `${item.name} - ${item.color} - ${item.size} - ${item.quantity} - R$${item.price * item.quantity}`).join('\n')}` +
              `\nValor Total: R$${totalPrice}`} />
        ) : (
          <button className="btn btn-secondary" disabled>Mandar mensagem WhatsApp</button>
        )}
      </Modal>
    </div>
  );
}

export default App;

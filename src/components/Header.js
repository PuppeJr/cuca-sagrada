import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Status } from "@googlemaps/react-wrapper";


const Header = ({ cart, setShow }) => {
  const total = cart.reduce((acc, cur) => {
    if (cur.quantity > 0) {
      return acc + cur.price * cur.quantity;
    }
    return acc;
  }, 0);

  return (
    <header className="bg-dark text-white fixed-top">
      <div className="container d-auto justify-content-between align-items-center py-2">
        <div className="company-name h1 mb-0">Cuca Sagrada</div>
        <div className="company-name h0 mb-0">Tele-Entrega/Pagamento na entrega ou Via PIX:</div>
        <div className="company-name h0 mb-0"><h3>51989892020</h3></div>
        <div className="company-name h0 mb-0">Rua Ari Marinho, 27/Higienópolis</div>
        <div className="cart text-end">
          <span className="cart-count me-3">{cart.length} itens</span>
          <span className="cart-total">R${total.toFixed(2)}</span>
          <button className="btn btn-primary btn-sm" onClick={() => setShow(true)}>Carrinho de Compras</button>
        </div>
      
      
      </div>
    </header>
  )
};

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default Header;
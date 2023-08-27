import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ cart, setShow }) => {
  const total = cart.reduce((acc, cur) => {
    if (cur.quantity > 0) {
      return acc + cur.price * cur.quantity;
    }
    return acc;
  }, 0);

  return (
    <header className="bg-dark text-white fixed-top">
      <div className="container d-flex justify-content-between align-items-center py-2">
        <div className="company-name h1 mb-0">Cuca Sagrada</div>
        <div className="company-name h1 mb-0">Sem Tele-Entrega</div>
        <div className="company-name h0 mb-1">Pagamento na entrega</div>
        <div className="company-name h0 mb-0">PIX 51989892020</div>
        <div className="cart text-end">
          <span className="cart-count me-3">{cart.length} itens</span>
          <span className="cart-total">${total.toFixed(2)}</span>
          <button className="btn btn-primary btn-sm" onClick={() => setShow(true)}>Veja seu pedido</button>
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
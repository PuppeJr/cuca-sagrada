import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const CartList = ({ cart, deleteItem, editQuantity }) => {
  // calculate total value of cart
  const total = cart.reduce((acc, cur) => {
    if (cur.quantity > 0) {
      return acc + cur.price * cur.quantity;
    }
    return acc;
  }, 0);

  useEffect(() => {
    // save cart to local storage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cart-list container my-4">
      {cart.map((product) => (
        <div className="cart-item row py-2" key={`${product.name}-${product.size}`}>
          <div className="col">{product.name} - {product.size}</div>
          <div className="col-auto">
            <input type="number" className="form-control form-control-sm" min="1" style={{ width: "60px" }} onChange={(e) => editQuantity(product, e.target.value)} value={product.quantity} />
          </div>
          <div className="col-auto">${(product.price * product.quantity).toFixed(2)}</div>
          <div className="col-auto"><button className="btn btn-primary" onClick={() => deleteItem(product)}>Delete</button></div>
        </div>
      ))}
      <div className="cart-item row py-2">
        <div className="col font-weight-bold">Total</div>
        <div className="col-auto font-weight-bold">${total.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartList;

CartList.propTypes = {
  cart: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editQuantity: PropTypes.func.isRequired,
};
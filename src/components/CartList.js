// Importar os módulos necessários
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Definir um componente funcional chamado CartList que recebe cart, deleteItem e editQuantity como props
const CartList = ({ cart, deleteItem, editQuantity }) => {
  // Calcular o valor total dos itens no carrinho
  const total = cart.reduce((acc, cur) => {
    // Considerar apenas os itens com uma quantidade maior que 0
    if (cur.quantity > 0) {
      return acc + cur.price * cur.quantity;
    }
    return acc;
  }, 0);

  // Usar o hook useEffect para salvar o carrinho no armazenamento local sempre que ele mudar
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Renderizar o componente
  return (
    <div className="cart-list container my-4">
      {cart.map((product) => (
        <div className="cart-item row py-2" key={`${product.name}-${product.color}-${product.size}`}>
          <div className="col">{product.name} - {product.color} - {product.size}</div>
          <div className="col-auto">
            {/* Campo de entrada para editar a quantidade do item */}
            <input 
              type="number" 
              className="form-control form-control-sm" 
              min="1" 
              style={{ width: "60px" }} 
              onChange={(e) => editQuantity(product, e.target.value)} 
              value={product.quantity} 
            />
          </div>
          <div className="col-auto">R${(product.price * product.quantity).toFixed(2)}</div>
          <div className="col-auto">
            {/* Botão para excluir o item do carrinho */}
            <button className="btn btn-primary" onClick={() => deleteItem(product)}>Deletar</button>
          </div>
        </div>
      ))}
      {/* Exibir o valor total do carrinho */}
      <div className="cart-item row py-2">
        <div className="col font-weight-bold">Total</div>
        <div className="col-auto font-weight-bold">R${total.toFixed(2)}</div>
      </div>
    </div>
  );
};

// Definir os tipos de propriedades (prop types) para o componente CartList
CartList.propTypes = {
  cart: PropTypes.array.isRequired,        // Um array de itens no carrinho
  deleteItem: PropTypes.func.isRequired,   // Uma função para excluir um item do carrinho
  editQuantity: PropTypes.func.isRequired, // Uma função para editar a quantidade de um item no carrinho
};

// Exportar o componente CartList como a exportação padrão
export default CartList;

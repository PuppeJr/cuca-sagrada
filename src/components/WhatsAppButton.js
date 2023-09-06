import React from 'react';
import PropTypes from 'prop-types';

const WhatsAppButton = ({ message }) => {
  const whatsappLink = `https://wa.me/+5551989892020?text=${encodeURIComponent(message)}`;


  return (
    <a href={whatsappLink} className="btn btn-success" target="_blank" rel="noopener noreferrer">
 Clique "AQUI" para confirmar o pedido
 <Text style={styles.paragraph}>
          {`Para Tele-Entrega`}
        </Text>
    </a>
  );
};

export default WhatsAppButton;

WhatsAppButton.propTypes = {
  message: PropTypes.string.isRequired,
};


import React from 'react';
import PropTypes from 'prop-types';

const WhatsAppButton = ({ message }) => {
  const whatsappLink = `https://wa.me/+5551989892020?text=${encodeURIComponent(message)}`;


  return (
    <><div className="company-name h0 mb-0">Temos Tele-Entrega</div><div className="company-name h0 mb-0">Informe o Endereço</div></>
    
  )

  return (
    <a href={whatsappLink} className="btn btn-success" target="_blank" rel="noopener noreferrer">
      Mandar mensagem WhatsApp
    </a>
  );
};

export default WhatsAppButton;

WhatsAppButton.propTypes = {
  message: PropTypes.string.isRequired,
};

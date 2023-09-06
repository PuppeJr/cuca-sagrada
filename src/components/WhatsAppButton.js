import React from 'react';
import PropTypes from 'prop-types';

const WhatsAppButton = ({ message }) => {
  const whatsappLink = `https://wa.me/+5551989892020?text=${encodeURIComponent(message)}`;


  return (
  <a href={whatsappLink} className="btn btn-success" target="_blank" rel="noopener noreferrer" style={{ whiteSpace: 'pre-line' }}>
    {`Clique "AQUI" para confirmar a entrega {`\n`} Se Tele Entrega Endereço/Telefone: `}
  </a>
);




export default WhatsAppButton;

WhatsAppButton.propTypes = {
  message: PropTypes.string.isRequired,
};


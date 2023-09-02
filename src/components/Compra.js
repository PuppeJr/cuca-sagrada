const [endereco, setEndereco] = useState('');
const [telefone, setTelefone] = useState('');
const [nome, setNome] = useState('');

    
<Modal show={show} onHide={() => setShow(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Carrinho de Compras</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {/* ... Componente CartList ... */}
    
    {/* Novos campos para inserir endereço, telefone e nome */}
    <div className="form-group">
      <label htmlFor="endereco">Endereço:</label>
      <input
        type="text"
        className="form-control"
        id="endereco"
        placeholder="Digite seu endereço"
      />
    </div>
    <div className="form-group">
      <label htmlFor="telefone">Telefone:</label>
      <input
        type="tel"
        className="form-control"
        id="telefone"
        placeholder="Digite seu telefone"
      />
    </div>
    <div className="form-group">
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        className="form-control"
        id="nome"
        placeholder="Digite seu nome"
      />
    </div>
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
        `\nValor Total: R$${totalPrice}`
      } 
    />
  ) : (
    <button className="btn btn-secondary" disabled>Mandar mensagem WhatsApp</button>
  )}
</Modal>

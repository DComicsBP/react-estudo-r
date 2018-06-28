import React from 'react';


class PessoaFisica extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: ''
    }
  }

  enviar() {
    let cadastro = {
        nome: this.state.nome,
        cnpj: this.state.email
    };

    this.props.cadastrar(cadastro);
}
setValor(campo, valor) {
  this.setState(
    (anterior) => {
      anterior[campo] = valor;
      return valor;
    }
  );

}


  render() {
    return (
      <form onSubmit={(evento) => { evento.preventDefault(); this.enviar() }} >

      <div className="cadastro-pessoa-fisica container">
        <h4> Cadastro de pessoa Física</h4>
        Nome: <input type="text" value={this.state.nome} onChange={(evento) => this.setValor('nome', evento.target.value)} />
        <br />
        <br />
        Cpf: <input type="text" value={this.state.email} onChange={(evento) => this.setValor('email', evento.target.value)} /><br />
      </div>
      <br />
      <br />
      <input type="submit" value="Enviar" />
      <input type="reset" value="Limpar" />
      </form>
    );
  }
}

export default PessoaFisica;
import React from 'react';

export default class PeessoaJuridica extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nomeEmpresa: '',
      Cnpj: ''
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

        <div>
          <h4>Cadastro de pessoa Jurídica</h4>
          Nome Empresa: <input type="text" value={this.state.nomeEmpresa} onChange={(evento) => this.setValor('nomeEmpresa', evento.target.value)} />
          <br /> <br />
          Cnpj: <input type="text" value={this.state.Cnpj} onChange={(evento) => this.setValor('Cnpj', evento.target.value)} />
          <br />
          <br />
        </div>
        <br />
        <br />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpar" />
      </form>
    );
  }
}


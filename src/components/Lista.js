import React, { Component } from 'react';

export default class Lista extends Component {

  render() {
    return (
      <table>
        <tr>
          <th>Tipo</th>
          <th>Nome</th> 
          <th>CPF/CNPJ</th> 
          </tr>
{this.props.lista.map((pessoa)=>{
  return 
  <tr>
    <td>{pessoa.porte?pessoa.porte:"pessoaFisica"}</td>
    <td>{pessoa.nome}</td>
    <td>{pessoa.cpf?pessoa.cpf:pessoa.cnpj}</td>
  </tr>}  )}

      </table>
    );

  }
}



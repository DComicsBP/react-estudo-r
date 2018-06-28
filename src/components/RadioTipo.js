import React, { Component } from 'react';
import PessoaFisica from './pessoaFisica';
import PeessoaJuridica from './pessoaJuridica';
export default class RadioTipo extends Component {
    constructor() {
        super();
        this.state = { tipo: "de" };
    }


    setTipo(valor) {
        this.setState({
            tipo: valor

        });
    }

    tipo(RadioTipo) {
        if (RadioTipo === 'pessoaJuridica') {
            return (<PeessoaJuridica />)
        }
        if (RadioTipo === 'pessoaFisica') {
            return (<PessoaFisica />)
        }
    }

    render() {
        return (

            <div>
                <label>Cadastrar:</label>
                <input type="radio"
                    id="pessoaFisica"
                    checked={this.state.tipo === 'pessoaFisica'}
                    onChange={() => this.setTipo('pessoaFisica')} />
                <label htmlFor="pessoaFisica">Pessoa física</label>
                <input type="radio"
                    id="pessoaJuridica"
                    checked={this.state.tipo === 'pessoaJuridica'}
                    onChange={() => this.setTipo("pessoaJuridica")} />
                <label htmlFor="pessoaJuridica">Pessoa Jurídica</label>

                <div>
                    {this.tipo(this.state.tipo)}
                </div>

               
            </div>
        );
    }
}





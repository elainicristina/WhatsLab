import React from "react"
import styled from "styled-components"

const Conteiner = styled.button `
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: lightgray;
  color: black;
  border: 2px solid white;


`

const code = styled.code ` 
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
`

const body = styled.body ` 
 margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const divb = styled.div ` 
background-color: aliceblue;
`

export default class WhatsLab extends React.Component {
    mensagens = []
    listaMensagens = []


    state = {
        usuario: "",
        mensagem: ""
    }

    updateListaMensagens = () => {
        
        this.listaMensagens = this.mensagens.map((obj, index) =>
            <p  onClick={() => this.apagarMensagem(index)} className="border bg-light  rounded shadow-sm p-2 m-2">
                <strong>{obj.usuario}</strong><br></br>
                {obj.mensagem}
            </p>
        )
    }

    onChangeUsuario = (e) => {
        this.setState({ usuario: e.target.value })
    }

    onChangeMensagem = (e) => {
        this.setState({ mensagem: e.target.value })
    }

    enviaMensagem = () => {
        this.mensagens.push(this.state)
        this.updateListaMensagens()
        this.setState({
            mensagem: ""
        })
    }

    enviarMensagemEnter = (key) => {
        if (key.code === 'Enter') {
            this.enviaMensagem()
        }
    }

    apagarMensagem = (index) => {
        if(window.confirm("Deseja apagar?")) {
            this.mensagens.splice(index, 1)
            this.updateListaMensagens()
            this.setState({}) 
        }
    }


    render() {


        return (
           
        <div className="container border bg-secondary rounded p-2 mt-3">

            <div className="lista-mensagens">
                {this.listaMensagens}
            </div>

            <div className="d-flex">

                <div className="input-group m-2">
                    <span className="input-group-text" id="basic-addon1">
                        <i class="bi bi-person"></i>
                    </span>
                    <input type="text" value={this.state.usuario} onChange={this.onChangeUsuario} className="form-control" placeholder="Usuário" aria-label="usuario" aria-describedby="basic-addon1"/>
                </div>


                <div className="input-group m-2">
                    <span className="input-group-text" id="basic-addon1">
                        <i class="bi bi-chat-left-fill"></i>
                    </span>
                    <input type="text" value={this.state.mensagem} onChange={this.onChangeMensagem} onKeyPress={this.enviarMensagemEnter} className="form-control" placeholder="Mensagem" aria-label="mensagem" aria-describedby="basic-addon1"/>
                </div>


                <button className="btn btn-light rounded-circle m-2" onClick={this.enviaMensagem}>
                    <i class="bi bi-arrow-right"></i>
                </button>
            </div>

        </div>
        )
    }
}
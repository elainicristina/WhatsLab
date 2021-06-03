import React from "react"


export default class WhatsLab extends React.Component {
    mensagens = []
    listaMensagens = []

    
    state = {
        usuario: "",
        mensagem:""
    }

    updateListaMensagens = () => {
        this.listaMensagens = this.mensagens.map((obj) =>
            <p><strong>{obj.usuario}</strong>: {obj.mensagem}</p>
        )
    }

    onChangeUsuario = (e) => {
        this.setState({ usuario: e.target.value})
    }

    onChangeMensagem = (e) => {
        this.setState({mensagem: e.target.value})
    }

    enviaMensagem = () => {
        this.mensagens.push(this.state)
        this.updateListaMensagens()
        this.setState({})
        this.setState({
            mensagem:""
        })
    }
    
    enviarMensagemEnter = (props) => {
        if (props.code === 'Enter') {
            this.enviaMensagem()
        }
    }

    resultado = () => {
        document.createElement(`${this.state.usuario}: ${this.state.mensagem}`)
    }


    

    render() {


        return (
            <div>

                <div>{this.listaMensagens}</div>

                <input
                    placeholder={"Usuario"}
                    type="text"
                    value={this.state.usuario}
                    onChange={this.onChangeUsuario}
                />

                <input 
                    placeholder={"Mensagem"}
                    type="text"
                    value={this.state.mensagem}
                    onChange={this.onChangeMensagem}
                    onKeyPress={this.enviarMensagemEnter}
                />

                <button onClick={this.enviaMensagem}>ENVIAR</button>
            </div>
        )
    }
}
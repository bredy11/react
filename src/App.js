import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';


class App extends Component {

  constructor(){
    super();
    this.state = {list:[] };
  };


  componentDidMount(){
  
    $.ajax({
        url:"http://localhost:8080/usuario",
        dataType: 'json',
        type:'GET',
        success:function(resposta){
       
          this.setState({list:resposta});
        }.bind(this)
      }
    );
  }

  render() {
    return (
      

<div id="layout">
   
    <a href="#menu" id="menuLink" className="menu-link">
      
        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="hahaha">Company</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="hahaha" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="hahaha" className="pure-menu-link">Autor</a></li>
                <li className="pure-menu-item"><a href="hahaha" className="pure-menu-link">livro</a></li>              
            </ul>
        </div>
    </div>

    <div id="main">
        <div className="header">
            <h1>Cadastro de usuario</h1>
          
        </div>

        <div className="content">
          <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">
                  <div className="pure-control-group">
                    <label htmlFor="nome">Nome</label> 
                    <input id="nome" type="text" name="nome" value=""  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="email">Email</label> 
                    <input id="email" type="email" name="email" value=""  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="cpf">cpf</label> 
                    <input id="cpf" type="text" name="cpf" value=""  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="endereço">endereço</label> 
                    <input id="endereço" type="text" name="endereço" value=""  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="senha">Senha</label> 
                    <input id="senha" type="password" name="senha"  />                                      
                  </div>
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                  </div>
                </form>             

              </div>  
              <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>email</th>
                      <th>cpf</th>
                      <th>endereço</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.list.map(function (autor){
                        return (
                          <tr key={autor.idUsuario}>
                            <td>{autor.nome}</td>
                            <td>{autor.telefone}</td>
                            <td>{autor.cpf}</td>
                            <td>{autor.endereço}</td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table> 
              </div>            

       
        </div>
    </div>
</div>
    );
  }
}

export default App;

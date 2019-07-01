import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class FotoAtualizacoes extends Component {
    render(){
        return (
            <section className="fotoAtualizacoes">
              <a href="#" className="fotoAtualizacoes-like">Likar</a>
              <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
              </form>

            </section>            
        );
    }
}

class FotoInfo extends Component {
    render(){
        return (
            <div className="foto-in fo">
              <div className="foto-info-likes">

                {
                  this.props.foto.likers.map(liker => {
                    return  (<Link to={`/timeline/${liker.login}`} key={liker.login}>
                               {liker.login}
                             </Link>);
                  })
                }
                
              </div>

              <p className="foto-info-legenda">
                <a className="foto-info-autor">autor </a>
                {this.props.foto.comentario}
              </p>

              <ul className="foto-info-comentarios">
                {
                  this.props.foto.comentarios.map(comentario =>{
                    return (
                      <li className="comentario" key={comentario.id}>
                        <Link to={`/timelne/${comentario.login}`} className="foto-info-autor">{comentario.login} </Link>
                          {comentario.texto}
                      </li>
                    )
                  })
                }
   
              </ul>
            </div>            
        );
    }
}

class FotoHeader extends Component {
    render(){
        return (
            <header className="foto-header">
              <figure className="foto-usuario">
                <img src={this.props.foto.urlPerfil} alt="foto do usuario"/>
                <figcaption className="foto-usuario">
                  <Link to={`/timeline/${this.props.foto.loginUsuario}`}>
                    {this.props.foto.loginUsuario}
                  </Link>  
                </figcaption>
              </figure>
              <time className="foto-data">{this.props.foto.horario}</time>
            </header>            
        );
    }
}

export default class FotoItem extends Component {
    render(){
        return (
          <div className="foto">
            <FotoHeader foto={this.props.foto}/>
            <img alt="foto" className="foto-src" src="https://instagram.ffor8-2.fna.fbcdn.net/vp/d089a02dda5e86ae0eec3a3c7088ac1b/5DB65BCC/t51.2885-15/sh0.08/e35/s640x640/31557012_537095050017778_2602742965830942720_n.jpg?_nc_ht=instagram.ffor8-2.fna.fbcdn.net"/>
            <FotoInfo foto={this.props.foto}/>
            <FotoAtualizacoes/>
          </div>            
        );
    }
}
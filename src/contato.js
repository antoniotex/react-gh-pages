import React from 'react'
import './css/contato.css'

const Contato = props => {
    return (
        <div id='contato'>
			<div className='item-contato'>
				<h2>Contato</h2><br/>
				<h4><i className='fa fa-user-o icon' aria-hidden='true'></i>Antonio Carlos</h4>
				<h4><i className='fa fa-location-arrow icon' aria-hidden='true'></i>Rio de Janeiro - RJ</h4>
				<h4><i className='fa fa-whatsapp icon' aria-hidden='true'></i>(21) 99679-6217</h4>
				<h4><a href='mailto:acm.skt@gmail.com'><i className='fa fa-envelope-o icon' aria-hidden='true'></i>acm.sktgmail.com</a></h4>
				<h4><a href='https://github.com/antoniotex'><i className='fa fa-github icon' aria-hidden='true'></i>github.com/antoniotex</a></h4>
			</div>
			<div className='item-contato'>
				<form method='POST' action='https://formspree.io/acm.skt@gmail.com'>
					<h2>Deixe Sua Mensagem</h2>
					<input type='text' name='name' placeholder='Seu Nome...' required/><br/><br/>
					<input type='email' name='_replyto' placeholder='Seu E-mail...' required/><br/><br/>
					<input type='text' name='Assunto' placeholder='Assunto...' required/><br/><br/>
					<textarea name='Area-de-Texto' id='' cols='22' rows='7' placeholder='Digite sua mensagem...' required></textarea><br/><br/><br/>
					<input className='btn' type='submit' value='Enviar'/>
				</form>
			</div>
		</div>
    )
}
export default Contato
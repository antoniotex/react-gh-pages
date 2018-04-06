import React from 'react'
import './css/servicos.css'

const Servicos = props => {
    return (
        <div id='servicos'>
			<div className='servicos-1'>
				<h2 className='servicos-item'>Serviços</h2><hr/>
				<h3>Desenvolvimento de sites e sistemas com as melhores tecnologias do mercado, como:</h3>
			</div>
			<div className='logos'>
				<img src='images/html5.png' alt='' className='servicos-item'/>
				<img src='images/css3.png' alt='' className='servicos-item'/>
				<img src='images/javascript.png' alt='' className='servicos-item'/>
				<img src='images/jquery.png' alt='' className='servicos-item'/>
				<img src='images/mysql.png' alt='' className='servicos-item'/>

				<img src='images/nodejs.png' alt='' className='servicos-item'/>
				<img src='images/mongo.png' alt='' className='servicos-item'/>
				<img src='images/wordpress.png' alt='' className='servicos-item'/>
				<img src='images/php.png' alt='' className='servicos-item'/>
				<img src='images/opencart.png' alt='' className='servicos-item'/>
			</div>
		</div>
    )
}
export default Servicos
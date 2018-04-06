import React from 'react'
import './css/sobre.css'

const Sobre = props => {
    return (
        <div id='sobre'>
			<div className='sobre-1'>
				<h2 className='sobre-item'>Sobre</h2><hr/>
				<h3 className='sobre-item'>Antonio Carlos</h3>
				<h3 className='sobre-item'>Desenvolvedor Web | Ciência da Computação | 3° Período</h3><hr/>
				<h4 className='sobre-item'>Totalmente apaixonado por cultura Dev e todas as suas vertentes. <br/>Frequentador assíduo de meetups e eventos da área.</h4><hr/>
				<h4 className='sobre-item'>Em 2018.1, estou cursando o 3° período de Ciência da Computação com as disciplinas:</h4>
				<ul className='sobre-item'>
					<li>- Algoritmos II</li>
					<li>- Progamação Estruturada</li>
					<li>- Engenharia de Requisitos</li>
					<li>- Banco de Dados II</li>
					<li>- Raciocínio Lógico</li>
					<li>- Comunicação e Expressão</li>
				</ul><br/><hr/>
				<h4 className='sobre-item'>
					Atualmente busco me especializar em novas tecnologias baseadas em JavaScript como 	NodeJS, AngularJS e MongoDB.<br/>
					Estou disposto a trabalhar em equipe e dar o meu máximo para ajudar na resolução de problemas.
				</h4>
			</div>
			<div className='sobre-2 aux'>
				<img src='images/antonio.png' alt='' />
				<h4>Eu :)</h4>
			</div>
		</div>
    )
}
export default Sobre
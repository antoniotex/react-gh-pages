import React from 'react'
import './css/footer.css'

const Footer = props => {
    return (
        <footer id='footer'>
			<div className='footer-1'>
				<a href='acm.skt@gmail.com' target='_blank'><i className='fa fa-envelope-square' aria-hidden='true'></i></a>
				<a href='https://www.linkedin.com/in/antonio-carlos-teixeira-4a8a68aa' target='_blank' rel='noreferrer noopener'><i className='fa fa-linkedin-square' aria-hidden='true'></i></a>
				<a href='https://github.com/antoniotex' target='_blank' rel='noreferrer noopener'><i className='fa fa-github-square' aria-hidden='true'></i></a>
				<a href='https://www.twitter.com/antoniocarlostx' target='_blank' rel='noreferrer noopener'><i className='fa fa-twitter-square' aria-hidden='true'></i></a>
				<a href='https://www.facebook.com/antoniocarlostex' target='_blank' rel='noreferrer noopener'><i className='fa fa-facebook-square' aria-hidden='true'></i></a>
			</div>
			<div className='footer-2'>
				<h4><i className='fa fa-copyright icon' aria-hidden='true'></i>Copyright 2018 - Antonio Carlos</h4>
			</div>
		</footer>
    )
}
export default Footer
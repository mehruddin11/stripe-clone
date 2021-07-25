import PhoneImg from './phone.svg';
import {useGlobalContext} from './context';

const Hero = () => {
	const {closemodel} =useGlobalContext();
	return (
		<div className='hero'onMouseOver ={closemodel} >
		<div className='hero-center'>
		<article className='hero-info'>
		<h1> Info Info Info</h1>
		<p> hello hello heedfdfd
		heedfdfddf
		defaultdf
		defaultdffd
		fffdfdfdf
		hello hello heedfdfd
		heedfdfddf
		defaultdf
		defaultdffd
		fffdfdfdf
		hello hello heedfdfd
		heedfdfddf
		defaultdf
		defaultdffd
		fffdfdfdf</p>
		<button className='btn'>Start Now </button>
		</article>
		<article className='hero-images'> 
		<img src={PhoneImg} className='phone-img' alt ="hero"/>
		</article>
		</div>

		</div>

		)
}
export default Hero;
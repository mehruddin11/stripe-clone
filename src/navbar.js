import {FaBars} from 'react-icons/fa'
import {useGlobalContext} from './context';

const NavBar = () => {
	const {opensidebar,openmodel} = useGlobalContext();
	const displaySubMenu = (e) =>{
		const page = e.target.textContent;
		const boundary = e.target.getBoundingClientRect();
		const  center = (boundary.left + boundary.right)/2;
		const bottom = boundary.bottom-3;
		openmodel(page, {center,bottom} );
}
	return (
		<div className='nav'>
			<div className='nav-center'>
				 <div className='nav-header'>
				 <h3 className='stripe'> Stripe </h3>
				 <button className='btn toggle-btn' onClick ={opensidebar} ><FaBars/> </button>
			</div>
			<ul className='nav-links'>
				<li>
				<button className='link-btn'  
				onMouseOver ={displaySubMenu} >
					products 
				</button> 
				</li>
				<li>
				<button className='link-btn'onMouseOver ={displaySubMenu} >
					developers
				</button> 
				</li>
				<li>
				<button className='link-btn'onMouseOver ={displaySubMenu} >
					company
				</button> 
				</li>
			</ul>
			<button className='btn signin-btn'> SignIN </button>
			</div>

		</div>
		);
}
export default NavBar;
import {useGlobalContext} from './context';
import {FaTimes} from 'react-icons/fa'
import sublinks from './data';
const SideBar = () => {
	const {closesidebar,isSideBaropen} =useGlobalContext ()
	return (
		<div className= {`${isSideBaropen? 'sidebar-wrapper show': 'sidebar-wrapper'}`} >
		 <div className='sidebar'>
		 <button className='close-btn' onClick = {closesidebar} ><FaTimes/> </button>
		 </div>
		 <div className='sidebar-links'>
		 {
		 	sublinks.map((link,index)=>{
		 		const {links, page} =link
		 		return <article key ={index} >
		 			<h4> {page} </h4>
		 			<div className='sidebar-sublinks'>
		 			{
		 				links.map((item ,index)=>{
		 					const {label,icon,url} = item;
		 					 return <a 
		 					 key=
		 					 {index} 
		 					 href ={url}>
		 					 {icon}{label} 
		 					</a>
		 				})
		 			}
		 			</div>
		 			</article>
		 		 
		 	})

		 }

		 </div>
		</div>

		)
}
export default SideBar;
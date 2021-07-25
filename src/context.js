import React,{useContext, useState} from 'react';
import  sublinks  from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
	const [isSideBaropen,setisSideBaropen]=useState(false);
	const [isModelOpen,setisModelOpen] =useState(false);
	const [location, setLocation] =useState({});
	const [page, setPage] =useState({page:'', links:[]})
const opensidebar= () =>{
	return setisSideBaropen(true);
}
const closesidebar = () => {
	return setisSideBaropen(false);
}
const openmodel =(text, coordinates) => {
	const page = sublinks.find((link)=>link.page=== text)
	setPage(page)
	setLocation(coordinates);
	return setisModelOpen(true);
}
const closemodel = () => {
	return setisModelOpen(false)
} 
	return <AppContext.Provider value = {{
		isSideBaropen,
		isModelOpen,
		opensidebar,
		closesidebar,
		openmodel,
		closemodel,
		location,
		page
	}}>
		{children}
	</AppContext.Provider>
}
const useGlobalContext = () => {
	return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}
import { useContext } from 'react'
import {UserContext} from "../utils/UserContext"

const ThemeBtn =() =>{
	const theme = useContext(UserContext);
	return(
		<div> 
		<h4>Light{theme}</h4>
		<button className="border 2px solid m-2">Dark</button>
		</div>
		);
};

export default ThemeBtn;
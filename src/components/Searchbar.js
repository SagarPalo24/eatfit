import {useState} from "react";
import { IoSearchOutline } from "react-icons/io5";

const Searchbar =({collection,updater}) =>{
	const [searchText,setSearchText] = useState("");

	const handleSearchText=(event)=>{
    setSearchText(event.target.value)
	}

	const filterData=()=>{
	    const filterData = collection.filter((restaurant)=>{
	        return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
	    })
	    updater(filterData);
	}

	return(
	<div className=' container relative flex items-center text-gray-400 focus-within:text-gray-600'>
		      <button className='flex items-center' onClick={filterData}>
		      		<IoSearchOutline className='w-5 h-5 absolute ml-3'/>
		      </button>
		       <input type="text" placeholder='Enter Name of Restaurant' 
			       className='pl-10 py-2 font-semibold placeholder-gray-400 w-[100%]
			        text-black rounded-2xl border-none ring-1 ring-gray-400 focus:ring-2'
			        value={searchText} 
			        onChange={handleSearchText} onClick={filterData}
		         />
     </div>
	);
};

export default Searchbar;
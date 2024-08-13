import NormalMenu from "./NormalMenu"

const NestedMenu=({category})=>{
return(
<div>
	<h3>{category?.card?.card?.title}</h3>
	{
	category?.card?.card?.categories.map((subCategory)=>{
	return(
	<>
	     <NormalMenu normalCollection={subCategory} 
	     isNested={true}
	     isActive={true}/>
	</>
	)
	})
	}
</div>
)
}
export default NestedMenu
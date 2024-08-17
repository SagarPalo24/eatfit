import NormalMenu from "./NormalMenu"

const NestedMenu=({category})=>{
return(
	<div>

		<h5>{category?.card?.card?.title}</h5>
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
import { useSelector } from 'react-redux'
import CartFilter from "./CartFilter"
import { Link } from "react-router-dom"
const Cart =() =>{
  const cartItems=useSelector((store)=>store.cart.items);
    console.log ("cartItems", cartItems)
	return(
		<>
			{cartItems.length===0 ? (
					<div style={{ textAlign: 'center', padding: '50px' }}>
					<img src="https://atlas-content-cdn.pixelsquid.com/assets_v2/288/2889899026587587776/previews/G03-200x200.jpg" className="mx-auto mb-2 w-45 h-80"/>		
      <h2>Your Cart is Empty</h2>
      <p>Add some items to your cart to get started!</p>
      <Link to="/">Go to Store</Link>
    </div>
				):(
			cartItems.map((cartItem)=>{
			return(
				<div>
				<CartFilter
					isVeg={cartItem?.isVeg}
					name={cartItem?.name}
					costForTwo={cartItem?.defaultPrice/100 || cartItem?.price/100}
					avgRating={cartItem?.ratings?.aggregatedRating?.rating}
					ratingCount={cartItem?.ratings?.aggregatedRating?.ratingCount}
					discription={cartItem?.description}
					imageUrl={cartItem?.imageId}
				/>

				</div>
				)
		})
				)


		}
		</>

		);
};

export default Cart;



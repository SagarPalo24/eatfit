# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


const resturantData=[
	{
		imgUrl:"hsgsjkh",
		title:"Chinese Wok",
		starRating:"4.5",
		delivery:"30-40min",
		cuisines:"Chinese,Asian,Tibetan,Desert",
		location:"Dadar west"
	},
	{
     imgUrl:"https://images.app.goo.gl/4MukP4pdAWYLKkzf7",
      title : "Hotel Manpasand",
      starRating : "4.5",
      deliveryTime : "30-40",
      cuisines : "Puranpoli,matan thali, Chicken thali, paneer tika",
      location : "Ghansoli, Navi Mumbai" 
    },
    {
      imgUrl : " https://www.zomato.com/mumbai/urban-tadka-1-kandivali-east",
      title : "Urban Tadka",
      starRating : "4.5",
      deliveryTime : "40-45",
      cuisines : "Urban Tadka, Mughalai Biryani",
      location : "North India"
    },
    {
      imgUrl :"https://i.ytimg.com/vi/6E0QFJ3g1Yw/maxresdefault.jpg",
      title : "Aapla Dhaba",
      starRating : "4.9",
      deliveryTime : "30-35",
      cuisines : "South Indian, Asian, Tibetan, Chinese",
      location : "Ghatkopar West"
    },
	{
	imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qrK7sIJh2VaanAlPe1eB89Z68bK9ZUMleA&usqp=CAU",
	title : "american dhaba",
	starrating :"5",
	cusines : "America, western, Indian",
	location: "tank road"
	}
		];



<Restaurantcard 
                                cloudinaryImageId={IMG_URL+restaurant?.info.cloudinaryImageId}
                                name={restaurant?.info.name}
                                avgRating={restaurant?.info.avgRating}
                                deliveryTime={restaurant?.info.sla.deliveryTime}
                                cuisines={restaurant?.info.cuisines.join(", ")}
                                areaName={restaurant?.info.areaName}
                            /> 
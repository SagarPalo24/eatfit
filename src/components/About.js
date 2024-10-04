import { FaUtensils, FaShippingFast, FaUserFriends } from 'react-icons/fa';
import logo from './../assets/img/logo.png'; 
import foodImage from './../assets/img/bg.jpg';

const About =() =>{
	return(
		 <div className="about-container">
            <header className="about-header">
                <img src={logo} alt="Company Logo" className="logo" />
                <h1>About Us</h1>
            </header>
            <section className="about-content">
                <img src={foodImage} alt="Delicious Food" className="food-image" />
                <p>
                    Welcome to <strong>Smart Restaurant</strong>, where we connect you with the best local restaurants and home chefs. Enjoy quick and delicious meals delivered straight to your door!
                </p>
            </section>
            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to provide an effortless food ordering experience with diverse cuisine options tailored to your taste, while supporting local businesses.
                </p>
            </section>
            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="features-list">
                    
                    <div className="feature-item">
                        <FaUserFriends size={50} />
                        <h3>Community Support</h3>
                        <p>We’re committed to supporting local restaurants and home chefs in your area.</p>
                    </div>

                    <div className="feature-item">
                        <FaUtensils size={50} />
                        <h3>Wide <br/> Variety</h3>
                        <p>Explore a vast selection of cuisines from local favorites to international delights.</p>
                    </div>
                    <div className="feature-item">
                        <FaShippingFast size={50} />
                        <h3>Fast <br/>Delivery</h3>
                        <p>Get your food delivered quickly, so you can enjoy your meal without the wait.</p>
                    </div>
                </div>
            </section>
            <footer className="contact-info">
                <h2>Get In Touch</h2>
                <p>Have questions or feedback? Contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
            </footer>
        </div>
		);
};

export default About;
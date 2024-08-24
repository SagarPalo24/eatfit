const Contact =() =>{
	return(
		<div className=" container contact" > 
			<form className="contactform text-white">
			<h2>Contact Form</h2>
				<div className="input-box">
					<label>Full Name </label>
					<input type="text" className="field text-white" placeholder="Enter Your Name" reruired/>
				</div>
				<div className="input-box">
					<label>Email Address</label>
					<input type="email" className="field text-white" placeholder="Enter Your email" reruired/>
				</div>
				<div className="input-box">
					<label>Your Message </label>
					<textarea name="" id=""className="field mess text-white" placeholder="Enter Your Message" required></textarea>
				</div>
				<button type="submit" className="btn"> Send Message</button>
			</form>
		</div>
		);
};

export default Contact;
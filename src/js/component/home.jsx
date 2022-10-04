import React from "react";
import { Navbar } from "./navbar.jsx";
import { Jumbotron } from "./jumbotron.jsx";
import { Card } from "./card.jsx"
import { Footer } from "./footer.jsx";


//include images into your bundle


//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="mx-3 mb-3">
				<Jumbotron />
			</div>
			<div className=" row row-cols-1 card-group gap-3 mx-3 mb-3">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default Home;

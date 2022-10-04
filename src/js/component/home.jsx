import React from "react";
import { Navbar } from "./navbar.jsx";
import { Card } from "./card.jsx"
import { Jumbotron } from "./jumbotron.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="mx-3 mb-3">
				<Jumbotron />
			</div>
			<div className=" d-flex card-group gap-3 mx-3 mb-3">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</React.Fragment>
	);
};

export default Home;

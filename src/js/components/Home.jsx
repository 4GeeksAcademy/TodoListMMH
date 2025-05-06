import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Todotarea from "./Todotarea";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
          
			<h1 className="text-center mt-5"></h1>
			
			   <Todotarea/>
			
			
			
		</div>
	);
};

export default Home;
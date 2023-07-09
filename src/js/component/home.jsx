import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from './navbar.jsx';
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
//create your first component
const Home = () => {
	return (
    <div className="container-fluid p-0 m-0">
    <Navbar />
    <div className="container text-center w-75">
        <Jumbotron />
        <div className="card-group mb-3">
        <Card description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illo culpa assumenda molestiae in."/>
        <Card description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum iure ducimus laborum adipisci iusto itaque."/>
        <Card description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illo culpa assumenda molestiae in."/>
        <Card description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatum iure ducimus laborum adipisci iusto itaque."/>
    </div>
    </div>
    <Footer />
</div>
		
	)
};

export default Home;

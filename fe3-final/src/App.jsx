import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Detail from "./Components/Detail/Detail";
import Favs from "./Components/Fav/Favs";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/dentist/:id" element={<Detail />} />
				<Route path="/favs" element={<Favs />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;

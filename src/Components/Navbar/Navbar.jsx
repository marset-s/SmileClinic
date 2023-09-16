import { useContextGlobal } from "../utils/global.context";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { BiHomeSmile } from "react-icons/bi";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
	const { state, dispatch } = useContextGlobal();

	const handleClick = () => {
		let themeRoot = document.documentElement;
		if (state.theme) {
			themeRoot.classList.add("dark");
		} else {
			themeRoot.classList.remove("dark");
		}
		dispatch({ type: "SWITCH_THEME", payload: state.theme });
	};

	return (
		<>
			<nav>
				{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
				<div className={`${styles.navbarAligment} container`}>
					<span className={`${styles.logoNavbar}`}>
						<BiHomeSmile />
					</span>

					<ul>
						<li>
							<Link to="/">
								<h4>Home</h4>
							</Link>
						</li>
						<li>
							<Link to="/contact">
								<h4>Contact</h4>
							</Link>
						</li>
						<li>
							<Link to="/favs">
								<h4>Favs</h4>
							</Link>
						</li>
						<li>
							{/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
							<button onClick={handleClick} className="button icons">
								{" "}
								{state.theme ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

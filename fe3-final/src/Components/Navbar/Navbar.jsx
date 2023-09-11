
import { useContextGlobal } from "../utils/global.context";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

	const { toggleTheme } = useContextGlobal();
	return (
		<>
			<nav>
				{/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
				<div className={`container ${styles.navbarAligment}`}>
					<img
						className={`${styles.logoNavbar}`}
						src="images/DH.png"
						alt="logo DH"
					/>

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
							<button onClick={toggleTheme}> 🌜</button>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

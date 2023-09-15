import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../utils/global.context";
import styles from "./Card.module.css";

const Card = ({ dentist }) => {
	const { dispatch } = useContextGlobal();

	const addFav = () => {
		dispatch({ type: "ADD_FAVS", payload: dentist });
	};

	return (
		<article className={`${styles.card}`}>
			{/* En cada card deberan mostrar en name - username y el id */}
			<img src="images/doctor.jpg" alt="Photo Dentist" />
			<Link to={`/dentist/${dentist.id}`}>
				<h2 className={`${styles.nameDentist}`}>{dentist.name}</h2>
			</Link>
			<h3 className={`${styles.usernameDentist}`}>{dentist.username}</h3>
			{/* <h5>{dentist.id}</h5> */}

			{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

			{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
			<button onClick={addFav} className="favButton button">
				🌟
			</button>
		</article>
	);
};

export default Card;

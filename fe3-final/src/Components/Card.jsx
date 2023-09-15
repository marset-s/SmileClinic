import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "./utils/global.context";

const Card = ({ dentist }) => {
	const { dispatch} = useContextGlobal();

	const addFav = () => {
		dispatch({type: 'ADD_FAVS', payload: dentist});
	};

	return (
		<div className="card">
			{/* En cada card deberan mostrar en name - username y el id */}

			<Link to={`/dentist/${dentist.id}`}>
				<h2>{dentist.name}</h2>
			</Link>
			<h2>{dentist.username}</h2>
			<h2>{dentist.id}</h2>

			{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

			{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
			<button onClick={addFav} className="favButton button">
				Add fav
			</button>
		</div>
	);
};

export default Card;

import React from "react";
import Card from "../Components/Card/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
	const { state } = useContextGlobal();

	return (
		<>
			<section className="container">
				<h1>Dentists Favs</h1>
				<div className="card-grid">
					{/* este componente debe consumir los destacados del localStorage */}
					{state.favs.map((dentist) => (
						<Card dentist={dentist} key={dentist.id} />
					))}
				</div>
			</section>
		</>
	);
};

export default Favs;

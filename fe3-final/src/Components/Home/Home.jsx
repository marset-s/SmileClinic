import Card from "../Card/Card";
import { useContextGlobal } from "../utils/global.context";
import styles from "./Home.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
	const { state } = useContextGlobal();

	return (
		<main className="container">
			<h1>Home</h1>
			<div className="card-grid">
				{state.dentist.map((dentist) => (
					<Card dentist={dentist} key={dentist.id} />
				))}
			</div>
		</main>
	);
};

export default Home;

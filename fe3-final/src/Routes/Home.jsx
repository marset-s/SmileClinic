import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const url = "https://jsonplaceholder.typicode.com/users";

const Home = () => {
	const { data, setData } = useContextGlobal([]);

	useEffect(() => {
		const dataUsers = async () => {
			try {
				let res = await axios(url);
				//console.log(res.data);
				await setData(res.data);
				console.log(data);
			} catch (err) {
				console.log(err);
			}
		}
		dataUsers();
	}, []);

	return (
		<main className="">
			<h1>Home</h1>
			<div className="card-grid">
				{/* Aqui deberias renderizar las cards */
        data.map((dentist) => {
          return <Card name={dentist.name} username={dentist.username} id={dentist.id} key={dentist.id} />
        })
        }



				
			</div>
		</main>
	);
};

export default Home;

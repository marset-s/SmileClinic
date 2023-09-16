import React, { useEffect } from "react";
import { useContextGlobal } from "../utils/global.context";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
	// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
	const { state, dispatch } = useContextGlobal();
	const { id } = useParams();
	const url = `https://jsonplaceholder.typicode.com/users/${id}`;

	useEffect(() => {
		axios(url)
			.then((res) => {
				console.log(res);
				dispatch({ type: "GET_DETAIL", payload: res.data });
			})
			.catch((err) => console.log(err));
	}, [dispatch, id]);

	return (
		<>
			<section className="container">
				<h1>Detail Dentist id </h1>
				{/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Website</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								{state.detail.name}
							</td>
							<td>
								{state.detail.email}
							</td>
							<td>
								{state.detail.phone}
							</td>
							<td>
								<Link to="#">{state.detail.website}</Link>{" "}
								
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		</>
	);
};

export default Detail;

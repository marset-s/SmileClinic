import React, { useEffect } from "react";
import { useContextGlobal } from "../Components/utils/global.context";
import axios from "axios";
import { useParams } from "react-router-dom";

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

				<h4>{state.detail.name}</h4>
				<h4>{state.detail.email}</h4>
				<h4>{state.detail.phone}</h4>
				<h4>{state.detail.website}</h4>

				{/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
			</section>
		</>
	);
};

export default Detail;

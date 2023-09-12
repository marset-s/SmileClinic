import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const ContextGlobal = createContext({});

const getFavs = JSON.parse(localStorage.getItem("favs"));
const initialState = getFavs ? getFavs : [];

export const ContextProvider = ({ children }) => {
	//Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

	const [data, setData] = useState([]);
	const [favs, setFavs] = useState(initialState);
	const url = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		axios(url)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		localStorage.setItem("favs", JSON.stringify(favs));
	}, [favs]);

	return (
		<ContextGlobal.Provider value={{ data, setData, favs, setFavs }}>
			{children}
		</ContextGlobal.Provider>
	);
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);

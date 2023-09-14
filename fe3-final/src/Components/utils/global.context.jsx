import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const ContextGlobal = createContext({});

//aquí va el reducer
const reducer = (state, action) => {
	switch (action.type) {
		case 'GET_DENTIST':
			return {...state, dentist: action.payload}
			case 'GET_DETAIL':
			return {...state, detail: action.payload}
		case 'ADD_FAVS':
			return {...state, favs: [...state.favs, action.payload]}	
		case 'SWITCH_THEME':
			return {...state, theme: !state.theme}
		default:
			throw new Error()
	}
}

const getFavs = JSON.parse(localStorage.getItem("favs"));
const initialFavState = getFavs ? getFavs : [];

//aquí inicializar state
const initialState = {
	dentist: [],
	detail: {},
	favs: initialFavState,
	theme: true,
}

export const ContextProvider = ({ children }) => {
	//Aqui declaramos useReducer
	const [state, dispatch] = useReducer(reducer, initialState)

	

	
	const url = "https://jsonplaceholder.typicode.com/users";

	useEffect(() => {
		axios(url)
			.then((res) => dispatch({type: 'GET_DENTIST', payload: res.data}))
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		localStorage.setItem("favs", JSON.stringify(state.favs));
	}, [state.favs]);

	return (
		<ContextGlobal.Provider value={{ state, dispatch }}>
			{children}
		</ContextGlobal.Provider>
	);
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);

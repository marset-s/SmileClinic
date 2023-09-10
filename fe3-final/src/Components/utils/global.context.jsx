import { createContext, useContext, useEffect, useState } from "react";



export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(initialState);





export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
const [data, setData] = useState([])




  return (
    <ContextGlobal.Provider value={{data, setData}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal = () => useContext(ContextGlobal)

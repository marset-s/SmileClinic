import React, { useEffect } from 'react'
import { useContextGlobal } from '../Components/utils/global.context'
import axios from "axios"
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { data, setData } = useContextGlobal([])
  const {id} = useParams()
  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(() => {
    axios(url)
    .then(res => setData(res.data))
  }, [])



  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}

      <h4>{data.name}</h4>
      <h4>{data.email}</h4>
      <h4>{data.phone}</h4>
      <h4>{data.website}</h4>


      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

     

    </>
  )
}

export default Detail
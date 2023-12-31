import React from 'react'
import Form from '../Form/Form'
import styles from "./Contact.module.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='container'>
      <h1>Want to know more?</h1>
      <p className={`${styles.subtitleContact}`}>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact
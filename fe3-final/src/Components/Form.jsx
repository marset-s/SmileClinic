import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [newUser , setNewUser] = useState({
    name: '',
    email: '',
  })
  
  const [show, setShow] = useState(false)
  const [error, setError] =useState(false)

  
  const handleChange = (e) => {
    setNewUser({
        ...newUser,
        [e.target.name]: e.target.value
    })


  }

  const handleSubmit = (event) =>{
    event.preventDefault()
   // Expresión regular para validar el correo electrónico
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Expresión regular para validar el nombre de usuario (debe contener al menos 6 caracteres)
  const nameRegex = /^[A-Za-z\s]{6,}$/;

  const isValidEmail = emailRegex.test(newUser.email);
  const isValidName = nameRegex.test(newUser.name);

  if (isValidEmail && isValidName) {
    setShow(true);
    setError(false);
  } else {
    setShow(false);
    setError(true);
  }
}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input type="text" name="name" onChange={handleChange}/>
        <label>Email</label>
        <input type="text" name="email" onChange={handleChange}/>
        <button>Submit</button> 

        {error && <h6>Por favor verifique su información nuevamente</h6>}

        {show && <h6>¡Gracias {newUser.name}, te contactaremos cuanto antes vía mail!</h6>}
          
        
      </form>
    </div>
  );
};

export default Form;

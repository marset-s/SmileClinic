# fe3-final
Este es un proyecto final para la materia FrontEnd 3 de la carrera Certified Tech Developer. El objetivo es crear una aplicación web que muestre información sobre dentistas usando React.js y la API de JSON Placeholder.

# Características

La aplicación tiene cuatro rutas: Home, Contact, Favs y Detail.
La ruta Home muestra una lista de todos los dentistas con su nombre y nombre de usuario.
La ruta Contact muestra un formulario para enviar un mensaje al equipo de desarrollo. El formulario tiene validaciones para los campos requeridos y el formato del email.
La ruta Favs muestra una lista de los dentistas que el usuario ha marcado como favoritos. El usuario puede agregar o quitar dentistas de esta lista desde la ruta Inicio o la ruta Detalle.
La ruta Detail muestra información detallada sobre un dentista específico, incluyendo su nombre, email, teléfono, sitio web y compañía.
La aplicación usa un contexto global para manejar el estado de los dentistas y el tema de la interfaz. El usuario puede cambiar el tema entre claro y oscuro desde un botón en el encabezado.

# Instalación
Para instalar las dependencias del proyecto, ejecuta el siguiente comando en tu terminal:

$ npm install

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

$ npm run dev
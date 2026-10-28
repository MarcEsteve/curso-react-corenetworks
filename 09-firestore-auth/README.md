# Casos de uso de los componentes

Los componentes de este proyecto muestran una progresión desde formularios básicos hasta la integración de Firebase Authentication y Cloud Firestore.

1. **`FormularioSimple` — formulario controlado**
   Practica el manejo del estado de un formulario en React. Guarda el nombre y el correo electrónico en el estado y, al enviarlo, muestra los datos en la consola. No valida los campos ni guarda la información en un servidor.

2. **`FormularioValidado` — validación de datos**
   Comprueba el formato del correo electrónico y que la contraseña tenga al menos ocho caracteres antes de aceptar el envío. Sirve para aprender a validar campos y mostrar errores; no crea una cuenta ni persiste los datos.

3. **`AuthDemo` — autenticación básica**
   Integra Firebase Authentication para registrar usuarios e iniciar sesión con correo y contraseña. Muestra el usuario conectado o un mensaje de error.

4. **`FirestoreDemo` — persistencia de datos**
   Practica Cloud Firestore: lee documentos de la colección `usuarios`, permite añadir nuevos usuarios y presenta los resultados en una tabla. No autentica a los usuarios. Este componente y `AuthDemo` enseñan servicios distintos de Firebase, por lo que su orden de aprendizaje puede variar.

5. **`AuthSimple` — autenticación y perfil**
   Ofrece registro e inicio de sesión, valida el correo y la longitud mínima de la contraseña y, al registrar una cuenta, guarda un perfil básico en Firestore asociado al identificador del usuario de Firebase Authentication.

6. **`AuthAdvanced` — flujo de autenticación más completo**
   Añade nombre, confirmación de contraseña, validaciones adicionales y mensajes específicos para distintos errores de Firebase. Al registrar, también actualiza el perfil de Authentication y guarda más información del usuario en Firestore.

En `src/App.tsx` se selecciona qué componente mostrar. Actualmente está activo `AuthSimple`; los demás componentes están comentados.
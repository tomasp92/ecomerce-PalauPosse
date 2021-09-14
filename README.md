# Como correr el proyecto en local
Entrar a la carpeta donde querrás alojar el repositorio. En una terminal en esa carpeta utilizar git clone para clonar el repo utilizando el metodo [HTTPS](https://github.com/tomasp92/ecommerce-PalauPosse.git)
`git clone https://github.com/tomasp92/ecommerce-PalauPosse.git`
Luego entre al repositorio con la terminal:
`cd ecommerce-PalauPosse`
instale las dependencias:
`npm install`
realice un update de las mismas:
`npm update --force`
una vez echo esto puede correr el proyecto con:
### `npm start`
Automaticamente se abrira [http://localhost:3000](http://localhost:3000) y se verá el proyecto. En caso que no se abra abrir manualmente.

#Dependencias
## React App

El proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).
## Firebase
Es la librería utilizada como base de datos, utilizada para terciarizar el alamcenado de los datos sin necesidad de encargarnos del backend del proyecto.
## React-router-dom

Se utilizó para manejar las rutas del proyecto. Con esta librería podemos hacer que React contenga diferentes paginas dentro del mismo sitio y realizar rutas tanto estaticas como dinamicas.

## React bootstrap
Con el fin de facilitar y agilizar el trabajo con los estilos de la aplicación se instalo React Bootstrap.

## Fontawesome

Los iconos fueron utilizados con esta librería con el fin de facilitar el trabajo con los mismos.

### Convenciones

Tanto las variables como las clases utilizaran camel-case, los componentes se escribiran en pascal-case.
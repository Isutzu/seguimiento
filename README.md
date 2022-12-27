# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

ahora vamos a crearlo
- amplify add geo
- esta parte es importante
- cuando creas un geo resource(mapa) . Es necesario crear una autenticacion
- elegimos el default
- luego username esta bien

- ahi elegimos Authoirized and guest users
de ahi enter , enter
- y listo 
-  ahi ves?
- ya creamos el auth y el Geo
- si los creamos manualmente desde la consola por alguna razon no funciona
- ahora le hacemos un amplify push
- ahi va tomar unos 3 minutos para crear el backend con el auth y el geo
- me refiero al browser 
- al AWS.
- a esa consola
- en un ratito termina
- de ahi verificamos que se haya creado el mapa. Nuestro mapa se llama manzanaMapa
- y tu ya sabes que lo vemos desde Amazon Location Services
- si te das cuenta. Ya lo creo.
- 
- ya casi termina
- listo
- ahora abrimos nuestro nuevo mapa
- elegimos embed this map....etc
- importante...!
- elegimos nuestro Identity pool Id
- se llama manzana...etc
- y automaticamente se copia en el codigo html
- luego no mas lo copiamos y abrimos y listo
- lo que sigue es crear una aplicaion React y que el hosting sea en otro lugar.
 Menos AWS

- Estaba opensando en Heroku
- Yo creo que no.
- Igual podemos usar los componentes de React
- Podemos hacer una pruebita ahorita
- Es lo que iba hacer
- Bueno mejor manana
- Si , manana trabajo . aunque generalmente me duermo a la 1:30am
- Pero alla en Lima debe ser casi las 4am
- Trata de crear el proyecto
- y te debria salir 
- si,
eso de subirlo a git demora mucho. Ayer lo hize y demora en desplegar.
el hosting en aws no funciona con React
No se porque
Otra cosa

ese archivo index.html podemos subirlo al aws (Amazon S3) y ver si funciona?
En Amazon S3 puedes hacer hosting de tus aplicaiones, php, etc
Ayer intente subir el buil folder de React pero tampoco funciono.
Tal vez este index.html funciona
Si funcina. El unico problema es el mapita
VAmos a subir el index.html a ver si se ve el mapa


- Para usar el Amazon S3 hay que crear un nuevo Bucket
- Lo que vamos hacer es usar Amazon como hosting de nuestro archivo index.html
- Haber si sale el mapa.
_ Luego hay que hacerlo publico Para que se oueda ver el mapa
- hay que uncheck esa seleccion
- Ahoi estas aprendiendo
- eso es todo
- El Amazon S3 es un Servicio de Hosting de Amazon
- Le pones crear un Bucket
- y lUego desmarcas Block all public access
- listo








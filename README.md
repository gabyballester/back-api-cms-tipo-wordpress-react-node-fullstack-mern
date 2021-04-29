### Proyecto CMS similar a Wordpress, creado con React + Node (Fullstack MERN)

Este repositorio es sólo el **backend** de este proyecto, el frontend lo encontrarás aquí:
[https://github.com/gabyballester/front-cms-tipo-wordpress-react-hooks-context](https://github.com/gabyballester/front-cms-tipo-wordpress-react-hooks-context)
***

#### 1. Instalar dependencias
`yarn install`

#### 2. Scripts de arranque
`yarn dev` para desarrollar con nodemon
`yarn start` para producción (Heroku actualmente)

#### 3. Cambiar modo database de Mongo local a Atlas remoto
En el archivo  `index.js` podemos elegir entre:
- const db = `mongodb+srv://admin:YFSeJaieZReeMkCy@web-personal.4hz73.mongodb.net/web-personal?retryWrites=true&w=majority`
- const db = `mongodb://${IP_SERVER}:${PORT_DB}/${DB_NAME}`;

#### 4. Video demo del proyecto

[![Proyecto CMS](screenshots/shot1.jpg)](https://www.youtube.com/watch?v=StTqXEQ2l-Y "Proyecto CMS")
#### 5. Capturas del proyecto

![Capturas de pantalla 1 del Ecommerce Panel](screenshots/shot2.jpg)
![Capturas de pantalla 1 del Ecommerce Panel](screenshots/shot3.jpg)
![Capturas de pantalla 1 del Ecommerce Panel](screenshots/shot4.jpg)
![Capturas de pantalla 1 del Ecommerce Panel](screenshots/shot5.jpg)
![Capturas de pantalla 1 del Ecommerce Panel](screenshots/shot6.jpg)
![Capturas de pantalla 1 del Ecommerce Panel](screenshots/shot7.jpg)
![Capturas de pantalla 1 del Ecommerce Panel](screenshots/shot8.jpg)

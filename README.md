# zoo-inventory-back

En el directorio del proyecto, correr los siguentes comandos.
### `yarn install`
<br />

Agregar un archivo <b>.env</b> en la raíz del proyecto, con las siguientes variables:
```yml
  NODE_ENV=development
  DATABASE_DIALECT=mongo
  DATABASE_URI=uri
```
<br />

Si quiere tener datos en la DB, correr el siguiente comando: 
### `yarn init-db`
(es necesario que tenga el archivo .env inicializado)
<br/>
<br/>

Una ves instaladas las dependencias, iniciar el servidor con:
### `yarn start`
<br/>

La aplicación comenzara a correr en modo de desarrollo en [http://localhost:3200](http://localhost:3200).

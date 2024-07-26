# Wine Web

#### [See the page!](https://wineweb.netlify.app/)
![App Logo](/src/images/WineWeb.png)

## Descripción
La web se desarrolla con la intención de desarrollar una herramienta que muestre el inventario real que pudiera tener un usuario en su bodega.
#### [Repo Client](https://github.com/inigoestebangomez/cellar-app.git)
#### [Server Repo Client](https://github.com/inigoestebangomez/server-cellar-app.git)

## Funcionalidades
Comenzamos con una página principal "Home", que muestra 6 tipologías genéricas de vino habituales en el mercado.
El usuario elige una opción y se  muestran todos los vinos, pre-ordenados por rating de valoración. En este momento el usuario puede filtrar por el nombre del vino que quiera buscar, así como filtrar por país de procedencia del mismo.
Con todo esto, se muestra el vino seleccionado y se da la opción de añadir a la bodega. Añadimos tres campos extras que nos solicita la página web, y que pasarán como información relevante a bodega:
- Número de botellas disponibles en bodega
- Precio por unidad de botella
- Año de compra
Finalmente, el usuario podrá visualizar su inventario de botellas en su bodega virtual, donde podrá darle seguimiento del número de botellas que quedan, consultar el precio al que compró, y el año de su compra que le servirá para controlar el consumo de las mismas.

## Paginas
- **/home** - Página de inicio del usuario, desde donde elige el tipo de vino que quiere buscar para añadir después a su bodega
- **/wines/:type** - Página que muestra los vinos en catálogo, en función de su elección anterior.
- **/cellar** - La página propia del usuario, donde guardará sus botellas.
- **/about** - Página sobre los desarrolladores de la web.
- **/*/** - Página de 404.
- **/error** - Página de 500.
Además consta de tres modals dentro de las paginas de about, cellar y wines; en cellar para editar las existencias que tenemos en nuestra bodega y en wines otro para añadir el vino a cellar.

## Client Routes

**NOTE -** Frontend routes

## React Router Routes (React App)
## Metodos del server
| Method                      | URL             |Request body                          | Description                                                   |
| --------------------------- | ----------------| -----------------------------------  |  ------------------------------------------------------------ |
| GET                         | /inventories    | n/a                                  | Retorna un array de todos los productos del inventario        |
| GET                         | /inventories    | n/a                                  | Retorna los detalles de un sólo ítem del inventario           |
| POST                        | /inventories    | {fechaCompra, cantidad,precio, id}   | Crea un nuevo objeto en el inventario                         |
| PUT                         | /inventories:id | EditProfile                          | Actualiza los detalles del objeto                             |
| DELETE                      | /               | AddGame, GameCard                    | Borra un elemento de la bodega                                |

## Other Components

- Navbar específicos
- Modal de los vinos
- Modal de edición en cellar
- Buscador y filtros
- Footer

## Links

### Collaborators

[Félix Romero González](https://github.com/FelixFS3D)

[Iñigo Esteban Gómez](https://github.com/inigoestebangomez)

### Project

[Repository Link Client](https://github.com/inigoestebangomez/cellar-app.git)

[Repository Link Server](https://github.com/inigoestebangomez/server-cellar-app.git)

[Deploy Link](https://wineweb.netlify.app/)

### Excalidraw

[Link](https://excalidraw.com/#room=2f378d367ddc0f80352c,JLxHTJWOODyU1j8Oli5w7A)

### Slides

[Slides Link](https://www.canva.com/design/DAGMCuc-bX8/j9xE0qdCMdfI_JKNcwabDA/edit?utm_content=DAGMCuc-bX8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
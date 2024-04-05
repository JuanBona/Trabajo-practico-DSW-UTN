Coffee-Shop
## Grupo
### Integrantes
* 47896 - Bonanno, Juan Cruz
* 52977 - Bentancour, Felipe
* 47817 - Fernandez, Felipe M 

### Repositorios
* [frontend app](http://hyperlinkToGihubOrGitlab)
* [backend app](http://hyperlinkToGihubOrGitlab)

## Tema
### Descripción
Coffee-Shop es una plataforma en línea dedicada a la venta de café de alta calidad y productos relacionados. Ofrecemos granos de café de origen único, accesorios para café y productos gourmet. Nuestro objetivo es proporcionar a los amantes del café una experiencia de compra única y satisfactoria, brindando buenos productos y de calidad superior.

## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Tipo de Producto<br>2. CRUD Pedido<br>3. CRUD Cliente <br>3. CRUD Producto|
|CRUD dependiente|1. CRUD Producto {depende de} CRUD Tipo de Producto<br>2. CRUD Pedido {depende de} CRUD Cliente|
|Listado<br>+<br>detalle|1. Listado de productos filtrado por tipo de productos, muestra nombre y precio => detalle CRUD Producto<br> 2. Listado de pedidos filtrado por rango de fecha, muestra número de pedido, fecha, estado y nombre del cliente => detalle muestra datos completos del pedido y del cliente|
|CUU/Epic|1. Realizar un pedido de productos<br>2. Ver detalles de un pedido|

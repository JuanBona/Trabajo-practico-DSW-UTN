# Don Julio Tostadero de cafe
## Grupo
### Integrantes
* 47896 - Bonanno, Juan Cruz
*  - Coccoz, Manuel
* 47817 - Fernandez, Felipe M
* 47953 - Rodriguez, Guido

### Repositorios
* [frontend app](http://hyperlinkToGihubOrGitlab)
* [backend app](http://hyperlinkToGihubOrGitlab)

## Tema
### Descripción
Don Julio Tostadero de cafe es una plataforma en línea dedicada a la venta de café de alta calidad y productos relacionados. Ofrecemos granos de café de origen único, accesorios para café y productos gourmet. Nuestro objetivo es proporcionar a los amantes del café una experiencia de compra única y satisfactoria, brindando buenos productos y de calidad superior.

### Modelo
![dsw drawio](https://github.com/JuanBona/Trabajo-practico-DSW-UTN/assets/155491172/4a0d20e8-7446-4974-9e79-c1601937c18d)<br>
https://drive.google.com/file/d/1xFB9vr6ibZYoP9-cF2pP9fkRneIBFlvT/view?usp=sharing

## Alcance Funcional 

### Alcance Mínimo

Regularidad:
|Req|Detalle|
|:-|:-|
|CRUD simple|1. CRUD Tipo de Producto<br>2. CRUD Pedido<br>3. CRUD Cliente <br>3. CRUD Producto|
|CRUD dependiente|1. CRUD Tipo de Producto {depende de} CRUD Producto<br>2. CRUD Pedido {depende de} CRUD Cliente|
|Listado<br>+<br>detalle|1. Listado de productos filtrado por tipo de productos, muestra nombre y precio => detalle CRUD Producto<br> 2. Listado de pedidos filtrado por rango de fecha, muestra número de pedido, fecha, estado y nombre del cliente => detalle muestra datos completos del pedido y del cliente|
|CUU/Epic|1. Realizar un pedido de productos<br>2. Ver detalles de un pedido|

Adicionales para la aprobacion:
|Req|Detalle|
|:-|:-|
|CRUD|1. CRUD Tipo de Producto<br>2. CRUD Pedido<br>3. CRUD Cliente <br>4. CRUD Producto <br>5. CRUD Promoción<br>6. CRUD Valoración del Cliente<br>7. CRUD Tipo Pedido<br>8. CRUD Tipo Cliente|
|CUU/Epic|1. Administrar valoraciones de productos y café<br>2. Registrar la compra de un cliente como consumidor final o empresa <br>3. Realizar el control de envios del estilo retiro o envio

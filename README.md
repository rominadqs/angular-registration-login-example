## - AngularJS User Registration and Login Example

To see a demo and further details go to http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx

* To run:
 * <pre><code> npm install </code></pre>
 * <pre><code> npm install webpack -g </code></pre>
 * <pre><code> npm install webpack-dev-server -g </code></pre>

* 1. Crea una página publica que se acceda mediante: localhost:8080/#!/ships
    * 1.1 - El controlador de esta pagina debe realizar una petición a un servicio.
    * 1.2 - El servicio realizara la peticion a http://swapi.co/api/starships/.
    * 1.3 - Se tiene que utilizar Promise y puedes utilizar la propiedad resolve del router. 

* 2. Crea un componente que se llame de la siguiente forma: <ships></ships>
    * 2.1 - Este componente pintara los campos: name y passengers.
    * 2.2 - Los datos entraran a traves de un Input.
    * 2.3 - Tendra un Output para añadir 5 elementos mas a la lista.
    
* 3. Implementa un menú mobile de bootstrap con las páginas: Home, Register y Ships.  
    * 3.1 - En mobile debe estar oculto por defecto y abrirse tipo desplegable.
    * 3.2 - En desktop debe estar en una linea. 


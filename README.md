## - AngularJS User Registration and Login Example

To see a demo and further details go to http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx

* To run:
 * <pre><code> npm install </code></pre>
 * <pre><code> npm install webpack -g </code></pre>
 * <pre><code> npm install webpack-dev-server -g </code></pre>

* 1. Crea una página publica que se acceda mediante: localhost:8080/#!/ships
    * 1.1 - El controlador de esta página debe realizar una petición a un servicio.
    * 1.2 - El servicio realizara la petición a http://swapi.co/api/starships/.
    * 1.3 - Se tiene que utilizar Promise y puedes utilizar la propiedad resolve del router. 

* 2. Crea un componente que se llame de la siguiente forma: '''<custom-md-list> </custom-md-list>'''
    * 2.1 - Este componente recibirá datos del controlador padre.
    * 2.2 - El componente mostrará por pantalla el campo name de cada uno de los elementos.
    * 2.3 - El controlador padre enviará solo 5 elementos al componente.
    * 2.3 - El componente tendrá un campo "más datos". Al pulsarlo, añadirá 5 elementos más a la lista.
    
* 3. Implementa un menú mobile/desktop de bootstrap con las páginas: Home, Register y Ships.  
    * 3.1 - En mobile debe estar oculto (menú hamburguesa) por defecto y abrirse tipo desplegable.
    * 3.2 - En desktop debe estar en una línea. 

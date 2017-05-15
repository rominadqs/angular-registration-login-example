angular-registration-login-example
==============================

AngularJS User Registration and Login Example

To see a demo and further details go to http://jasonwatmore.com/post/2015/03/10/AngularJS-User-Registration-and-Login-Example.aspx


To run:
npm install

npm install webpack -g
npm install webpack-dev-server -g
 
- Crea una página publica que se acceda mediante: localhost:8080/#!/ships
- Crea un componente que se llame de la siguiente forma: <ships total="5"></ships>
    - Este componente recuperará mediante Ajax la información de: http://swapi.co/api/starships/ 
    - mostrará un listado con un limite de:  "total"
    - Añade  el componente a la página ships.
- Implementa un menú vertical con las páginas: Home, Register y Ships. El menú ha de cumplir:
    - En mobile debe estar oculto por defecto.

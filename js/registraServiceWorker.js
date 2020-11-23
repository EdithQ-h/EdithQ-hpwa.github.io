registraServiceWorker ( ) ;
/ ** Registra un service worker para instalar la aplicación en el
* caché del navegador. La palabra reservada async indica que no espera
* a que termine y libera el registro de activación que lo llamó. * /
 función  asíncrona registraServiceWorker ( )  {
  prueba  {
    / * Registra el service worker y espera que termine. El trabajador de servicio debe
     * estar en la carpeta pública. La palabra await indica que espera a que
     * termine y solo puede usar en una función async. * /
    const  registro  =  aguardar  navegador . serviceWorker . registrar ( "sw.js" ) ;
    // Registro correcto y se muestra en la consola.
    consola . log ( "Trabajador de servicio registrado" ) ;
    consola . log ( registro ) ;
  }  captura  ( e )  {
    // Hubo un error en el registro.
    muestraError ( e ) ;
  }
}
/ ** Procesa una excepción y muestra un mensaje de error.
* @param { Error } e descripción del error. * /
function  muestraError ( e )  {
  consola . log ( e ) ;
  alerta ( e . mensaje ) ;
}
/ * invoca a registraServiceWorker instalar la aplicación en el caché del
* navegador. No se espera a que termine el registro. * /
registraServiceWorker ( ) ;
/ ** Registra un service worker para instalar la aplicación en el
* caché del navegador. La palabra reservada async indica que no espera
* a que termine y libera el registro de activación que lo llamó. * /
 función  asíncrona registraServiceWorker ( )  {
  prueba  {
    / * Registra el service worker y espera que termine. El trabajador de servicio debe
     * estar en la carpeta pública. La palabra await indica que espera a que
     * termine y solo puede usar en una función async. * /
    const  registro  =  aguardar  navegador . serviceWorker . registrar ( "sw.js" ) ;
    // Registro correcto y se muestra en la consola.
    consola . log ( "Trabajador de servicio registrado" ) ;
    consola . log ( registro ) ;
  }  captura  ( e )  {
    // Hubo un error en el registro.
    muestraError ( e ) ;
  }
}
/ ** Procesa una excepción y muestra un mensaje de error.
* @param { Error } e descripción del error. * /
function  muestraError ( e )  {
  consola . log ( e ) ;
  alerta ( e . mensaje ) ;
}

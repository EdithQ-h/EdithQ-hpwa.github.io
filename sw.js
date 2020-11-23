/ * Este archivo debe estar colocado en la carpeta raíz del sitio.
 * cualquier cambio en el contenido de este archivo hace que el service worker
* se reinstale. Normalmente se cambia el número en el nombre del caché cuando
* cambia el contenido de los archivos. Espera 11 minutos después de hacer los
* cambios en tu sitio, para después actualizar este archivo. * /
const  CACHE  =  "fannypwa-1.00" ;

/ ** Archivos requeridos para que la aplicación funcione fuera de línea. * /
const  ARCHIVOS  =  [
  "cmp / mi-footer.js" ,
  "css / estilos.css" ,
  "img / icono256.png" ,
  "img / icono1024.png" ,
  "img / 2048.png" ,
  "js / registraServiceWorker.js" ,
  "favicon.ico" ,
  "index.html" ,
  "manifest.json" ,
  '/'
] ;

yo . addEventListener ( "instalar" ,  evt  =>  {
  consola . log ( "Service Worker instalado." ) ;
  // Realiza la instalación: carga los archivos requeridos en la caché.
  evt . esperar hasta ( cargaCache ( ) ) ;
} ) ;

// Toma de la caché archivos solicitados. Si no están en caché, se descargan.
yo . addEventListener ( "buscar" ,  evt  =>  {
  if  ( evt . request . method  ===  "GET" )  {
    evt . responderCon ( usaCache ( evt ) ) ;
  }
} ) ;

yo . addEventListener ( "activar" ,  ( )  =>  consola . log ( "Trabajador de servicio activo." ) ) ;

 función  asíncrona cargaCache ( )  {
  consola . log ( "Intentando cargar caché:"  +  CACHE ) ;
  const  cache  =  esperar  cachés . abrir ( CACHE ) ;
  esperar  caché . addAll ( ARCHIVOS ) ;
  consola . log ( "Caché cargado:"  +  CACHE ) ;
}

 función  asíncrona usaCache ( evt )  {
  constante cache  =  esperar  cachés . abrir ( CACHE ) ;
   respuesta  constante =  esperar  caché . partido ( evt . request ,  {  ignoreSearch : true  } ) ;
  if  ( respuesta )  {
     respuesta de retorno ;
  }  más  {
    return  fetch ( solicitud evt . ) ;
  }
}

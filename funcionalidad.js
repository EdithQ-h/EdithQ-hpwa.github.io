función  operaciones ( op )
{

    var  ops  =  {
      

       densidad : function  dividirNumeros ( n1 ,  n2 )  {
            return  ( parseInt ( n1 ) / parseInt ( n2 ) ) ;
        }


    } ;



    var  num1  =  documento . getElementById ( "num1" ) . valor ;
    var  num2  =  documento . getElementById ( "num2" ) . valor ;

    
    // Comprobamos si se ha introducido números en las cajas
    if  ( isNaN ( parseFloat ( document . getElementById ( 'num1' ) . value ) ) )  {
        documento . getElementById ( 'resultado' ) . innerHTML = "<span style = 'color: red;'> Por favor, escriba el primer numero </span>" ;
        documento . getElementById ( "num1" ) . innerText  =  "0" ;
        documento . getElementById ( "num1" ) . foco ( ) ;
        }  else  if  ( isNaN ( parseFloat ( document . getElementById ( 'num2' ) . value ) ) )  {
        documento . getElementById ( 'resultado' ) . innerHTML = "<span style = 'color: red;'> Por favor, escriba el segundo numero </span>" ;
        documento . getElementById ( "num2" ) . innerText  =  "0" ;
        documento . getElementById ( "num2" ) . foco ( ) ;
    }
    else  {
    // Si se han introducido los números en ámbas cajas, operamos:
        cambiar ( op )  {
            
            caso  'densidad' :
                var  resultado  =  ops . densidad ( num1 ,  num2 ) ;
                documento . getElementById ( 'resultado' ) . innerHTML = "<span style = 'color: green;'>" + resultado + "</span>" ;
                romper ;

        }
    }

}

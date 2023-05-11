
let pinceladas = [];
let cantidad = 13;

let miPaleta;
let trazo;

function preload(){
  miPaleta = new Paleta( "data/noche.png" );
  trazo = loadImage( "data/fondo.png" );
  for( let i=0 ; i<cantidad ; i++){
    let colores = "data/trazo"+nf( i , 2 )+".png";
    pinceladas[i] = loadImage( colores );
  }
}
function setup() {
  createCanvas( windowWidth, windowHeight );
  background(255);
  imageMode( CENTER );
 

  
}
function draw() {
 
  if (mouseX>400){

  for( let i=0 ; i<100 ; i++){

  let x = random( width );
  let y = random( height );

  let xtrazo = int( map( x , 0 , width , 0 , trazo.width ) );
  let ytrazo = int( map( y , 0 , height , 0 , trazo.height ) );

  let colorDeEstePixel = trazo.get( xtrazo , ytrazo );

  if( red( colorDeEstePixel ) < 100 ){
    let cual = int( random(cantidad));
    let tamanio = random( 0.01 , 0.3 );
  
    let esteColor =  miPaleta.darColor();
    let angulo = radians( map( x , 0 , width , -30 , 120 ) + random(-5,5) );
    let angulo2 = radians( map( y , 0 , height , 0 , 180 ) + random(-5,5) );
  
    tint( red(esteColor) , green(esteColor) , blue(esteColor) , 200 );
  
    push();
    translate( x, y );
    rotate( angulo+angulo2 );
    scale( tamanio );
    image( pinceladas[cual] , 0 , 0 );  
    pop();
  
  }
}
  }
  if (mouseX<400){
    for( let i=0 ; i<100 ; i++){

      let x = random( width );
      let y = random( height );
    
      let xtrazo = int( map( x , 0 , width , 0 , trazo.width ) );
      let ytrazo = int( map( y , 0 , height , 0 , trazo.height ) );
    
      let colorDeEstePixel = trazo.get( xtrazo , ytrazo );
    
      if( red( colorDeEstePixel ) < 100 ){
        let cual = int( random(cantidad));
        let tamanio = random( 0.01 , 0.3 );
      
        let esteColor =  miPaleta.darColor();
        let angulo = radians( map( x , 0 , width , -30 , 120 ) + random(-5,5) );
        let angulo2 = radians( map( y , 0 , height , 0 , 180 ) + random(-5,5) );
      
        tint( red(esteColor) , green(esteColor) , blue(esteColor) , 50 );
      
        push();
        translate( x, y );
        rotate( angulo+angulo2 );
        scale( tamanio );
        image( pinceladas[cual] , 0 , 0 );  
        pop();
      
      }
    }
  }
}

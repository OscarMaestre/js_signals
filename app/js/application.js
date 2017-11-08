
var registro;
var lienzo;
var ctx;
var anchura_lienzo, altura_lienzo;
var x_nuevo_origen , y_nuevo_origen ;
    
function dibujar_circulo(x, y, radio, contexto){
    
    contexto.beginPath();
    x=x-radio;
    y=y-radio;
    contexto.arc(x, y, radio, 0, 2 * Math.PI, false);
        
    contexto.lineWidth = 1;
    contexto.strokeStyle = '#003300';
    contexto.stroke();
    registro.append("Dibujado ");
    registro.append("("+ x+ "," +y+") radio "+radio);
    registro.append("\n");
}


function dibujar_onda(){
    
    var amplitud    =   $("#amplitud").val();
    var frecuencia  =   $("#amplitud").val();
    var fase        =   $("#fase").val();
    
    ctx.save();
    
    
    
    registro.append("Anchura:"+anchura_lienzo+" altura:"+altura_lienzo+"\n");
    
    ctx.clearRect(0, 0, anchura_lienzo, altura_lienzo);
    
        
    dibujar_circulo ( x_nuevo_origen, y_nuevo_origen, amplitud*8, ctx);
    ctx.restore();
    
    
} //Fin de dibujar seno

function inicio(){
    $("#amplitud").change(dibujar_onda);
    $("#frecuencia").change(dibujar_onda);
    $("#fase").change(dibujar_onda);
    registro=$("#log");
    registro.append("Inicio\n");
    lienzo = document.getElementById("lienzo");
    ctx = lienzo.getContext("2d");
    anchura_lienzo  =   lienzo.width;
    altura_lienzo   =   lienzo.height ;
    x_nuevo_origen  =   anchura_lienzo/4;
    y_nuevo_origen  =   altura_lienzo/2;
    ctx.translate(x_nuevo_origen, y_nuevo_origen);
    registro.append("Empezmos\n");
}
$(document).ready(inicio);
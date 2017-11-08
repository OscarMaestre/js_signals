
var registro;
var escenario;

function dibujar_circulo(x, y, radio, contexto){
    
    contexto.beginPath();
    
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
    
    
    var c = document.getElementById("lienzo");
    var ctx = c.getContext("2d");
    ctx.save()
    var anchura_lienzo  =   c.width;
    var altura_lienzo   =   c.height ;
    registro.append("Anchura:"+anchura_lienzo+" altura:"+altura_lienzo+"\n");
    var x_nuevo_origen  =   anchura_lienzo/4;
    var y_nuevo_origen  =   altura_lienzo/2;
    
    ctx.clearRect(0, 0, anchura_lienzo, altura_lienzo);
    
    ctx.translate(x_nuevo_origen, y_nuevo_origen);
    
    dibujar_circulo ( x_nuevo_origen, y_nuevo_origen, amplitud*8, ctx);
    ctx.restore()
    
} //Fin de dibujar seno

function inicio(){
    $("#amplitud").change(dibujar_onda);
    $("#frecuencia").change(dibujar_onda);
    $("#fase").change(dibujar_onda);
    registro=$("#log");
    registro.append("Inicio\n")
    
}
$(document).ready(inicio);
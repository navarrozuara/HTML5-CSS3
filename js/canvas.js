var color1 = "rgba(255,255,255,1)";
var color2 = "rgba(0,0,0,0.9)";
var escala = 0.5;

//Dibujo el icono Contacto

var c=document.getElementById("iconocontacto");
var cxt=c.getContext("2d");

cxt.fillStyle=(color1);
cxt.beginPath();
cxt.arc(escala*50-10,escala*25,escala*20,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(color1);
cxt.beginPath();
cxt.arc(escala*50-10,escala*90,escala*40,Math.PI,Math.PI*2,false);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(color2);
cxt.beginPath();
cxt.arc(escala*50+10,escala*25,escala*20,0,Math.PI*2,true);
cxt.closePath;
cxt.fill();

cxt.fillStyle=(color2);
cxt.beginPath();
cxt.arc(escala*50+10,escala*90,escala*40,Math.PI,Math.PI*2,false);
cxt.closePath;
cxt.fill();
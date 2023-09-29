
nom = prompt("Ingresa tu nombre y apellido :D");
alert("El nombre del usuario es:"+nom);
preg1=prompt("1.¿Cuándo se realizará la inauguración de las Olimpiadas?\nA:Lunes 02 de octubre\nB:Viernes 29 de setiembre \nC:Jueves 28 de setiembre");
if (preg1=="B"){    
    preg1=1
}
else{
    preg2=0
}
preg2=prompt("¿De qué color es la promoción de 2do de secundaria?\nA:Celeste o Turquesa\nB:Rojo\nC:Morado");

if(preg2=="A"){
    preg2 = 1;
}else{
    preg2 = 0;
}
preg3 = prompt("Nuevo deporte incluido este año\nA:Futsal femenino\nB:Balonmano\nC:Marcha atletica");

if(preg3=="C"){
    preg3 = 1;
}else{
    preg3 = 0;
} 

total = preg1 + preg2 + preg3 ;

document.write("<h1>Cuestionario sobre Olimpiadas</h1>");
document.write("<p>Estos fueron tus resultados...</p>"+"<br>");
document.write("<p>Estudiante: </p>" + nom + "<br>");
document.write("<p>Obtuviste: </p>" + total + "<br>");

if(total<3){
    document.write("<p>Lo siento, lo puedes hacer mejor</p>");
}else{
    document.write("<p>Felicidades, lo haz hecho bien</p>");
}
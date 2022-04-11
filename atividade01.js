var num1,num2,res;

num1=prompt("Digite um número");
num1=parseInt(num1);

num2=prompt("Digite outro número");
num2=parseInt(num2);

document.write("<h1>Amanda Gomes Lobo, RA: 420111642</h1>");
document.write("<h2>Números digitados: <br> 1º número: "+num1+"<br> 2º número: "+num2+"<hr></h2>");
res=(num1==num2);
document.write("<h3>Igualdade: "+res+"<br>");

res=(num1===num2);
document.write("<br> Idêntico: "+res+"<br>");

res=(num1!=num2);
document.write("<br> Não há igualdade: "+res+"<br>");

res=(num1!==num2);
document.write("<br>Não é idêntico: "+res+"<br>");

res=(num1>num2);
document.write("<br>Maior: "+res+"<br>");

res=(num1<num2);
document.write("<br>Menor: "+res+"<br>");

res=(num1>=num2);
document.write("<br>Maior ou igual: "+res+"<br>");

res=(num1<=num2);
document.write("<br>Menor ou igual: "+res+"<br>");

/**
 * Created by Luciano on 6/5/2017.
 */

/**
 * Conversión de Unidades Metros, Pulgadas, Pies y Yardas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs metros, yardas, pies o pulgadas
 * @return
 */

function cambiarUnidades(id, valor) {
    var metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor= valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor inválido"+id);
        metro="";
        pulgada="";
        pie="";
        yarda="";
    }else if(id=="metro"){
        metro=valor;
        pulgada=39.3701*valor;
        pie=3.28084*valor;
        yarda=1.09361*valor;
    }else if(id=="pulgada"){
        pulgada=valor;
        metro=0.0254*valor;
        pie=0.08333*valor;
        yarda=0.02777778*valor;
    }else if(id=="pie"){
        pie=valor;
        metro=0.3048*valor;
        pulgada=12*valor;
        yarda=0.333*valor;
    }else if(id=="yarda"){
        yarda=valor;
        pulgada=36*valor;
        pie=3*valor;
        metro=0.9144*valor;
    }

    document.lasUnidades.unid_metro.value= Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value=Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value=Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value=Math.round(yarda*100)/100;
}

/**
 * Conversión de Unidades Grados a Radianes
 * @method convertirGR
 * @param {string} id - El id de los inputs radianes y grados
 * @return
 */

function convertirGR(id){
    var grad, rad;
    if (id=="grados") {
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

/**
 * Mostrar o Ocultar elementos
 * @method mostrar_ocultar
 * @param {string} id - El id del input divMo
 * @return
 */

function mostrar_ocultar(valorMo) {
    if (valorMo=="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    }else if(valorMo=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }
}

/**
 * Operaciones Aritmeticas
 * @method calcularSuma()//calcularResta()//calcularMult()//calcularDiv()
 * @param {string} id - El id del input num1 y num2
 * @return
 */

function calcularSuma() {
    var num1,num2;

    num1=document.getElementsByName("sum_num1")[0].value;
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML= Number(num1)+Number(num2);
}

function calcularResta() {
    var num1,num2;

    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML= Number(num1)-Number(num2);
}

function calcularMult() {
    var num1,num2;

    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML= Number(num1)*Number(num2);
}

function calcularDiv() {
    var num1,num2;

    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML= Number(num1)/Number(num2);
}

function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado() {
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var Xmax = canvas.width;
    var Ymax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#531891";
    ctx.fillRect(0+margen,Ymax-40-margen,40,40);

    ctx.arc(Xmax/2,Ymax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
}

var bandera;

function dibujar(event) {
    var canvas = document.getElementById("canvasPaint");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX,posY);

    canvas.onmousedown = function(){bandera = true};
    canvas.onmouseup = function(){bandera = false};

    if (bandera == true) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

function limpiarCanvas(){
    var canvas = document.getElementById("canvasPaint");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var anchoMax = canvas.width;
    var alturaMax = canvas.height;

    //Lineas Horizontales
    ctx.beginPath();
    for(var i=0;i<alturaMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //Lineas Verticales
    ctx.beginPath();
    for(var i=0;i<anchoMax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i,alturaMax);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle = "#ff0058";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle = "#ff0058";
    ctx.stroke();
    ctx.closePath();
}
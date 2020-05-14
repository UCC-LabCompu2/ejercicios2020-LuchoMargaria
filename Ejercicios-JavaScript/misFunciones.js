/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversión de Unidades Metros, Pulgadas, Pies y Yardas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los inputs metros, yardas, pies o pulgadas
 * @return
 */

function cambiarUnidades(id, valor) {
    if(isNaN(valor)){
        alert("Se ingresó un valor inválido");
        document.lasUnidades.unid_metro.value="";
        document.lasUnidades.unid_pulgada.value= "";
        document.lasUnidades.unid_pie.value= "";
        document.lasUnidades.unid_yarda.value= "";
    }else if (id=="metro"){
        document.lasUnidades.unid_pulgada.value= 39.3701 * valor;
        document.lasUnidades.unid_pie.value= 3.28084 * valor;
        document.lasUnidades.unid_yarda.value= 1.09361 * valor;
    }else if (id=="pulgada"){
        document.lasUnidades.unid_metro.value= 0.0254 * valor;
        document.lasUnidades.unid_pie.value= 0.0833333 * valor;
        document.lasUnidades.unid_yarda.value= 0.0277778 * valor;
    }else if (id=="pie"){
        document.lasUnidades.unid_metro.value= 0.3048 * valor;
        document.lasUnidades.unid_pulgada.value= 12 * valor;
        document.lasUnidades.unid_yarda.value= 0.333333 * valor;
    }else if (id=="yarda"){
        document.lasUnidades.unid_metro.value= 0.9143990856 * valor;
        document.lasUnidades.unid_pulgada.value= 35.999964 * valor;
        document.lasUnidades.unid_pie.value= 2.999997 * valor;
    }


}
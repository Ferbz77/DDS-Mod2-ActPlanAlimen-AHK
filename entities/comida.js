export class Comida{
    tipo;
    descripcion;
    composicion = {};
    ingredientes;

    agregarComidas(){
        this.comidas.push();
    }
//Permitir saber si el plan alimenticio es “fuerte en proteínas”: un plan alimenticio es “fuerte en proteínas” cuando el promedio de porcentaje de proteínas en todas las comidas AC es igual o superior al 50%.

    tieneProteinas(){
        return this.comidas.filter(comp => comp.composicion=="proteinas").length;
    }
    tieneVegetales(){
        return this.comidas.filter(comp => comp.composicion =="vegetales").length;
    }

    esColacion(){
        return this.tipo == "colacion";
    }
    
    esBebida(){
        return this.tipo == "bebida";
    }
}
export class PlanAlimenticio{
    paciente;
    profesional;
    edad;
    pesoActual;
    medidaCintura;
    duracion;
    comidas = [];
    objetivos = [];

    constructor(edad, pesoActual, medidaCintura, paciente, profesional){
        this.edad = edad;
        this.pesoActual = pesoActual;
        this.medidaCintura = medidaCintura;
        this.paciente = paciente;
        this.profesional = profesional;
    }

    //Permitir saber la cantidad total de comidas de un plan alimenticio.
    cantComidasDelPlan(){
        return this.comidas.length;
    }
   
    //Permitir saber la cantidad de comidas de un tipo en particular (DM/AC) de un plan alimenticio.

    cantDeComidasAC(){
        return this.comidas.filter(c => c.tipo=="AC").length;
    }
    cantDeComidasDM(){
        return this.comidas.filter(c => c.tipo=="DM").length;
    }

    //Permitir saber si el plan alimenticio es “fuerte en proteínas”: un plan alimenticio es “fuerte en proteínas” cuando el promedio de porcentaje de proteínas en todas las comidas AC es igual o superior al 50%.
    esFuerteEnProteinas(){
        const comidasAC = this.comidas.filter(c => c.tipo=="AC");
        
        if (this.cantDeComidasAC() == 0)
        return false;

        let sumaPorcentajesProteinas = 0;
         comidasAC.forEach(comida => {
         sumaPorcentajesProteinas += comida.tieneProteinas();
        });
        
        const promedioPorcentajeProteinas = sumaPorcentajesProteinas / this.cantDeComidasAC();

        return promedioPorcentajeProteinas >= 50;
    }

    //Permitir saber si el plan alimenticio es “bien verde”: un plan alimenticio es “bien verde” cuando el promedio de porcentaje de vegetales en todas las comidas AC es superior al 35%.
    esBienVerde(){
        const comidasAC = this.comidas.filter(c => c.tipo=="AC");
        
        if (this.cantDeComidasAC() == 0) 
        return false;
        
        let sumaPorcentajesVegetales = 0;
         comidasAC.forEach(comida =>{
         sumaPorcentajesVegetales += comida.tieneVegetales();
        })
            
        const promedioPorcentajeProteinas = sumaPorcentajesProteinas / this.cantDeComidasAC();

        return promedioPorcentajeProteinas >= 35
    }

    //Permitir saber la cantidad total de colaciones del plan alimenticio.
    cantTotalDeColaciones(){
        return this.comidas.filter(c=> c.esColacion()).length;
    }

    //Permitir saber la cantidad total de bebidas del plan alimenticio.
    cantTotalDeBebidas(){
        return this.comidas.filter(c=> c.esBebida()).length;
    }

    //Permitir obtener la calificación final de un plan alimenticio, en base al cumplimiento de sus objetivos.
    cantObjetivosCumplidos(){
       //filtrar los objetivos con atributos esta cumplido= true y dsp contar la cantidad
        return this.objetivos.filter(o => o.estaCumplido).length;

    }

    calificacionFinal(){
        //necesito cantidad de objetivos para el  %
        const porcentajeDeCumplidos = (this.cantObjetivosCumplidos()/ this.objetivos.length) * 100;
        if (porcentajeDeCumplidos == 100)
        return "Excelente";
        if (porcentajeDeCumplidos >= 60)
        return "Muy Buena";
        if (porcentajeDeCumplidos >= 50)
        return "Buena";
        if (porcentajeDeCumplidos < 50)
        return "Regular";
    }
}
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
    CantComidasDelPlan(){
        return this.comidas.length;
    }

    totalComidasDelPlan(){
        if (this.duracion == "semanal"){
            return this.totalComidasDelPlan = 28;
        } else if (this.duracion == "quincenal"){
            return this.totalComidasDelPlan = 60;
        } else if (this.duracion == "mensual"){
            return this.totalComidasDelPlan = 120;
        }
    }

    cantDeComidasAC(){
        return this.comidas.filter(c => c.tipo=="AC").length;
    }

    esFuerteEnProteinas(){
        return this.comidas.filter(c => c.tipo=="AC")
        
        
    }

    cantDeComidasDM(){
        return this.comidas.filter(c => c.tipo=="DM").length;
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
export class Comida{
   
    constructor(tipo, descripcion, composicion = {}) {
       this.tipo = tipo;
       this.descripcion = descripcion;
       this.composicion = composicion;
      }
  
  //Permitir saber si el plan alimenticio es “fuerte en proteínas”: un plan alimenticio es “fuerte en proteínas” cuando el promedio de porcentaje de proteínas en todas las comidas AC es igual o superior al 50%.
  
      tieneProteinas(){
          return this.composicion.proteinas || 0;
      }
  
      tieneVegetales(){
         return this.composicion.vegetales || 0;
      }
  
      esColacion(){
          return this.tipo == "Colacion";
      }
      
      esBebida(){
          return this.tipo == "Bebida";
      }
  }
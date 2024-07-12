import { PlanAlimenticio } from "../entities/planAlimenticio";
import { Comida } from "../entities/comida";
import { Objetivo } from "../entities/objetivo";

//test cantidad de comidas en un plan alimenticio
test("Un plan alimenticio tiene 3 comidas", () =>{
    const plan = new PlanAlimenticio();

    const comida1 = new Comida ("AC", "Pollo con arroz");
    const comida2 = new Comida ("DM", "Tostadas con queso");
    const comida3 = new Comida ("AC", "Pescado con vegetales");
    
    plan.agregarComidas(comida1);
    plan.agregarComidas(comida2);
    plan.agregarComidas(comida3);

    expect(plan.cantComidasDelPlan()).toBe(3);
});

//test calificacion final de un plan alimenticio

test('debería devolver "Muy Buena" cuando el 60% o mas de los objetivos están cumplidos', () => {
    const plan = new PlanAlimenticio()
    
    const objetivo1 = new Objetivo("Objetivo 1", true);
    const objetivo2 = new Objetivo("Objetivo 2", true);
    const objetivo3 = new Objetivo("Objetivo 3", false);

    plan.agregarObjetivos(objetivo1)
    plan.agregarObjetivos(objetivo2)
    plan.agregarObjetivos(objetivo3)

    expect(plan.calificacionFinal()).toBe("Muy Buena");
});

//test cantidad de comidas AC y DM
test("hay 2 comidas AC en el plan", ()=>{
    const plan = new PlanAlimenticio();

    const comida1 = new Comida ("AC", "Pollo con verduras");
    const comida2 = new Comida ("DM", "Yogur con frutas");
    const comida3 = new Comida ("AC", "Carne con ensalada");

    plan.agregarComidas(comida1);
    plan.agregarComidas(comida2);
    plan.agregarComidas(comida3);

    expect(plan.cantDeComidasAC()).toBe(2);
});

test("hay 3 comidas DM en el plan", ()=>{
    const plan = new PlanAlimenticio();

    const comida1 = new Comida ("DM", "Tostadas con queso");
    const comida2 = new Comida ("DM", "Yogur con frutas");
    const comida3 = new Comida ("DM", "Galletitias con mermelada");
    const comida4 = new Comida ("AC", "Carne con pure");

    plan.agregarComidas(comida1);
    plan.agregarComidas(comida2);
    plan.agregarComidas(comida3);
    plan.agregarComidas(comida4);

    expect(plan.cantDeComidasDM()).toBe(3);
});

//test de un plan es fuerte en proteinas

test("este plan es fuerte en proteinas", ()=>{
    const plan = new PlanAlimenticio();

    const comida1 = new Comida('AC', 'Pollo con arroz', { proteinas: 60});
    const comida2 = new Comida('AC', 'Carne con verduras', { proteinas: 50});
    const comida3 = new Comida('AC', 'Pescado con ensalada', { proteinas: 70});

    plan.agregarComidas(comida1);
    plan.agregarComidas(comida2);
    plan.agregarComidas(comida3);

    expect(plan.esFuerteEnProteinas()).toBe(true);
});


test("este plan no es fuerte en proteinas", ()=>{
    const plan = new PlanAlimenticio();

    const comida1 = new Comida('AC', 'Pollo con arroz', { proteinas: 20});
    const comida2 = new Comida('AC', 'Carne con verduras', { proteinas: 40});
    const comida3 = new Comida('AC', 'Pescado con ensalada', { proteinas: 30});

    plan.agregarComidas(comida1);
    plan.agregarComidas(comida2);
    plan.agregarComidas(comida3);

    expect(plan.esFuerteEnProteinas()).toBe(false);
});


//test de un plan es bien verde
test("este plan es bien verde", ()=>{
    const plan = new PlanAlimenticio();

    const comida1 = new Comida('AC', 'Pollo con vegetales', { vegetales: 50 });
    const comida2 = new Comida('AC', 'Carne con ensalada', { vegetales: 50 });
    const comida3 = new Comida('AC', 'Pescado con brócoli', { vegetales: 50 });
   
    plan.agregarComidas(comida1);
    plan.agregarComidas(comida2);
    plan.agregarComidas(comida3);

    expect(plan.esBienVerde()).toBe(true);
});

test("este plan no es bien verde", ()=>{
    const plan = new PlanAlimenticio();

    const comida1 = new Comida('AC', 'Pollo con vegetales', { vegetales: 30 });
    const comida2 = new Comida('AC', 'Carne con verduras', { proteinas: 40 });
    const comida3 = new Comida('AC', 'Pescado con brócoli', { vegetales: 10 });
   
    plan.agregarComidas(comida1);
    plan.agregarComidas(comida2);
    plan.agregarComidas(comida3);

    expect(plan.esBienVerde()).toBe(false);
});


//test cantidad total de colaciones del plan
test("Un plan alimenticio tiene 2 colaciones", () =>{
    const plan = new PlanAlimenticio();

    const comida1 = new Comida ("Colacion", "Yogur con frutas");
    const comida2 = new Comida ("DM", "Tostadas con manteca");
    const comida3 = new Comida ("Colacion", "Frutos secos");
    
    plan.agregarComidas(comida1);
    plan.agregarComidas(comida2);
    plan.agregarComidas(comida3);

    expect(plan.cantTotalDeColaciones()).toBe(2);
});


//test cantidad total de bebidas del plan
test("Un plan alimenticio tiene 1 bebida", () =>{
    const plan = new PlanAlimenticio();

    const comida1 = new Comida ("Bebida", "Jugo de pera");
    const comida2 = new Comida ("AC", "Pollo con arroz");
    const comida3 = new Comida ("Colacion", "Frutos secos");
    
    plan.agregarComidas(comida1);
    plan.agregarComidas(comida2);
    plan.agregarComidas(comida3);

    expect(plan.cantTotalDeBebidas()).toBe(1);
});
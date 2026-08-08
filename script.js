// ======================================================
// PRODUCT DECISION FRAMEWORK
// Versión 3.0 - Dropi Challenge
// ======================================================

const startBtn = document.getElementById("startBtn");
const content = document.getElementById("content");

//======================================================
// Estado de la aplicación
//======================================================

const appState = {

    currentStep: 0,

    discovery: {

        initialDecision: "",
        businessReason: "",

        step2Selections: [],
        step2Strategy: "",

        opportunityHypothesis: "",
        hypothesisEvidence: ""

    },

    recommendation: {

        frameworkRecommendation: "",
        accepted: true,
        justification: ""

    },

    validation: {

        hypothesis: "",
        experiment: "",
        kpis: "",
        duration: ""

    }

};

//======================================================
// Configuración del Framework
//======================================================

const steps = [

    {

        title: "Descubrimiento basado en evidencia",

        description:
            "Comprende el reto del negocio y decide dónde iniciar el análisis."

    },

    {

        title: "Priorización de la evidencia",

        description:
            "Selecciona la evidencia necesaria para validar tu decisión."

    },

    {

        title: "Hipótesis de mayor oportunidad",

        description:
            "Formula la hipótesis con mayor potencial de impacto."

    },

    {

        title: "Análisis de la oportunidad",

        description:
            "Justifica por qué esta hipótesis representa la mejor oportunidad para el negocio."

    },

    {

        title: "Decisión recomendada",

        description:
            "El framework consolida la evidencia y responde el desafío de negocio."

    }

];

//======================================================
// Inicio
//======================================================

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";

    loadStep(0);

});

//======================================================
// Navegación
//======================================================

function loadStep(step) {

    appState.currentStep = step;

    updateSidebar();

    updateProgress();

    switch (step) {

        case 0:
            renderStep1();
            break;

        case 1:
            renderStep2();
            break;

        case 2:
            renderStep3();
            break;

        case 3:
            renderStep4();
            break;

        case 4:
            renderStep5();
            break;

    }

}

//======================================================
// Sidebar
//======================================================

function updateSidebar() {

    for (let i = 1; i <= 5; i++) {

        const item = document.getElementById("step" + i);

        if (!item) continue;

        item.classList.remove("active", "completed");

        if (i - 1 < appState.currentStep) {

            item.classList.add("completed");

        }

        if (i - 1 === appState.currentStep) {

            item.classList.add("active");

        }

    }

}

//======================================================
// Barra de progreso
//======================================================

function updateProgress() {

    const percentages = [20, 40, 60, 80, 100];

    const insights = [

        "Se definió el punto de partida del análisis.",

        "La evidencia priorizada ya orienta la investigación.",

        "Existe una hipótesis de mayor oportunidad.",

        "La hipótesis ya cuenta con una justificación.",

        "El framework está listo para responder el desafío."

    ];

    const progressBar = document.getElementById("progressBar");
    const progressText = document.getElementById("progressText");
    const insightText = document.getElementById("insightText");

    if (progressBar) {

        progressBar.style.width = percentages[appState.currentStep] + "%";

    }

    if (progressText) {

        progressText.innerText = percentages[appState.currentStep] + "%";

    }

    if (insightText) {

        insightText.innerText = insights[appState.currentStep];

    }

}
//======================================================
// PASO 1 - DESCUBRIMIENTO BASADO EN EVIDENCIA
//======================================================

function renderStep1(){

content.innerHTML=`

<div class="card">

<h3>${steps[0].title}</h3>

<p>

El objetivo de esta primera fase es comprender el caso de negocio y decidir, con base en la evidencia disponible, dónde existe la mayor oportunidad de generar impacto.

</p>

<div class="info-note">

<strong>ℹ️ ¿Qué significa "Proveedor en proceso de activación"?</strong>

<p>

Corresponde al proveedor que ya conoce Dropi, se registró, publicó su catálogo y completó el proceso inicial de configuración, pero <strong>aún no ha realizado su primera venta.</strong>

El proceso de activación comprende todo el recorrido desde el registro hasta la primera venta exitosa.

</p>

</div>

<label>

Con la información disponible, ¿por dónde iniciarías el análisis?

</label>

<div class="options">

<label>

<input
type="radio"
name="decision"
value="Activacion">

Proveedores en proceso de activación

</label>

<label>

<input
type="radio"
name="decision"
value="Activos">

Proveedores activos con bajas ventas

</label>

<label>

<input
type="radio"
name="decision"
value="Ambos">

Analizar ambos grupos antes de decidir

</label>

</div>

<label>

¿Por qué consideras que este grupo representa la mayor oportunidad para alcanzar el objetivo del negocio?

</label>

<textarea

id="businessReason"

placeholder="Explica brevemente por qué comenzarías por este grupo.">

</textarea>

<button

class="nextBtn"

onclick="saveStep1()">

Continuar →

</button>

</div>

`;

}

function saveStep1(){

const selected=document.querySelector('input[name="decision"]:checked');

if(!selected){

alert("Selecciona una opción para continuar.");

return;

}

appState.discovery.initialDecision=selected.value;

appState.discovery.businessReason=document.getElementById("businessReason").value;

loadStep(1);

}
//======================================================
// PASO 2 - PRIORIZACIÓN DE LA EVIDENCIA
//======================================================

function renderStep2(){

content.innerHTML=`

<div class="card">

<h3>${steps[1].title}</h3>

<p>

Ahora selecciona la evidencia que analizarías para validar la decisión tomada en el paso anterior.

</p>

${getStep2Content()}

<button

class="nextBtn"

onclick="saveStep2()">

Guardar y continuar →

</button>

</div>

`;

}

function getStep2Content(){

const decision=appState.discovery.initialDecision;

//------------------------------------------------------
// PROVEEDORES EN ACTIVACIÓN
//------------------------------------------------------

if(decision==="Activacion"){

return`

<label>

¿Qué evidencia revisarías para entender por qué estos proveedores aún no realizan su primera venta?

</label>

<div class="checkbox-grid">

<label><input type="checkbox" value="Catálogo publicado">Catálogo publicado</label>

<label><input type="checkbox" value="Calidad de imágenes">Calidad de imágenes</label>

<label><input type="checkbox" value="Tiempo desde el registro">Tiempo desde el registro</label>

<label><input type="checkbox" value="Productos publicados">Productos publicados</label>

<label><input type="checkbox" value="Conversión a primera venta">Conversión a primera venta</label>

<label><input type="checkbox" value="Abandono del proceso de activación">Abandono del proceso de activación</label>

<label><input type="checkbox" value="Acompañamiento recibido">Acompañamiento recibido</label>

<label><input type="checkbox" value="Uso de herramientas de Dropi">Uso de herramientas de Dropi</label>

</div>

`;

}

//------------------------------------------------------
// PROVEEDORES ACTIVOS
//------------------------------------------------------

if(decision==="Activos"){

return`

<label>

¿Qué evidencia revisarías para explicar la disminución en las ventas?

</label>

<div class="checkbox-grid">

<label><input type="checkbox" value="Ventas">Ventas</label>

<label><input type="checkbox" value="SLA">Cumplimiento SLA</label>

<label><input type="checkbox" value="Cancelaciones">Cancelaciones</label>

<label><input type="checkbox" value="Garantías">Garantías</label>

<label><input type="checkbox" value="Rechazos">Rechazos</label>

<label><input type="checkbox" value="Tiempo promedio de despacho">Tiempo promedio de despacho</label>

<label><input type="checkbox" value="Calificación del proveedor">Calificación del proveedor</label>

<label><input type="checkbox" value="Feedback de clientes">Feedback de clientes</label>

</div>

`;

}

//------------------------------------------------------
// AMBOS GRUPOS
//------------------------------------------------------

return`

<label>

Antes de profundizar, ¿qué estrategia utilizarías?

</label>

<div class="options">

<label>

<input
type="radio"
name="strategy"
value="Activacion">

Analizar primero proveedores en proceso de activación.

</label>

<label>

<input
type="radio"
name="strategy"
value="Activos">

Analizar primero proveedores activos con bajas ventas.

</label>

<label>

<input
type="radio"
name="strategy"
value="Comparar">

Comparar ambos grupos antes de priorizar.

</label>

</div>

`;

}

function saveStep2(){

const checks=document.querySelectorAll('input[type="checkbox"]:checked');

const strategy=document.querySelector('input[name="strategy"]:checked');

if(checks.length===0 && !strategy){

alert("Selecciona al menos una opción para continuar.");

return;

}

appState.discovery.step2Selections=[...checks].map(c=>c.value);

if(strategy){

appState.discovery.step2Strategy=strategy.value;

}

loadStep(2);

}
//======================================================
// PASO 3 - HIPÓTESIS DE MAYOR OPORTUNIDAD
//======================================================

function renderStep3(){

const decision=appState.discovery.initialDecision;

let options="";

if(decision==="Activacion"){

options=`

<label>

<input
type="radio"
name="hypothesis"
value="Proceso de incorporación complejo">

El proceso de incorporación genera fricción antes de la primera venta.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Catálogo poco atractivo">

El catálogo publicado no genera suficiente confianza.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Falta de acompañamiento">

Los nuevos proveedores necesitan mayor acompañamiento durante la activación.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Baja visibilidad">

Los productos tienen poca visibilidad dentro del ecosistema.

</label>

`;

}

else if(decision==="Activos"){

options=`

<label>

<input
type="radio"
name="hypothesis"
value="Problemas de cumplimiento SLA">

El cumplimiento del SLA afecta la conversión.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Problemas de calidad">

La calidad del producto impacta la recompra.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Catálogo poco competitivo">

El catálogo dejó de ser competitivo.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Experiencia del cliente">

La experiencia del cliente reduce las ventas recurrentes.

</label>

`;

}

else{

options=`

<label>

<input
type="radio"
name="hypothesis"
value="Activación">

La mayor oportunidad parece estar en los proveedores en activación.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Activos">

La mayor oportunidad parece estar en los proveedores activos.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Más evidencia">

Se requiere mayor evidencia antes de priorizar.

</label>

`;

}

content.innerHTML=`

<div class="card">

<h3>${steps[2].title}</h3>

<p>

Con base en la evidencia seleccionada, formula la hipótesis que representa la mayor oportunidad para cumplir el reto del negocio.

</p>

<label>

¿Cuál es la hipótesis que mejor explica dónde intervenir?

</label>

<div class="options">

${options}

</div>

<label>

¿Qué evidencia respalda esta hipótesis?

</label>

<textarea

id="hypothesisEvidence"

placeholder="Explica brevemente por qué esta hipótesis representa la mayor oportunidad de impacto.">

</textarea>

<button

class="nextBtn"

onclick="saveStep3()">

Guardar y continuar →

</button>

</div>

`;

}

function saveStep3(){

const hypothesis=document.querySelector('input[name="hypothesis"]:checked');

if(!hypothesis){

alert("Selecciona una hipótesis para continuar.");

return;

}

appState.discovery.opportunityHypothesis=hypothesis.value;

appState.discovery.hypothesisEvidence=document.getElementById("hypothesisEvidence").value;

loadStep(3);

}
//======================================================
// PASO 3 - HIPÓTESIS DE MAYOR OPORTUNIDAD
//======================================================

function renderStep3(){

const decision=appState.discovery.initialDecision;

let options="";

if(decision==="Activacion"){

options=`

<label>

<input
type="radio"
name="hypothesis"
value="Proceso de incorporación complejo">

El proceso de incorporación genera fricción antes de la primera venta.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Catálogo poco atractivo">

El catálogo publicado no genera suficiente confianza.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Falta de acompañamiento">

Los nuevos proveedores necesitan mayor acompañamiento durante la activación.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Baja visibilidad">

Los productos tienen poca visibilidad dentro del ecosistema.

</label>

`;

}

else if(decision==="Activos"){

options=`

<label>

<input
type="radio"
name="hypothesis"
value="Problemas de cumplimiento SLA">

El cumplimiento del SLA afecta la conversión.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Problemas de calidad">

La calidad del producto impacta la recompra.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Catálogo poco competitivo">

El catálogo dejó de ser competitivo.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Experiencia del cliente">

La experiencia del cliente reduce las ventas recurrentes.

</label>

`;

}

else{

options=`

<label>

<input
type="radio"
name="hypothesis"
value="Activación">

La mayor oportunidad parece estar en los proveedores en activación.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Activos">

La mayor oportunidad parece estar en los proveedores activos.

</label>

<label>

<input
type="radio"
name="hypothesis"
value="Más evidencia">

Se requiere mayor evidencia antes de priorizar.

</label>

`;

}

content.innerHTML=`

<div class="card">

<h3>${steps[2].title}</h3>

<p>

Con base en la evidencia seleccionada, formula la hipótesis que representa la mayor oportunidad para cumplir el reto del negocio.

</p>

<label>

¿Cuál es la hipótesis que mejor explica dónde intervenir?

</label>

<div class="options">

${options}

</div>

<label>

¿Qué evidencia respalda esta hipótesis?

</label>

<textarea

id="hypothesisEvidence"

placeholder="Explica brevemente por qué esta hipótesis representa la mayor oportunidad de impacto.">

</textarea>

<button

class="nextBtn"

onclick="saveStep3()">

Guardar y continuar →

</button>

</div>

`;

}

function saveStep3(){

const hypothesis=document.querySelector('input[name="hypothesis"]:checked');

if(!hypothesis){

alert("Selecciona una hipótesis para continuar.");

return;

}

appState.discovery.opportunityHypothesis=hypothesis.value;

appState.discovery.hypothesisEvidence=document.getElementById("hypothesisEvidence").value;

loadStep(3);

}
//======================================================
// PASO 5 - RESPUESTA AL DESAFÍO
//======================================================

function renderStep5(){

const evidence =
appState.discovery.step2Selections.length > 0
? appState.discovery.step2Selections.join(", ")
: appState.discovery.step2Strategy;

content.innerHTML=`

<div class="card">

<h2>🎯 Respuesta al desafío</h2>

<p>

El framework consolidó la información registrada durante el Discovery y construyó una recomendación basada en evidencia.

</p>

<div class="insight-box">

<h3>¿Por dónde empezarías tú, y por qué?</h3>

<p>

${appState.recommendation.frameworkRecommendation}

</p>

</div>

<div class="known-box">

<h3>🧭 ¿Cómo llegó el framework a esta decisión?</h3>

<ul>

<li><strong>Caso de estudio:</strong> Proveedores de la categoría Moda.</li>

<li><strong>Decisión inicial:</strong> ${appState.discovery.initialDecision}</li>

<li><strong>Evidencia priorizada:</strong> ${evidence}</li>

<li><strong>Hipótesis de oportunidad:</strong> ${appState.discovery.opportunityHypothesis}</li>

<li><strong>Justificación:</strong> ${appState.discovery.impactReason}</li>

<li><strong>Riesgo identificado:</strong> ${appState.discovery.risk}</li>

</ul>

</div>

<div class="goal-box">

<h3>✅ Próximo paso recomendado</h3>

<p>

Antes de desarrollar una solución de producto, el framework recomienda validar esta hipótesis mediante un experimento controlado que permita confirmar su impacto sobre el negocio.

</p>

</div>

<label>

¿Estás de acuerdo con esta decisión?

</label>

<div class="options">

<label>

<input
type="radio"
name="decision"
value="yes"
checked>

Sí, continuar con el diseño de validación.

</label>

<label>

<input
type="radio"
name="decision"
value="no">

No, deseo replantear el análisis.

</label>

</div>

<label>

Comentarios (opcional)

</label>

<textarea

id="justification"

placeholder="Si no estás de acuerdo, explica brevemente el motivo.">

</textarea>

<button

class="nextBtn"

onclick="saveRecommendation()">

Continuar al diseño de validación →

</button>

</div>

`;

}

function saveRecommendation(){

const decision=document.querySelector('input[name="decision"]:checked').value;

appState.recommendation.accepted=(decision==="yes");

appState.recommendation.justification=document.getElementById("justification").value;

if(!appState.recommendation.accepted){

loadStep(0);

return;

}

renderValidation();

}
//======================================================
// DISEÑO DE VALIDACIÓN
//======================================================

function renderValidation(){

content.innerHTML=`

<div class="card">

<h2>🧪 Diseño de validación</h2>

<p>

Antes de invertir en el desarrollo de una solución, el siguiente paso consiste en validar que la hipótesis realmente genere el impacto esperado sobre el negocio.

</p>

<div class="goal-box">

<h3>Hipótesis a validar</h3>

<p>

${appState.discovery.opportunityHypothesis}

</p>

</div>

<label>

Hipótesis del experimento

</label>

<textarea

id="hypothesis"

placeholder="Si implementamos esta iniciativa esperamos que...">

</textarea>

<label>

¿Cómo validarías esta hipótesis?

</label>

<textarea

id="experiment"

placeholder="Describe el experimento que ejecutarías.">

</textarea>

<label>

¿Cómo medirías el éxito?

</label>

<textarea

id="kpis"

placeholder="Ej.: % de proveedores con primera venta, Ventas, SLA, Calidad, Cancelaciones...">

</textarea>

<label>

Tiempo estimado del experimento

</label>

<input

id="duration"

placeholder="Ej.: 30 días">

<button

class="nextBtn"

onclick="saveValidation()">

Generar resumen ejecutivo →

</button>

</div>

`;

}

function saveValidation(){

appState.validation.hypothesis=document.getElementById("hypothesis").value;

appState.validation.experiment=document.getElementById("experiment").value;

appState.validation.kpis=document.getElementById("kpis").value;

appState.validation.duration=document.getElementById("duration").value;

renderExecutiveBrief();

}
//======================================================
// RESUMEN EJECUTIVO
//======================================================

function renderExecutiveBrief(){

const evidence =
appState.discovery.step2Selections.length>0
? appState.discovery.step2Selections.join(", ")
: appState.discovery.step2Strategy;

content.innerHTML=`

<div class="card">

<h2>📄 Resumen ejecutivo</h2>

<div class="goal-box">

<h3>🎯 Respuesta al desafío</h3>

<p>

${appState.recommendation.frameworkRecommendation}

</p>

</div>

<hr>

<h3>🧭 Trazabilidad de la decisión</h3>

<ul>

<li><strong>Caso de estudio:</strong> Categoría Moda.</li>

<li><strong>Decisión inicial:</strong> ${appState.discovery.initialDecision}</li>

<li><strong>Evidencia priorizada:</strong> ${evidence}</li>

<li><strong>Hipótesis de oportunidad:</strong> ${appState.discovery.opportunityHypothesis}</li>

<li><strong>Justificación:</strong> ${appState.discovery.impactReason}</li>

<li><strong>Riesgo identificado:</strong> ${appState.discovery.risk}</li>

</ul>

<hr>

<h3>🧪 Diseño de validación</h3>

<p><strong>Hipótesis</strong></p>

<p>${appState.validation.hypothesis}</p>

<br>

<p><strong>Experimento</strong></p>

<p>${appState.validation.experiment}</p>

<br>

<p><strong>Indicadores de éxito</strong></p>

<p>${appState.validation.kpis}</p>

<br>

<p><strong>Tiempo estimado</strong></p>

<p>${appState.validation.duration}</p>

<hr>

<div class="known-box">

<h3>🚀 Próximos pasos</h3>

<p>

Ejecutar el experimento, analizar los resultados y utilizar la evidencia obtenida para decidir si la iniciativa debe escalarse, ajustarse o descartarse.

</p>

</div>

<button

class="nextBtn"

onclick="exportBrief()">

📄 Exportar resumen ejecutivo

</button>

</div>

`;

}

//======================================================
// EXPORTAR
//======================================================

function exportBrief(){

alert(`

🎉 ¡Gracias por utilizar el Product Decision Framework!

En la siguiente versión podrás:

• Exportar el resumen ejecutivo en PDF.
• Compartir el análisis.
• Guardar múltiples casos de estudio.
• Comparar decisiones entre distintos escenarios.

`);

}
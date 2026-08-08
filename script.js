// ======================================================
// PRODUCT DECISION FRAMEWORK - DROPI CHALLENGE
// Versión reconstruida
// ======================================================

const startBtn = document.getElementById("startBtn");
const content = document.getElementById("content");

const appState = {
    currentStep: 0,

    discovery: {
        initialDecision: "",
        businessReason: "",
        evidence: [],
        strategy: "",
        hypothesis: "",
        hypothesisEvidence: "",
        impactReason: "",
        risk: ""
    },

    recommendation: {
        frameworkRecommendation: ""
    },

    validation: {
        hypothesis: "",
        experiment: "",
        kpis: "",
        duration: ""
    }
};

const progressValues = [20,40,60,80,100];

const insightMessages = [
    "Se definió el punto de partida del análisis.",
    "La evidencia ya permite orientar la investigación.",
    "Existe una hipótesis priorizada.",
    "La oportunidad quedó justificada.",
    "El Framework respondió el desafío."
];

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";

    goToStep(0);

});

function goToStep(step){

    appState.currentStep = step;

    updateSidebar();

    updateProgress();

    switch(step){

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

function updateSidebar(){

    for(let i=1;i<=5;i++){

        const item=document.getElementById("step"+i);

        if(!item) continue;

        item.classList.remove("active","completed");

        if(i-1<appState.currentStep){

            item.classList.add("completed");

        }

        if(i-1===appState.currentStep){

            item.classList.add("active");

        }

    }

}

function updateProgress(){

    document.getElementById("progressBar").style.width =
        progressValues[appState.currentStep] + "%";

    document.getElementById("progressText").innerText =
        progressValues[appState.currentStep] + "%";

    document.getElementById("insightText").innerText =
        insightMessages[appState.currentStep];

}
//======================================================
// PASO 1 - INFORMACIÓN EXISTENTE
//======================================================

function renderStep1(){

content.innerHTML=`

<div class="card">

<h2>Información existente</h2>

<p>

Antes de proponer una solución debemos decidir por dónde comenzar el análisis.

</p>

<div class="info-note">

<strong>Business Challenge</strong>

<p>

Incrementar las ventas de los proveedores sin comprometer el cumplimiento de los SLA ni la calidad de los envíos.

</p>

</div>

<label>

¿Dónde iniciarías el análisis?

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

Analizaría ambos grupos antes de decidir

</label>

</div>

<label>

¿Por qué comenzarías por ese grupo?

</label>

<textarea

id="businessReason"

placeholder="Describe brevemente tu razonamiento...">${appState.discovery.businessReason}</textarea>

<button

class="nextBtn"

onclick="saveStep1()">

Guardar y continuar →

</button>

</div>

`;

}

function saveStep1(){

const selected=document.querySelector('input[name="decision"]:checked');

if(!selected){

alert("Selecciona una opción.");

return;

}

const reason=document.getElementById("businessReason").value.trim();

if(reason===""){

alert("Escribe una justificación.");

return;

}

appState.discovery.initialDecision=selected.value;

appState.discovery.businessReason=reason;

goToStep(1);

}
//======================================================
// PASO 2 - PRIORIZACIÓN DE LA EVIDENCIA
//======================================================

function renderStep2(){

let html="";

if(appState.discovery.initialDecision==="Activacion"){

html=`

<label>

¿Qué evidencia revisarías antes de tomar una decisión?

</label>

<div class="checkbox-grid">

<label><input type="checkbox" value="Tiempo hasta primera venta">Tiempo hasta primera venta</label>

<label><input type="checkbox" value="Productos publicados">Productos publicados</label>

<label><input type="checkbox" value="Calidad de imágenes">Calidad de imágenes</label>

<label><input type="checkbox" value="Descripciones completas">Descripciones completas</label>

<label><input type="checkbox" value="Abandono del proceso">Abandono del proceso</label>

<label><input type="checkbox" value="Uso de herramientas">Uso de herramientas de Dropi</label>

<label><input type="checkbox" value="Feedback proveedores">Feedback de proveedores</label>

<label><input type="checkbox" value="Tiempo de activación">Tiempo promedio de activación</label>

</div>

`;

}

else if(appState.discovery.initialDecision==="Activos"){

html=`

<label>

¿Qué evidencia analizarías?

</label>

<div class="checkbox-grid">

<label><input type="checkbox" value="Ventas">Ventas</label>

<label><input type="checkbox" value="SLA">Cumplimiento SLA</label>

<label><input type="checkbox" value="Cancelaciones">Cancelaciones</label>

<label><input type="checkbox" value="Calificaciones">Calificaciones</label>

<label><input type="checkbox" value="Reclamos">Reclamos</label>

<label><input type="checkbox" value="Tiempo despacho">Tiempo de despacho</label>

<label><input type="checkbox" value="Conversión">Conversión</label>

<label><input type="checkbox" value="Feedback clientes">Feedback de clientes</label>

</div>

`;

}

else{

html=`

<label>

Antes de profundizar ¿qué harías?

</label>

<div class="options">

<label>

<input
type="radio"
name="strategy"
value="Activacion">

Priorizar proveedores en activación

</label>

<label>

<input
type="radio"
name="strategy"
value="Activos">

Priorizar proveedores activos

</label>

<label>

<input
type="radio"
name="strategy"
value="Comparar">

Comparar ambos segmentos

</label>

</div>

`;

}

content.innerHTML=`

<div class="card">

<h2>Priorización de evidencia</h2>

<p>

Toda decisión de producto debe estar sustentada en evidencia.

</p>

${html}

<button

class="nextBtn"

onclick="saveStep2()">

Guardar y continuar →

</button>

</div>

`;

}

function saveStep2(){

appState.discovery.evidence=[];

document
.querySelectorAll('input[type="checkbox"]:checked')
.forEach(item=>{

appState.discovery.evidence.push(item.value);

});

const strategy=document.querySelector('input[name="strategy"]:checked');

if(appState.discovery.initialDecision==="Ambos"){

if(!strategy){

alert("Selecciona una estrategia.");

return;

}

appState.discovery.strategy=strategy.value;

}

else{

if(appState.discovery.evidence.length===0){

alert("Selecciona al menos una evidencia.");

return;

}

}

goToStep(2);

}
//======================================================
// PASO 3 - HIPÓTESIS DE MAYOR OPORTUNIDAD
//======================================================

function renderStep3(){

let options="";

switch(appState.discovery.initialDecision){

case "Activacion":

options=`

<label><input type="radio" name="hypothesis" value="Fricción durante la activación">

El proceso de incorporación genera fricción antes de la primera venta.

</label>

<label><input type="radio" name="hypothesis" value="Falta de acompañamiento">

Los nuevos proveedores necesitan mayor acompañamiento durante la activación.

</label>

<label><input type="radio" name="hypothesis" value="Catálogo poco atractivo">

El catálogo publicado no genera suficiente confianza.

</label>

<label><input type="radio" name="hypothesis" value="Poca visibilidad">

Los productos tienen poca visibilidad dentro del ecosistema.

</label>

`;

break;

case "Activos":

options=`

<label><input type="radio" name="hypothesis" value="SLA">

El cumplimiento del SLA está limitando las ventas.

</label>

<label><input type="radio" name="hypothesis" value="Calidad">

La calidad del catálogo está afectando la conversión.

</label>

<label><input type="radio" name="hypothesis" value="Competitividad">

Los productos dejaron de ser competitivos.

</label>

<label><input type="radio" name="hypothesis" value="Experiencia">

La experiencia del cliente necesita mejorar.

</label>

`;

break;

default:

options=`

<label><input type="radio" name="hypothesis" value="Activacion">

La mayor oportunidad parece estar en proveedores en activación.

</label>

<label><input type="radio" name="hypothesis" value="Activos">

La mayor oportunidad parece estar en proveedores activos.

</label>

<label><input type="radio" name="hypothesis" value="Más evidencia">

Todavía hace falta más evidencia para decidir.

</label>

`;

}

content.innerHTML=`

<div class="card">

<h2>Hipótesis de mayor oportunidad</h2>

<p>

Con base en la evidencia priorizada, selecciona la hipótesis que mejor explica dónde intervenir.

</p>

<div class="options">

${options}

</div>

<label>

¿Qué evidencia respalda esta hipótesis?

</label>

<textarea

id="hypothesisEvidence"

placeholder="Explica brevemente...">${appState.discovery.hypothesisEvidence}</textarea>

<button

class="nextBtn"

onclick="saveStep3()">

Guardar y continuar →

</button>

</div>

`;

}

function saveStep3(){

const selected=document.querySelector('input[name="hypothesis"]:checked');

if(!selected){

alert("Selecciona una hipótesis.");

return;

}

const evidence=document.getElementById("hypothesisEvidence").value.trim();

if(evidence===""){

alert("Describe la evidencia.");

return;

}

appState.discovery.hypothesis=selected.value;

appState.discovery.hypothesisEvidence=evidence;

goToStep(3);

}
//======================================================
// PASO 4 - ANÁLISIS DE LA OPORTUNIDAD
//======================================================

function renderStep4(){

const evidence =
appState.discovery.evidence.length>0
? appState.discovery.evidence.join(", ")
: appState.discovery.strategy;

content.innerHTML=`

<div class="card">

<h2>Análisis de la oportunidad</h2>

<p>

Ahora justifica por qué la hipótesis seleccionada representa la mejor oportunidad para responder el reto del negocio.

</p>

<div class="known-box">

<h3>Resumen del análisis</h3>

<ul>

<li><strong>Decisión inicial:</strong> ${appState.discovery.initialDecision}</li>

<li><strong>Evidencia:</strong> ${evidence}</li>

<li><strong>Hipótesis:</strong> ${appState.discovery.hypothesis}</li>

</ul>

</div>

<label>

¿Por qué esta hipótesis representa la mayor oportunidad?

</label>

<textarea
id="impactReason"
placeholder="Describe el impacto esperado...">${appState.discovery.impactReason}</textarea>

<label>

¿Qué riesgo debería validarse antes de construir una solución?

</label>

<textarea
id="risk"
placeholder="Describe el principal riesgo...">${appState.discovery.risk}</textarea>

<div class="info-note">

<h3>¿Qué ocurrirá al generar la recomendación?</h3>

<p>

El Framework utilizará:

</p>

<ul>

<li>La decisión inicial.</li>

<li>La evidencia priorizada.</li>

<li>La hipótesis seleccionada.</li>

<li>La justificación de impacto.</li>

<li>El riesgo identificado.</li>

</ul>

<p>

Con esta información responderá automáticamente la pregunta del desafío:

<strong>¿Por dónde empezarías tú y por qué?</strong>

</p>

</div>

<button
class="nextBtn"
onclick="saveStep4()">

Generar recomendación →

</button>

</div>

`;

}

function saveStep4(){

const impact=document.getElementById("impactReason").value.trim();

const risk=document.getElementById("risk").value.trim();

if(impact===""){

alert("Describe el impacto esperado.");

return;

}

if(risk===""){

alert("Describe el principal riesgo.");

return;

}

appState.discovery.impactReason=impact;

appState.discovery.risk=risk;

switch(appState.discovery.initialDecision){

case "Activacion":

appState.recommendation.frameworkRecommendation=`
Se recomienda comenzar por los proveedores en proceso de activación.

La evidencia sugiere que incrementar la tasa de primera venta representa la oportunidad con mayor impacto para el negocio.

Antes de desarrollar una funcionalidad se recomienda validar esta hipótesis mediante un experimento controlado.
`;

break;

case "Activos":

appState.recommendation.frameworkRecommendation=`
Se recomienda comenzar por los proveedores activos con bajas ventas.

La evidencia indica que optimizar su desempeño puede incrementar las ventas sin ampliar la base de proveedores.
`;

break;

default:

appState.recommendation.frameworkRecommendation=`
Se recomienda comparar ambos segmentos antes de priorizar una inversión de producto.

La evidencia disponible todavía no permite elegir un único camino con suficiente confianza.
`;

}

goToStep(4);

}
//======================================================
// PASO 4 - ANÁLISIS DE LA OPORTUNIDAD
//======================================================

function renderStep4(){

const evidence =
appState.discovery.evidence.length>0
? appState.discovery.evidence.join(", ")
: appState.discovery.strategy;

content.innerHTML=`

<div class="card">

<h2>Análisis de la oportunidad</h2>

<p>

Ahora justifica por qué la hipótesis seleccionada representa la mejor oportunidad para responder el reto del negocio.

</p>

<div class="known-box">

<h3>Resumen del análisis</h3>

<ul>

<li><strong>Decisión inicial:</strong> ${appState.discovery.initialDecision}</li>

<li><strong>Evidencia:</strong> ${evidence}</li>

<li><strong>Hipótesis:</strong> ${appState.discovery.hypothesis}</li>

</ul>

</div>

<label>

¿Por qué esta hipótesis representa la mayor oportunidad?

</label>

<textarea
id="impactReason"
placeholder="Describe el impacto esperado...">${appState.discovery.impactReason}</textarea>

<label>

¿Qué riesgo debería validarse antes de construir una solución?

</label>

<textarea
id="risk"
placeholder="Describe el principal riesgo...">${appState.discovery.risk}</textarea>

<button
class="nextBtn"
onclick="saveStep4()">

Generar recomendación →

</button>

</div>

`;

}

function saveStep4(){

const impact=document.getElementById("impactReason").value.trim();

const risk=document.getElementById("risk").value.trim();

if(impact===""){

alert("Describe el impacto esperado.");

return;

}

if(risk===""){

alert("Describe el principal riesgo.");

return;

}

appState.discovery.impactReason=impact;

appState.discovery.risk=risk;

switch(appState.discovery.initialDecision){

case "Activacion":

appState.recommendation.frameworkRecommendation=`
Se recomienda comenzar por los proveedores en proceso de activación.

La evidencia sugiere que incrementar la tasa de primera venta representa la oportunidad con mayor impacto para el negocio.

Antes de desarrollar una funcionalidad se recomienda validar esta hipótesis mediante un experimento controlado.
`;

break;

case "Activos":

appState.recommendation.frameworkRecommendation=`
Se recomienda comenzar por los proveedores activos con bajas ventas.

La evidencia indica que optimizar su desempeño puede incrementar las ventas sin ampliar la base de proveedores.
`;

break;

default:

appState.recommendation.frameworkRecommendation=`
Se recomienda comparar ambos segmentos antes de priorizar una inversión de producto.

La evidencia disponible todavía no permite elegir un único camino con suficiente confianza.
`;

}

goToStep(4);

}
//======================================================
// PRÓXIMAS VERSIONES
//======================================================

function phase2ComingSoon(){

content.innerHTML=`

<div class="card">

<h2>🚧 Validation Design</h2>

<p>

Esta sección hace parte de la siguiente evolución del Product Decision Framework.

</p>

<div class="info-note">

<h3>¿Qué incluirá?</h3>

<ul>

<li>Diseño de hipótesis.</li>

<li>Diseño del experimento.</li>

<li>KPIs de éxito.</li>

<li>Executive Brief descargable.</li>

</ul>

</div>

<button class="nextBtn" onclick="goToStep(4)">

← Volver

</button>

</div>

`;

}

function phase3ComingSoon(){

content.innerHTML=`

<div class="card">

<h2>🚧 Experiment Review</h2>

<p>

Esta sección corresponde a la fase posterior a la ejecución del experimento.

</p>

<div class="info-note">

<h3>¿Qué incluirá?</h3>

<ul>

<li>Resultados.</li>

<li>Seguimiento.</li>

<li>Medición de KPIs.</li>

<li>Aprendizajes.</li>

<li>Escalar / Iterar / Descartar.</li>

</ul>

</div>

<button class="nextBtn" onclick="goToStep(4)">

← Volver

</button>

</div>

`;

}
//======================================================
// PASO 5 - RESPUESTA DEL FRAMEWORK
//======================================================

function renderStep5(){

const evidence =
appState.discovery.evidence.length>0
? appState.discovery.evidence.join(", ")
: appState.discovery.strategy;

content.innerHTML=`

<div class="card">

<h2>Respuesta del Framework</h2>

<p>

Con base en toda la evidencia recopilada, esta es la recomendación del Framework para responder el desafío.

</p>

<div class="goal-box">

<h3>¿Por dónde empezarías tú y por qué?</h3>

<p>

${appState.recommendation.frameworkRecommendation}

</p>

</div>

<div class="known-box">

<h3>Resumen ejecutivo</h3>

<ul>

<li><strong>Decisión:</strong> ${appState.discovery.initialDecision}</li>

<li><strong>Evidencia:</strong> ${evidence}</li>

<li><strong>Hipótesis:</strong> ${appState.discovery.hypothesis}</li>

<li><strong>Impacto:</strong> ${appState.discovery.impactReason}</li>

<li><strong>Riesgo:</strong> ${appState.discovery.risk}</li>

</ul>

</div>

<div class="info-note">

<strong>Siguiente paso</strong>

<p>

Antes de construir una solución debemos validar la hipótesis mediante un experimento.

</p>

</div>

<button

class="nextBtn"

onclick="renderValidation()">

Diseñar validación →

</button>

</div>

`;

}

//======================================================
// VALIDATION DESIGN
//======================================================

function renderValidation(){

content.innerHTML=`

<div class="card">

<h2>Validation Design</h2>

<p>

Antes de construir el Centro de Activación Inteligente debemos validar que la hipótesis realmente genere impacto.

</p>

<label>

Hipótesis

</label>

<textarea
id="validationHypothesis"
placeholder="Si hacemos esto esperamos lograr...">${appState.validation.hypothesis}</textarea>

<label>

Experimento

</label>

<textarea
id="validationExperiment"
placeholder="¿Cómo validarías esta hipótesis?">${appState.validation.experiment}</textarea>

<label>

KPIs

</label>

<textarea
id="validationKpis"
placeholder="% Primera Venta, Tiempo Primera Venta, Conversión, Retención...">${appState.validation.kpis}</textarea>

<label>

Duración

</label>

<input
id="validationDuration"
value="${appState.validation.duration}"
placeholder="Ej. 30 días">

<div class="info-note">

<strong>Objetivo</strong>

<p>

Validar la hipótesis antes de invertir tiempo de desarrollo.

</p>

</div>

<button

class="nextBtn"

onclick="saveValidation()">

Generar Executive Brief →

</button>

</div>

`;

}

function saveValidation(){

appState.validation.hypothesis =
document.getElementById("validationHypothesis").value;

appState.validation.experiment =
document.getElementById("validationExperiment").value;

appState.validation.kpis =
document.getElementById("validationKpis").value;

appState.validation.duration =
document.getElementById("validationDuration").value;

renderExecutiveBrief();

}

//======================================================
// EXECUTIVE BRIEF
//======================================================

function renderExecutiveBrief(){

const evidence =
appState.discovery.evidence.length>0
? appState.discovery.evidence.join(", ")
: appState.discovery.strategy;

content.innerHTML=`

<div class="card">

<h2>Executive Brief</h2>

<p>

El análisis ha finalizado y el Framework generó una recomendación sustentada.

</p>

<div class="goal-box">

<h3>Recomendación Final</h3>

<p>

${appState.recommendation.frameworkRecommendation}

</p>

</div>

<div class="known-box">

<h3>Resumen Ejecutivo</h3>

<ul>

<li><strong>Segmento priorizado:</strong> ${appState.discovery.initialDecision}</li>

<li><strong>Evidencia:</strong> ${evidence}</li>

<li><strong>Hipótesis:</strong> ${appState.discovery.hypothesis}</li>

<li><strong>Experimento:</strong> ${appState.validation.experiment}</li>

<li><strong>KPIs:</strong> ${appState.validation.kpis}</li>

<li><strong>Duración:</strong> ${appState.validation.duration}</li>

</ul>

</div>

<div class="info-note">

<strong>Conclusión</strong>

<p>

La recomendación es validar primero la hipótesis y, si los resultados son positivos, desarrollar el <strong>Centro de Activación Inteligente</strong> como siguiente iniciativa de producto.

</p>

</div>

<div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:24px;">

<button
class="nextBtn"
onclick="downloadExecutiveBrief()">

📄 Descargar Executive Brief

</button>

<button
class="nextBtn"
onclick="location.reload()">

Nuevo análisis

</button>

</div>

</div>

`;

}

function downloadExecutiveBrief(){

window.print();

}
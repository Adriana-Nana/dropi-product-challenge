// ======================================================
// PRODUCT DECISION FRAMEWORK
// Dropi Challenge
// Versión 4.0
// ======================================================

const startBtn = document.getElementById("startBtn");
const content = document.getElementById("content");

//======================================================
// Estado global
//======================================================

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
        title: "Información existente",
        description:
            "Comprende el reto del negocio y define por dónde iniciar el análisis."
    },

    {
        title: "Priorización de evidencia",
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
            "Justifica por qué esta hipótesis representa la mejor oportunidad."
    },

    {
        title: "Respuesta al desafío",
        description:
            "El Framework responde la pregunta del negocio y recomienda el siguiente paso."
    }

];

//======================================================
// Inicio
//======================================================

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";

    goToStep(0);

});

//======================================================
// Navegación
//======================================================

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

//======================================================
// Sidebar
//======================================================

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

//======================================================
// Barra de progreso
//======================================================

function updateProgress(){

    const progress=[20,40,60,80,100];

    const insights=[

        "Se definió el punto de partida del análisis.",

        "La evidencia ya permite orientar la investigación.",

        "Existe una hipótesis priorizada.",

        "La oportunidad quedó justificada.",

        "El Framework respondió el desafío."

    ];

    document.getElementById("progressBar").style.width=progress[appState.currentStep]+"%";

    document.getElementById("progressText").innerText=progress[appState.currentStep]+"%";

    document.getElementById("insightText").innerText=insights[appState.currentStep];

}
// ======================================================
// PRODUCT DECISION FRAMEWORK
// Dropi Challenge
// Versión 4.0
// ======================================================

const startBtn = document.getElementById("startBtn");
const content = document.getElementById("content");

//======================================================
// Estado global
//======================================================

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
        title: "Información existente",
        description:
            "Comprende el reto del negocio y define por dónde iniciar el análisis."
    },

    {
        title: "Priorización de evidencia",
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
            "Justifica por qué esta hipótesis representa la mejor oportunidad."
    },

    {
        title: "Respuesta al desafío",
        description:
            "El Framework responde la pregunta del negocio y recomienda el siguiente paso."
    }

];

//======================================================
// Inicio
//======================================================

startBtn.addEventListener("click", () => {

    startBtn.style.display = "none";

    goToStep(0);

});

//======================================================
// Navegación
//======================================================

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

//======================================================
// Sidebar
//======================================================

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

//======================================================
// Barra de progreso
//======================================================

function updateProgress(){

    const progress=[20,40,60,80,100];

    const insights=[

        "Se definió el punto de partida del análisis.",

        "La evidencia ya permite orientar la investigación.",

        "Existe una hipótesis priorizada.",

        "La oportunidad quedó justificada.",

        "El Framework respondió el desafío."

    ];

    document.getElementById("progressBar").style.width=progress[appState.currentStep]+"%";

    document.getElementById("progressText").innerText=progress[appState.currentStep]+"%";

    document.getElementById("insightText").innerText=insights[appState.currentStep];

}
//======================================================
// PASO 2 - PRIORIZACIÓN DE LA EVIDENCIA
//======================================================

function renderStep2(){

let html="";

const decision=appState.discovery.initialDecision;

//--------------------------------------------------
// ACTIVACIÓN
//--------------------------------------------------

if(decision==="Activacion"){

html=`

<label>

¿Qué evidencia analizarías para comprender por qué estos proveedores aún no logran su primera venta?

</label>

<div class="checkbox-grid">

<label><input type="checkbox" value="Tiempo desde el registro">Tiempo desde el registro</label>

<label><input type="checkbox" value="Productos publicados">Productos publicados</label>

<label><input type="checkbox" value="Calidad de imágenes">Calidad de imágenes</label>

<label><input type="checkbox" value="Descripción de productos">Descripción de productos</label>

<label><input type="checkbox" value="Conversión a primera venta">Conversión a primera venta</label>

<label><input type="checkbox" value="Abandono del proceso de activación">Abandono del proceso de activación</label>

<label><input type="checkbox" value="Acompañamiento recibido">Acompañamiento recibido</label>

<label><input type="checkbox" value="Uso de herramientas Dropi">Uso de herramientas Dropi</label>

</div>

`;

}

//--------------------------------------------------
// ACTIVOS
//--------------------------------------------------

if(decision==="Activos"){

html=`

<label>

¿Qué evidencia analizarías para explicar la disminución en las ventas?

</label>

<div class="checkbox-grid">

<label><input type="checkbox" value="Ventas">Ventas</label>

<label><input type="checkbox" value="Cumplimiento SLA">Cumplimiento SLA</label>

<label><input type="checkbox" value="Cancelaciones">Cancelaciones</label>

<label><input type="checkbox" value="Garantías">Garantías</label>

<label><input type="checkbox" value="Rechazos">Rechazos</label>

<label><input type="checkbox" value="Tiempo de despacho">Tiempo promedio de despacho</label>

<label><input type="checkbox" value="Calificación">Calificación del proveedor</label>

<label><input type="checkbox" value="Feedback clientes">Feedback de clientes</label>

</div>

`;

}

//--------------------------------------------------
// AMBOS
//--------------------------------------------------

if(decision==="Ambos"){

html=`

<label>

Antes de profundizar, ¿qué estrategia utilizarías?

</label>

<div class="options">

<label>

<input type="radio" name="strategy" value="Activacion">

Analizar primero proveedores en proceso de activación

</label>

<label>

<input type="radio" name="strategy" value="Activos">

Analizar primero proveedores activos con bajas ventas

</label>

<label>

<input type="radio" name="strategy" value="Comparar">

Comparar ambos grupos antes de priorizar

</label>

</div>

`;

}

content.innerHTML=`

<div class="card">

<h3>Priorización de la evidencia</h3>

<p>

Toda decisión de producto debe estar respaldada por evidencia. Selecciona la información que considerarías necesaria antes de formular una hipótesis.

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

const checks=document.querySelectorAll('input[type="checkbox"]:checked');

checks.forEach(item=>{

appState.discovery.evidence.push(item.value);

});

const strategy=document.querySelector('input[name="strategy"]:checked');

if(appState.discovery.initialDecision==="Ambos"){

if(!strategy){

alert("Selecciona una estrategia para continuar.");

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

<label>

<input type="radio" name="hypothesis" value="Fricción durante la activación">

El proceso de activación genera fricción antes de la primera venta.

</label>

<label>

<input type="radio" name="hypothesis" value="Falta de acompañamiento">

Los nuevos proveedores necesitan mayor acompañamiento durante la activación.

</label>

<label>

<input type="radio" name="hypothesis" value="Catálogo poco atractivo">

El catálogo no genera suficiente confianza para impulsar la primera compra.

</label>

<label>

<input type="radio" name="hypothesis" value="Baja visibilidad">

Los productos tienen poca visibilidad dentro del ecosistema.

</label>

`;

break;

case "Activos":

options=`

<label>

<input type="radio" name="hypothesis" value="Problemas de cumplimiento">

El cumplimiento del SLA está afectando las ventas.

</label>

<label>

<input type="radio" name="hypothesis" value="Problemas de calidad">

La calidad del producto impacta la recompra.

</label>

<label>

<input type="radio" name="hypothesis" value="Catálogo poco competitivo">

El catálogo dejó de ser competitivo.

</label>

<label>

<input type="radio" name="hypothesis" value="Experiencia del cliente">

La experiencia del cliente limita el crecimiento.

</label>

`;

break;

default:

options=`

<label>

<input type="radio" name="hypothesis" value="Priorizar activación">

La mayor oportunidad parece estar en proveedores en activación.

</label>

<label>

<input type="radio" name="hypothesis" value="Priorizar activos">

La mayor oportunidad parece estar en proveedores activos.

</label>

<label>

<input type="radio" name="hypothesis" value="Más investigación">

Se necesita mayor evidencia antes de priorizar.

</label>

`;

}

content.innerHTML=`

<div class="card">

<h3>Hipótesis de mayor oportunidad</h3>

<p>

La evidencia seleccionada permite formular una hipótesis que explique dónde existe la mayor oportunidad de generar impacto.

</p>

<label>

Selecciona la hipótesis que mejor representa tu análisis.

</label>

<div class="options">

${options}

</div>

<label>

¿Qué evidencia respalda esta hipótesis?

</label>

<textarea

id="hypothesisEvidence"

placeholder="Explica qué evidencia te llevó a esta conclusión...">

${appState.discovery.hypothesisEvidence}

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

const evidence=document.getElementById("hypothesisEvidence").value.trim();

if(evidence===""){

alert("Describe la evidencia que respalda tu hipótesis.");

return;

}

appState.discovery.hypothesis=hypothesis.value;

appState.discovery.hypothesisEvidence=evidence;

goToStep(3);

}
//======================================================
// PASO 4 - ANÁLISIS DE LA OPORTUNIDAD
//======================================================

function renderStep4(){

content.innerHTML=`

<div class="card">

<h3>Análisis de la oportunidad</h3>

<p>

Hasta este punto ya existe una hipótesis priorizada. Ahora debes justificar por qué representa la mejor oportunidad para responder el desafío del negocio.

</p>

<div class="known-box">

<h3>Resumen del análisis</h3>

<ul>

<li><strong>Decisión inicial:</strong> ${appState.discovery.initialDecision}</li>

<li><strong>Hipótesis:</strong> ${appState.discovery.hypothesis}</li>

<li><strong>Evidencia:</strong> ${
appState.discovery.evidence.length>0
? appState.discovery.evidence.join(", ")
: appState.discovery.strategy
}</li>

</ul>

</div>

<label>

¿Por qué esta hipótesis representa la mayor oportunidad para lograr que más proveedores vendan más y mejor sin afectar el SLA ni la calidad?

</label>

<textarea

id="impactReason"

placeholder="Explica el impacto esperado sobre el negocio...">

${appState.discovery.impactReason}

</textarea>

<label>

¿Cuál es el principal riesgo o supuesto que debería validarse antes de construir una solución?

</label>

<textarea

id="risk"

placeholder="Describe el principal riesgo de esta decisión...">

${appState.discovery.risk}

</textarea>

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

alert("Describe por qué esta hipótesis representa la mayor oportunidad.");

return;

}

if(risk===""){

alert("Describe el principal riesgo de la decisión.");

return;

}

appState.discovery.impactReason=impact;

appState.discovery.risk=risk;

//------------------------------------------------------
// Construcción automática de la recomendación
//------------------------------------------------------

let recommendation="";

switch(appState.discovery.initialDecision){

case "Activacion":

recommendation=`
Se recomienda comenzar por los proveedores en proceso de activación.

La evidencia priorizada sugiere que incrementar la tasa de primera venta representa la oportunidad con mayor potencial para aumentar el número de proveedores activos sin comprometer el SLA ni la calidad.

Antes de desarrollar una solución, se recomienda validar esta hipótesis mediante un experimento controlado.
`;

break;

case "Activos":

recommendation=`
Se recomienda comenzar por los proveedores activos con bajas ventas.

La evidencia indica que optimizar su desempeño puede incrementar las ventas aprovechando una base ya consolidada, siempre validando previamente el impacto sobre el SLA y la calidad.
`;

break;

default:

recommendation=`
Se recomienda iniciar con un análisis comparativo entre proveedores en activación y proveedores activos con bajas ventas.

La evidencia disponible todavía no permite priorizar un único segmento con suficiente confianza, por lo que el siguiente paso debe ser validar cuál representa la mayor oportunidad de negocio.
`;

}

appState.recommendation.frameworkRecommendation=recommendation;

goToStep(4);

}
//======================================================
// PASO 4 - ANÁLISIS DE LA OPORTUNIDAD
//======================================================

function renderStep4(){

content.innerHTML=`

<div class="card">

<h3>Análisis de la oportunidad</h3>

<p>

Hasta este punto ya existe una hipótesis priorizada. Ahora debes justificar por qué representa la mejor oportunidad para responder el desafío del negocio.

</p>

<div class="known-box">

<h3>Resumen del análisis</h3>

<ul>

<li><strong>Decisión inicial:</strong> ${appState.discovery.initialDecision}</li>

<li><strong>Hipótesis:</strong> ${appState.discovery.hypothesis}</li>

<li><strong>Evidencia:</strong> ${
appState.discovery.evidence.length>0
? appState.discovery.evidence.join(", ")
: appState.discovery.strategy
}</li>

</ul>

</div>

<label>

¿Por qué esta hipótesis representa la mayor oportunidad para lograr que más proveedores vendan más y mejor sin afectar el SLA ni la calidad?

</label>

<textarea

id="impactReason"

placeholder="Explica el impacto esperado sobre el negocio...">

${appState.discovery.impactReason}

</textarea>

<label>

¿Cuál es el principal riesgo o supuesto que debería validarse antes de construir una solución?

</label>

<textarea

id="risk"

placeholder="Describe el principal riesgo de esta decisión...">

${appState.discovery.risk}

</textarea>

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

alert("Describe por qué esta hipótesis representa la mayor oportunidad.");

return;

}

if(risk===""){

alert("Describe el principal riesgo de la decisión.");

return;

}

appState.discovery.impactReason=impact;

appState.discovery.risk=risk;

//------------------------------------------------------
// Construcción automática de la recomendación
//------------------------------------------------------

let recommendation="";

switch(appState.discovery.initialDecision){

case "Activacion":

recommendation=`
Se recomienda comenzar por los proveedores en proceso de activación.

La evidencia priorizada sugiere que incrementar la tasa de primera venta representa la oportunidad con mayor potencial para aumentar el número de proveedores activos sin comprometer el SLA ni la calidad.

Antes de desarrollar una solución, se recomienda validar esta hipótesis mediante un experimento controlado.
`;

break;

case "Activos":

recommendation=`
Se recomienda comenzar por los proveedores activos con bajas ventas.

La evidencia indica que optimizar su desempeño puede incrementar las ventas aprovechando una base ya consolidada, siempre validando previamente el impacto sobre el SLA y la calidad.
`;

break;

default:

recommendation=`
Se recomienda iniciar con un análisis comparativo entre proveedores en activación y proveedores activos con bajas ventas.

La evidencia disponible todavía no permite priorizar un único segmento con suficiente confianza, por lo que el siguiente paso debe ser validar cuál representa la mayor oportunidad de negocio.
`;

}

appState.recommendation.frameworkRecommendation=recommendation;

goToStep(4);

}
//======================================================
// DISEÑO DE VALIDACIÓN
//======================================================

function renderValidation(){

content.innerHTML=`

<div class="card">

<h2>🧪 Diseño de validación</h2>

<p>

Toda decisión de producto debe validarse antes de escalar una solución. Diseña un experimento que permita confirmar o rechazar la hipótesis priorizada.

</p>

<div class="goal-box">

<h3>Hipótesis priorizada</h3>

<p>

${appState.discovery.hypothesis}

</p>

</div>

<label>

Hipótesis del experimento

</label>

<textarea

id="validationHypothesis"

placeholder="Si implementamos esta iniciativa esperamos que...">

${appState.validation.hypothesis}

</textarea>

<label>

¿Cómo validarías esta hipótesis?

</label>

<textarea

id="validationExperiment"

placeholder="Describe el experimento que ejecutarías...">

${appState.validation.experiment}

</textarea>

<label>

¿Qué indicadores utilizarías para medir el éxito?

</label>

<textarea

id="validationKpis"

placeholder="Ej.: % Primera Venta, Tiempo Primera Venta, SLA, Calidad...">

${appState.validation.kpis}

</textarea>

<label>

Duración del experimento

</label>

<input

id="validationDuration"

placeholder="Ej.: 30 días"

value="${appState.validation.duration}">

<button

class="nextBtn"

onclick="saveValidation()">

Generar Resumen Ejecutivo →

</button>

</div>

`;

}

function saveValidation(){

appState.validation.hypothesis=document.getElementById("validationHypothesis").value;

appState.validation.experiment=document.getElementById("validationExperiment").value;

appState.validation.kpis=document.getElementById("validationKpis").value;

appState.validation.duration=document.getElementById("validationDuration").value;

renderExecutiveBrief();

}

//======================================================
// RESUMEN EJECUTIVO
//======================================================

function renderExecutiveBrief(){

const evidence=

appState.discovery.evidence.length>0

? appState.discovery.evidence.join(", ")

: appState.discovery.strategy;

content.innerHTML=`

<div class="card">

<h2>📄 Executive Brief</h2>

<p>

El Framework completó el proceso de análisis y generó una recomendación sustentada en evidencia.

</p>

<div class="goal-box">

<h3>Respuesta al desafío</h3>

<p>

${appState.recommendation.frameworkRecommendation}

</p>

</div>

<hr>

<h3>Trazabilidad de la decisión</h3>

<ul>

<li><strong>Caso:</strong> Categoría Moda.</li>

<li><strong>Punto de partida:</strong> ${appState.discovery.initialDecision}</li>

<li><strong>Evidencia:</strong> ${evidence}</li>

<li><strong>Hipótesis:</strong> ${appState.discovery.hypothesis}</li>

<li><strong>Justificación:</strong> ${appState.discovery.impactReason}</li>

<li><strong>Riesgo:</strong> ${appState.discovery.risk}</li>

</ul>

<hr>

<h3>Diseño de validación</h3>

<p><strong>Hipótesis</strong></p>

<p>${appState.validation.hypothesis}</p>

<br>

<p><strong>Experimento</strong></p>

<p>${appState.validation.experiment}</p>

<br>

<p><strong>KPIs</strong></p>

<p>${appState.validation.kpis}</p>

<br>

<p><strong>Duración</strong></p>

<p>${appState.validation.duration}</p>

<div class="info-note">

<strong>Conclusión</strong>

<p>

La recomendación final no consiste en construir inmediatamente una funcionalidad, sino en validar primero la hipótesis priorizada mediante un experimento controlado. Solo después de obtener evidencia suficiente se recomienda avanzar al desarrollo del <strong>Centro de Activación Inteligente</strong>.

</p>

</div>

<button

class="nextBtn"

onclick="restartFramework()">

🔄 Ejecutar un nuevo caso

</button>

</div>

`;

}

//======================================================
// REINICIAR
//======================================================

function restartFramework(){

location.reload();

}
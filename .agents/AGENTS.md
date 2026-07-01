# Reglas del Agente para el Proyecto Novelistico

Este archivo contiene reglas y directrices de comportamiento para el agente dentro de este workspace. Define cuándo y cómo deben activarse los Skills del proyecto de forma automática según la intención detectada en la petición.

## Contexto Conceptual Raíz y Biblia de la Novela
*   **Referencia Obligatoria:** El archivo `premisa_novela.md` ubicado en la raíz del workspace contiene las leyes físicas, la escala de poderes, la sinopsis general y las facciones iniciales de la obra.
*   **Preferencias Narrativas:** El archivo `preferencias_narrativas.md` en la raíz de la obra recopila las directrices estilísticas, de tono y comportamiento de personajes preferidas por el autor.
*   **Regla de Oro:** Siempre que realices lluvia de ideas (`inspirador-novelas`) o redactes prosa (`redactor-novelas`), lee y respeta estrictamente las limitaciones, tono y reglas descritas en `premisa_novela.md` y `preferencias_narrativas.md` para garantizar la coherencia conceptual y estilística del universo.
*   **Separación Estricta de Entornos (Activo vs. Ejemplo):**
    *   **Directorio Activo:** Toda la escritura, planificación, actualización de bitácoras, wiki y compilación de la historia activa de la obra debe realizarse exclusivamente en las carpetas y archivos ubicados en la raíz del proyecto (`capitulos/`, `wiki/`, `bitacora_historia.md`, `premisa_novela.md`, `manuscrito_completo.md`).
    *   **Directorio de Ejemplo:** La carpeta `ejemplo/` contiene un ejercicio cerrado y simulado de otra obra ("Sangre y Hierro"). El agente **solo** debe consultarla como plantilla de formato o referencia técnica de cómo deben lucir los archivos resultantes. **Bajo ninguna circunstancia** se debe mezclar el lore, nombres de personajes, eventos u objetos de `ejemplo/` con la historia activa, ni escribir nuevas escenas o bitácoras dentro de `ejemplo/`.


## Guardia de Inicialización del Proyecto y Uso de Plantillas
*   **Inicialización Proactiva (Garantía de Estructura):** Antes de iniciar la ejecución de cualquier comando o skill, el agente debe verificar la presencia de los tres archivos de configuración y contexto base en la raíz del workspace: `premisa_novela.md`, `preferencias_narrativas.md` y `bitacora_historia.md`.
*   **Flujo de Recuperación:** Si alguno de estos archivos no se encuentra en la raíz, el agente **no debe fallar**. Deberá crearlo de inmediato de forma autónoma copiando el contenido de la plantilla correspondiente ubicada en la carpeta `.agents/templates/` (ej. `.agents/templates/premisa_novela.md` $\rightarrow$ `premisa_novela.md`). Al crearlos, notificará al autor en su respuesta indicando que se ha inicializado la estructura base correspondiente de forma autónoma.
*   **Creación de Carpetas y Capítulos:** Si un comando solicita operar sobre un capítulo en `capitulos/capitulo_[N]/` y esta ruta o sus archivos estructurales (`escaleta.md`, `bitacora_capitulo.md`) no existen, el agente creará la carpeta e inicializará los archivos de forma automática copiando las plantillas correspondientes de `.agents/templates/`, asegurando la continuidad del flujo.


## Sintaxis de Comandos de Atajo (Shortcuts)
El agente interpretará comandos de una sola línea que comiencen con el prefijo `!` y cargará inmediatamente el Skill correspondiente, expandiendo de manera autónoma los argumentos a las rutas correctas:

*   **`!ritmo cap=[N] esc=[M]`** $\rightarrow$ Carga `analizador-ritmo` para el archivo `capitulos/capitulo_[N]/escena_[M]_final.md`.
*   **`!consistencia cap=[N] esc=[M]`** $\rightarrow$ Carga `verificador-consistencia` para el archivo `capitulos/capitulo_[N]/escena_[M]_final.md`.
*   **`!wiki cap=[N] esc=[M]`** $\rightarrow$ Carga `wiki-novelas` para procesar `capitulos/capitulo_[N]/escena_[M]_final.md`.
*   **`!bitacora cap=[N]`** $\rightarrow$ Carga `bitacora-novelas` para procesar todas las escenas finalizadas del capítulo `[N]`.
*   **`!escaleta cap=[N] (esc=[K])`** $\rightarrow$ Carga `redactor-novelas` en modo **Paso 1 (Escaleta)** para planificar el capítulo `[N]` con `[K]` escenas (si no se especifica `esc`, usar 5 escenas por defecto).
*   **`!redactar cap=[N] esc=[M]`** $\rightarrow$ Carga `redactor-novelas` en modo **Paso 2 (Redacción)** para escribir la escena `[M]`.
*   **`!prompt personaje=[Nombre]`** o **`lugar=[Nombre]`** $\rightarrow$ Carga `creador-prompts-visuales` para el asset indicado de la Wiki.
*   **`!compilar cap=[N]`** $\rightarrow$ Carga `compilador-manuscrito` para generar `capitulo_[N]_completo.md` sin compilar el manuscrito completo.
*   **`!compilar`** $\rightarrow$ Carga `compilador-manuscrito` para generar `manuscrito_completo.md`.



## Activación Automática de Skills por Intención y Palabras Clave

El agente monitoreará las solicitudes y cargará las directrices de los Skills correspondientes al detectar palabras clave u objetivos específicos:

### 1. Skill: `analizador-novelas`
* **Propósito:** Analiza textos y propone mejoras en la narrativa, convirtiendo diálogos tradicionales con guiones (`—`) a la estructura de diálogo `Personaje: <Diálogo>`.
* **Palabras Clave / Keywords de Activación:**
  * `diálogos`, `formato de diálogo`, `convertir diálogos`, `quitar guiones`, `reescribir escena`, `estilo narrativo`, `conversaciones`.
* **Cuándo Invocar:** Cuando el usuario solicite procesar, mejorar o formatear el texto de una escena que contenga interacciones habladas entre personajes.

### 2. Skill: `bitacora-novelas`
* **Propósito:** Lee un capítulo, abstrae los eventos, actualiza el estado de personajes, documenta pistas/misterios y actualiza la bitácora del manuscrito.
* **Palabras Clave / Keywords de Activación:**
  * `bitácora`, `resumen del capítulo`, `hechos clave`, `puntos de control`, `personajes del capítulo`, `misterios`, `pistas`, `bitacora_historia.md`.
* **Cuándo Invocar:** Cuando el usuario solicite documentar, resumir o extraer información estructural de la historia de un capítulo nuevo o existente.

### 3. Skill: `wiki-novelas`
* **Propósito:** Lee un capítulo o escena y crea/actualiza archivos individuales para personajes, lugares, organizaciones y objetos bajo la carpeta `/wiki/` y su índice `/wiki/README.md`.
* **Palabras Clave / Keywords de Activación:**
  * `wiki`, `biblioteca`, `lore`, `actualizar wiki`, `ficha de personaje`, `ficha de lugar`, `atributos visuales`, `assets`, `organización`, `objetos`.
* **Cuándo Invocar:** Cuando el usuario solicite registrar elementos del universo, actualizar descripciones visuales para generación de imágenes o documentar cambios físicos de personajes y lugares.
* **Pre-requisito Obligatorio:** Antes de procesar la wiki de un capítulo (`!wiki cap=[N]`), se debe verificar obligatoriamente que el capítulo consolidado `capitulos/capitulo_[N]/capitulo_[N]_completo.md` exista en el workspace. Si no existe, detener la ejecución de inmediato, lanzar un mensaje de Error y pedirle al escritor que lo compile con `node compilar.js --cap=[N]` o `!compilar`.
* **Nivel de Detalle Físico y Fenómenos:** Todas las fichas creadas o actualizadas deben registrar información detallada y minuciosa de causa-efecto (ej. en personajes: la sección `Habilidades Usadas` detallando la física, colores y manifestaciones de la magia; en lugares: clima, paleta de colores y atmósfera; en organizaciones: emblemas y alianzas) para evitar inconsistencias al describir fenómenos en el manuscrito.

### 4. Skill: `inspirador-novelas`
* **Propósito:** Genera propuestas alternativas de continuación de la historia (Idea/Path y Draft corto) basadas en la bitácora y la Wiki, soportando refinamientos iterativos.
* **Palabras Clave / Keywords de Activación:**
  * `inspiración`, `ideas de continuación`, `opciones de trama`, `brainstorming`, `sugerir ideas`, `continuar historia`, `refinar opción`.
* **Cuándo Invocar:** Cuando el usuario necesite ideas, alternativas o borradores cortos para ver hacia dónde continuar la narrativa o refinar una sugerencia previa.

### 5. Skill: `redactor-novelas`
* **Propósito:** Planifica y expande una idea de trama seleccionada en un capítulo/sección completo a través de una escaleta de escenas y la redacción controlada escena por escena.
* **Palabras Clave / Keywords de Activación:**
  * `redactar escena`, `escaleta`, `outline de escenas`, `expandir idea`, `escribir capítulo`, `desarrollar trama`, `siguiente escena`.
* **Cuándo Invocar:** Cuando el usuario decida expandir un camino narrativo aprobado y empezar a planificar la estructura y redactar la prosa escena por escena.

### 6. Skill: `verificador-consistencia`
* **Propósito:** Revisa textos buscando incoherencias lógicas o físicas respecto al lore de la Wiki y la bitácora histórica.
* **Palabras Clave / Keywords de Activación:**
  * `consistencia`, `incoherencias`, `plot holes`, `auditoría de lore`, `errores de continuidad`, `verificar texto`, `corregir continuidad`.
* **Cuándo Invocar:** Cuando el usuario solicite auditar o revisar un borrador o capítulo redactado para buscar inconsistencias con la historia existente.

### 7. Skill: `creador-prompts-visuales`
* **Propósito:** Genera prompts de imágenes en inglés optimizados para Midjourney/DALL-E basados en las descripciones de la Wiki, con soporte de Hojas de Modelo (Model Sheets) y múltiples ángulos.
* **Palabras Clave / Keywords de Activación:**
  * `prompt de imagen`, `prompt visual`, `generar asset`, `prompt Midjourney`, `prompt DALL-E`, `ilustración de personaje`, `model sheet`, `character sheet`, `ángulo de cámara`.
* **Cuándo Invocar:** Cuando el usuario solicite crear prompts para ilustrar personajes, entornos, emblemas u objetos de la Wiki.

### 8. Skill: `compilador-manuscrito`
* **Propósito:** Une de forma limpia, secuencial y formateada las escenas y capítulos del proyecto en un único manuscrito consolidado.
* **Palabras Clave / Keywords de Activación:**
  * `compilar`, `exportar manuscrito`, `unir capítulos`, `compilar novela`, `manuscrito completo`, `borrador final`, `ensamblar manuscrito`.
* **Cuándo Invocar:** Cuando el usuario decida exportar o unir el trabajo escrito en un único borrador maestro limpio.

### 9. Skill: `analizador-ritmo`
* **Propósito:** Evalúa el ritmo de lectura (pacing), balance narrativo y la curva de tensión dramática en la prosa para proponer mejoras.
* **Palabras Clave / Keywords de Activación:**
  * `ritmo`, `pacing`, `tensión dramática`, `estructura de escena`, `análisis dramático`, `curva de tensión`, `analizar ritmo`.
* **Cuándo Invocar:** Cuando el usuario solicite evaluar o acelerar/desacelerar la velocidad de lectura o la tensión de un fragmento literario.

---

## Directrices Generales de Comportamiento

1. **Activación Proactiva:** Al detectar una coincidencia con las palabras clave o la intención descrita, el agente leerá y aplicará de inmediato las instrucciones contenidas en el `SKILL.md` correspondiente.
2. **Ejecución Combinada:** Si la petición del usuario abarca múltiples intenciones (por ejemplo, analizar el texto para actualizar la bitácora, actualizar la wiki de personajes y luego reescribir los diálogos), el agente aplicará secuencialmente cada Skill de manera lógica:
   - Primero: Extraer hechos y bitácora (`bitacora-novelas`).
   - Segundo: Registrar o actualizar fichas y línea de tiempo de lore (`wiki-novelas`).
   - Tercero: Auditar y corregir la consistencia de los hechos (`verificador-consistencia`).
   - Cuarto: Evaluar y pulir el ritmo dramático de la prosa (`analizador-ritmo`).
   - Quinto: Generar el texto literario final o adaptaciones conversacionales (`analizador-novelas`).
3. **Control de Calidad Automático en Redacción:** Siempre que se autogenere o redacte una escena o capítulo (por ejemplo, mediante `redactor-novelas` o el comando `!redactar`), se deben ejecutar de forma obligatoria y secuencial los filtros de consistencia (`verificador-consistencia`) y de ritmo (`analizador-ritmo`) sobre la prosa generada:
   - **Filtro de Consistencia:** Si se detectan inconsistencias (alertas de continuidad con la Wiki o Bitácora), se deben corregir de forma autónoma y automática en la prosa antes de escribir el archivo de escena final (`escena_[M]_final.md`).
   - **Filtro de Ritmo:** Evaluar la curva de tensión y el pacing. Si el ritmo es clasificado como *Malo* o *Medio* (con grandes áreas de mejora), se debe reescribir de forma autónoma la prosa para optimizarla antes de escribir el archivo final. Si el ritmo es *Aceptablemente Bueno*, no se modifica la prosa, pero se presentan las sugerencias editoriales al escritor.
   - **Presentación:** La escena final presentada al escritor debe incluir siempre un desglose explicativo de las correcciones automáticas realizadas (por consistencia o ritmo) y las sugerencias editoriales de ritmo pendientes.
4. **Inmersión Narrativa y Prosa Diegética:** Al redactar la prosa literaria de cualquier capítulo o escena, queda estrictamente prohibido hacer referencias directas o indirectas a la estructura física, editorial o estructural de la obra (como 'del prólogo', 'en este capítulo', 'en la escena anterior', 'en la novela'). Toda alusión a acontecimientos previos debe referirse única y exclusivamente a hechos o sucesos diegéticos que existan dentro del universo de la ficción (ej. 'desde el escape inicial', 'la sangre derramada en la cueva', 'la última confrontación').
5. **Bitácora Incremental por Escena (Puerta de Control Obligatoria):** Antes de ejecutar cualquier instrucción de redacción de escena (`!redactar` o similar) para la escena `[M]`, el agente tiene la obligación absoluta de verificar si la escena anterior `[M-1]` está registrada en la bitácora local (`capitulos/capitulo_[N]/bitacora_capitulo.md`). Si no está registrada, el agente debe detenerse, actualizar/crear la bitácora consolidando las escenas anteriores y establecer la cabecera `**Última Escena Registrada:** Escena [M-1]` antes de escribir cualquier línea de prosa de la nueva escena. Esta bitácora acumulativa y la escaleta serán la única lectura obligatoria para la consistencia, evitando releer la prosa extensa de escenas previas.
6. **Evitar Exposición y Explicaciones Redundantes (Anti Info-Dumping):**
   - Queda estrictamente prohibido que los personajes expliquen detalladamente la física de sus habilidades mágicas en voz alta o hagan menciones forzadas a técnicas del pasado si no es relevante para el conflicto actual. Los personajes con entrenamiento táctico se comunican con jerga ágil, natural y directa (ej. "Yo los cubro" en lugar de "Nos mantendremos bajo mi escudo de proyección violeta").
7. **Coherencia Lógica y Espacialidad Táctica:**
   - Si a un personaje se le ordena mantener una posición fija o elevada (ej. un tirador apostado en las alturas), el desarrollo narrativo debe respetar esa distribución espacial en todo momento, evitando que aparezca realizando acciones incompatibles (como descender junto al grupo en el mismo párrafo).
   - El estado físico de las ubicaciones debe respetar la causa-efecto real del combate (un puesto devastado y sin sobrevivientes debe tratarse como perdido, no como asegurado militarmente).
8. **Formato Estricto de Pensamientos en Diálogo:**
   - Todo monólogo o pensamiento interno explícito debe redactarse de forma autónoma en una línea independiente, estructurado bajo el formato: `Personaje: *(Pensamiento)* <Texto>`.
9. **Coherencia Matemática y Numérica de la Trama:**
   - Al redactar diálogos o descripciones donde los personajes hagan referencia a cantidades (por ejemplo, número de misiones completadas/restantes, días transcurridos de viaje, bajas sufridas o hitos alcanzados), el agente debe verificar matemáticamente dicho dato contrastándolo directamente con la cronología en `bitacora_capitulo.md` y la numeración en `escaleta.md` para evitar inconsistencias numéricas y errores de conteo en la prosa.
10. **Evitación de Jerga Técnica en Diálogos Coloquiales:**
    - Queda estrictamente prohibido que los personajes utilicen nombres o tecnicismos de sus habilidades mágicas (por ejemplo, "reflejo", "proyección" o "alteración valvular") durante diálogos informales, bromas, quejas o discusiones acaloradas. Al ser soldados con entrenamiento y pasado común, asumen el funcionamiento de la magia y se refieren directamente al resultado físico de las acciones (por ejemplo, "hacerlas volar", "el desmadre que hiciste", "el escudo") en lugar de a su clasificación técnica, reforzando la naturalidad diegética del lenguaje.
11. **Continuidad Física y Transiciones de Escena:**
    - El inicio de cada nueva escena o capítulo debe conectar explícitamente con el desenlace geográfico, físico y temporal de la escena inmediatamente anterior (tiempos de viaje, estado del equipo, heridas, fatiga y ropas). Queda prohibido comenzar una escena ignorando el desgaste físico previo o realizando cambios de ubicación abruptos sin una explicación de transición breve (ej. detallar la fatiga del viaje o por qué se visten de cierta manera).
12. **Simplificación del Sistema de Poderes en la Prosa Descriptiva (Anti Info-Dumping):**
    - Se prohíbe categorizar o citar la clasificación técnica o específica del sistema de poderes/energía de un personaje en las descripciones narrativas generales en tercera persona. Se debe emplear terminología general (ej. "su maná", "su energía", "su poder"), reservando las clasificaciones o nombres técnicos de habilidades únicamente para diálogos específicos de análisis técnico o medición con dispositivos del universo.
13. **Diálogos de Intriga y Conspiración:**
    - Al redactar interacciones entre personajes conspiradores o antagonistas secundarios en las sombras, evitar la exposición explícita de las identidades o movimientos específicos del grupo protagonista si estos actúan de soporte o peones. El lenguaje debe mantenerse ambiguo y estratégico, haciendo uso de metáforas abstractas ("piezas", "juego", "tablero") para conservar el misterio y suspenso de la trama.
14. **Uso de Experiencias Pasadas y Priorización Cronológica:**
    - Al redactar diálogos, reflexiones o pensamientos de los personajes respecto a sus capacidades, límites o sucesos previos, se deben utilizar las experiencias pasadas registradas en el manuscrito como recurso psicológico o táctico (ej. heridas previas, lecciones aprendidas, fallas en combate). Se debe dar prioridad a las vivencias más recientes en la cronología sobre las más lejanas para asegurar una continuidad emocional verosímil y un desarrollo de personaje fluido.
15. **Coherencia Física de Objetos y Continuidad Espacial Interna:**
    - Al redactar o auditar escenas (especialmente con el filtro `verificador-consistencia`), se debe revisar minuciosamente que el estado, posesión y ubicación de los objetos físicos, reliquias o documentos sea coherente a lo largo de todo el texto de la misma escena. Si un objeto es entregado, destruido o transferido al inicio de la escena, queda estrictamente prohibido que aparezca en posesión del personaje original al final de la escena sin una transición de causa-efecto lógica y explícita en los párrafos intermedios.
16. **Extracción Autónoma de Preferencias Narrativas:**
    - Al finalizar y aprobar la redacción de cada escena (o cuando el autor dé su visto bueno sobre la prosa final de la escena), el agente debe realizar de forma autónoma una auditoría de la prosa aprobada para identificar directrices estilísticas implícitas, tonos, comportamientos o mecánicas mágicas recurrentes preferidas por el autor. Presentará estas observaciones en su mensaje de cierre y propondrá su incorporación formal como incrementos en `preferencias_narrativas.md`.
17. **Actualización Activa de la Escaleta:**
    - Al introducir cambios estructurales o cronológicos a petición del autor durante la redacción de una escena (ej. saltos temporales, reubicación de personajes, redefinición de facciones en combate), se debe actualizar inmediatamente la descripción de las escenas restantes en `escaleta.md` antes de redactar nuevas partes, para evitar incoherencias de planificación.
18. **Registro por Etapas de Vida de los Personajes:**
    - Cuando los personajes principales tengan múltiples etapas de vida o edades descritas en la historia que impliquen variaciones en su madurez, nivel de control de maná o retroceso físico, se deben catalogar y describir como entidades independientes (ej. `Orenz` para el presente, `Orenz_12` para los 12 años, `Orenz_14` para los 14 años) en la Wiki de personajes y en las bitácoras, con el fin de asegurar una referencia de lore precisa y evitar anacronismos en la prosa.
19. **Verificación de Conocimiento y Hechos Recientes:**
    - Al redactar diálogos o situaciones que involucren el estado de conocimiento de los personajes (quién escuchó qué) o juzguen eventos de la escena inmediatamente anterior, el agente tiene la obligación de abrir y leer literalmente el archivo de la escena previa para comprobar que los reclamos sean coherentes con la prosa exacta allí redactada, evitando contradicciones e incoherencias de conocimiento.
20. **Referencias en Diálogos Co-presentes:**
    - Al redactar diálogos entre personajes que se encuentran en el mismo espacio físico y mesa, se debe evitar que se refieran a un interlocutor presente usando títulos indirectos o parentescos en tercera persona (ej. referirse a Leyn como "el hijo del General" en frente de él), prefiriendo el uso de su nombre de pila o referencias en segunda persona para mantener la naturalidad del diálogo.
21. **Consistencia de Hechos Retrospectivos:**
    - Cuando la prosa de una escena posterior haga referencia literal a una promesa, juramento, estado físico u objeto establecido en una escena anterior, el agente tiene la obligación de abrir el archivo de esa escena previa para verificar que dicho hecho haya sido redactado de forma explícita (en diálogos o acciones del narrador), eliminando vacíos narrativos donde el lector deba asumir hitos clave ocurridos "fuera de cámara".

---

## Directrices de Formateo y Mantenimiento de Bitácoras e Historiales

1. **Control de Estado Único y Estandarizado:** Todo archivo de bitácora local debe contener un único encabezado de control de estado en el formato exacto `**Última Escena Registrada:** Escena [N]`. La bitácora histórica macro debe mantener `**Último Capítulo Registrado:** Capítulo [N] (hasta Escena [M])`. Queda estrictamente prohibido duplicar este encabezado o distribuirlo en el cuerpo del texto.
2. **Evitar Líneas Residuales en Edición:** Al actualizar bitácoras, escaletas o historiales mediante herramientas de edición de código, el agente debe verificar minuciosamente que no queden fragmentos de texto huérfanos o líneas residuales duplicadas tras la operación de combinación. Si el cambio involucra modificar párrafos contiguos complejos, se prefiere reescribir la sección lógica completa o sobrescribir el archivo de manera íntegra para garantizar la limpieza textual.
3. **Coherencia Matemática y Numérica Estricta:** Al actualizar bitácoras y escaletas, verificar que los números de escena, cantidad de misiones completadas y restantes concuerden matemáticamente en todos los documentos del proyecto antes de presentar el trabajo.
4. **Prohibición de Registro Anticipado (Actualización Post-Aprobación):**
   - Queda estrictamente prohibido actualizar la Wiki de lore (`/wiki/`), la bitácora del capítulo (`bitacora_capitulo.md`) o la bitácora maestra (`bitacora_historia.md`) utilizando como referencia ideas preliminares, escaletas iniciales o borradores no consolidados. Las bitácoras y fichas de lore solo deben modificarse después de que el archivo final de la escena (`escena_[M]_final.md`) haya sido redactado, verificado por consistencia y aprobado de manera explícita (en el chat) o implícita (al dar el escritor la orden de iniciar la redacción o comandos para la escena siguiente).


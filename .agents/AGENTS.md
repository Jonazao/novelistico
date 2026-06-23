# Reglas del Agente para el Proyecto Novelistico

Este archivo contiene reglas y directrices de comportamiento para el agente dentro de este workspace. Define cuándo y cómo deben activarse los Skills del proyecto de forma automática según la intención detectada en la petición.

## Contexto Conceptual Raíz y Biblia de la Novela
*   **Referencia Obligatoria:** El archivo `premisa_novela.md` ubicado en la raíz del workspace contiene las leyes físicas, la escala de poderes, la sinopsis general y las facciones iniciales de la obra.
*   **Regla de Oro:** Siempre que realices lluvia de ideas (`inspirador-novelas`) o redactes prosa (`redactor-novelas`), lee y respeta estrictamente las limitaciones, tono y reglas descritas en `premisa_novela.md` para garantizar la coherencia conceptual del universo.
*   **Separación Estricta de Entornos (Activo vs. Ejemplo):**
    *   **Directorio Activo:** Toda la escritura, planificación, actualización de bitácoras, wiki y compilación de la historia activa de Orenz/Eizenbert debe realizarse exclusivamente en las carpetas y archivos ubicados en la raíz del proyecto (`capitulos/`, `wiki/`, `bitacora_historia.md`, `premisa_novela.md`, `manuscrito_completo.md`).
    *   **Directorio de Ejemplo:** La carpeta `ejemplo/` contiene un ejercicio cerrado y simulado de otra obra ("Sangre y Hierro"). El agente **solo** debe consultarla como plantilla de formato o referencia técnica de cómo deben lucir los archivos resultantes. **Bajo ninguna circunstancia** se debe mezclar el lore, nombres de personajes, eventos u objetos de `ejemplo/` con la historia activa, ni escribir nuevas escenas o bitácoras dentro de `ejemplo/`.


## Sintaxis de Comandos de Atajo (Shortcuts)
El agente interpretará comandos de una sola línea que comiencen con el prefijo `!` y cargará inmediatamente el Skill correspondiente, expandiendo de manera autónoma los argumentos a las rutas correctas:

*   **`!ritmo cap=[N] esc=[M]`** $\rightarrow$ Carga `analizador-ritmo` para el archivo `capitulos/capitulo_[N]/escena_[M]_final.md`.
*   **`!consistencia cap=[N] esc=[M]`** $\rightarrow$ Carga `verificador-consistencia` para el archivo `capitulos/capitulo_[N]/escena_[M]_final.md`.
*   **`!wiki cap=[N] esc=[M]`** $\rightarrow$ Carga `wiki-novelas` para procesar `capitulos/capitulo_[N]/escena_[M]_final.md`.
*   **`!bitacora cap=[N]`** $\rightarrow$ Carga `bitacora-novelas` para procesar todas las escenas finalizadas del capítulo `[N]`.
*   **`!escaleta cap=[N]`** $\rightarrow$ Carga `redactor-novelas` en modo **Paso 1 (Escaleta)** para planificar el capítulo `[N]`.
*   **`!redactar cap=[N] esc=[M]`** $\rightarrow$ Carga `redactor-novelas` en modo **Paso 2 (Redacción)** para escribir la escena `[M]`.
*   **`!prompt personaje=[Nombre]`** o **`lugar=[Nombre]`** $\rightarrow$ Carga `creador-prompts-visuales` para el asset indicado de la Wiki.
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

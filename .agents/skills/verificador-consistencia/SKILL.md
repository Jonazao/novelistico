---
name: verificador-consistencia
description: Revisa escenas o capítulos escritos buscando incoherencias lógicas, temporales o físicas, auditando la causa-efecto de los hechos, el desarrollo de la trama y la alíneación con la directriz general de la obra.
---

# Verificador de Consistencia de Trama y Continuidad

Este Skill actúa como un editor asistente de control de calidad. Revisa los nuevos borradores de texto de la novela para comprobar si violan la continuidad física o lógica establecida en las fichas de la Wiki (`wiki/`), las bitácoras y la escaleta del capítulo.

## Instrucciones de Análisis de Consistencia

Al ser invocado para auditar un fragmento de texto:

### 1. Lectura del Contexto
*   Escanea la carpeta `wiki/` y los archivos de bitácora previos para recabar el estado físico de los personajes (edad, cicatrices, accesorios, amputaciones), el estado de las ubicaciones (si están destruidas, incendiadas, limpias) y el estado de los objetos.
*   **Guardias de Inicialización de Contexto:** Antes de realizar la auditoría, si los archivos base (`premisa_novela.md`, `preferencias_narrativas.md`, `bitacora_historia.md` o la carpeta `wiki/`) no existen, el agente los inicializará de forma autónoma copiando sus respectivas plantillas desde `.agents/templates/` para evitar fallos por archivos ausentes. Si la base de datos de la wiki está vacía o recién inicializada, el verificador emitirá una alerta suave en el reporte indicando que no hay lore registrado suficiente para contrastar, permitiendo continuar la auditoría en lugar de colapsar la ejecución.

### 2. Proceso de Auditoría
*   Lee detalladamente el nuevo fragmento de texto.
*   Busca contradicciones directas e indirectas, tales como:
    *   Un personaje realizando acciones físicas imposibles en base a sus lesiones previas (ej. ver con el ojo izquierdo perdido, caminar con piernas paralizadas).
    *   Un personaje vistiendo prendas inconsistentes o portando un objeto clave que actualmente tiene otro personaje.
    *   Contradicciones internas de la propia escena analizada (ej. un objeto o documento que se entrega o se destruye al inicio del fragmento y vuelve a aparecer en posesión o en el inventario del personaje original al final de la misma escena sin una justificación de causa-efecto lineal).
    *   Un lugar destruido previamente que aparece de repente en perfecto estado sin explicación.
    *   Errores cronológicos en el paso de los días o en las marcas temporales.
    *   **Dislocación Geográfica y Espacial:** Personajes que aparezcan de forma instantánea en ubicaciones distantes a su última posición física conocida, o que interactúen en bases de retaguardia cuando en la escena anterior se encontraban en el frente de batalla, sin que medie un párrafo de viaje, transición de tiempo o justificación diegética de su regreso.
    *   **Inconsistencia de Destinos de Misión:** Cargamentos, convoyes, mensajes u objetivos tácticos que sean entregados o redirigidos a ubicaciones incompatibles con la meta explícitamente declarada en la escena previa (ej. proteger carretas destinadas a abastecer la línea del frente exterior y hacerlas ingresar a los almacenes centrales de la fortaleza de partida).
    *   **Incoherencia de Conocimiento y Presencia (Matriz de Presencia):** Personajes haciendo preguntas sobre información o diálogos que ocurrieron en una habitación donde ellos mismos estaban presentes físicamente, o actuando como si poseyeran información de una reunión privada en la que no participaron.
    *   **Contradicción Literal con la Escena Anterior:** Afirmaciones o reclamos de personajes sobre lo sucedido en escenas previas (ej. reprender a un personaje por cometer un error en combate) que contradigan literalmente la prosa final escrita en el archivo de dicha escena previa (ej. donde se redactó que el personaje actuó con control limpio).
    *   **Inconsistencia de Diálogo Co-presente:** Personajes que se refieran a otro interlocutor presente en la conversación usando descripciones complejas o relaciones en tercera persona en lugar de referirse a ellos de forma directa.
    *   **Vacío en Hitos Retrospectivos:** El texto posterior asume un hecho explícito (un juramento, acuerdo, o herida) del que no existe registro escrito en el archivo de la escena previa correspondiente.
    *   **Incoherencia Causa-Efecto:** Sucesos importantes o reacciones de facciones que no tengan una motivación lógica o justificación previa explicada en la historia (ej. diplomacia inexplicable en medio de una agresión abierta, filtración de datos sin una fuente verosímil).
    *   **Desviación de la Directriz:** Escenas o diálogos que pierdan el hilo conductor de la trama o contradigan el destino general del capítulo y de la novela establecido en la escaleta y la biblia del universo.

### 3. Formato del Reporte de Auditoría
Presenta un reporte estructurado y fácil de leer con las siguientes secciones:

```markdown
# Reporte de Auditoría de Continuidad y Trama: [Capítulo/Escena]

## 1. Elementos Verificados y Correctos
- **[Nombre del Elemento/Hecho]** `[OK]`: Explicación de por qué respeta el lore y mantiene la coherencia de causa-efecto.

## 2. Alertas de Continuidad Detectadas
- **[Nombre del Elemento]** `[ALERTA DETECTADA]`:
  *   **Inconsistencia:** Qué frase o detalle en el borrador viola el lore o la lógica.
  *   **Lore de Referencia:** Cita la contradicción del archivo de la Wiki, Bitácora o Escaleta.
  *   **Propuesta de Corrección:** Una sugerencia redactada para corregir el error en la prosa.

## 3. Análisis de Directriz y Desarrollo de la Trama
*   **Coherencia Causa-Efecto:** Evaluación de si las decisiones y eventos narrados están debidamente fundamentados y justificados.
*   **Alineación con la Directriz:** Análisis de si la escena hace progresar la trama del capítulo en la dirección correcta y abre los hilos adecuados para la novela a largo plazo.
```

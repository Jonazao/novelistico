---
name: analizador-novelas
description: Analiza textos/capítulos de novelas literarias para mejorar la narrativa, inferir emociones de los personajes y formatear diálogos estructurados (Personaje: Diálogo) en vez de usar guiones.
---

# Analizador de Novelas Literarias

Este Skill es responsable de analizar textos o capítulos de novelas literarias, proponer mejoras en la narrativa, e inferir tonos, emociones y sentimientos de los personajes, transformando los diálogos tradicionales con guiones (`—`) a un estilo estructurado.

## Instrucciones de Análisis y Reescritura

Al ser invocado para revisar un fragmento o capítulo de una novela, debes seguir las siguientes directrices:

### 1. Formateo Estructurado de Diálogos
* **Eliminación de Guiones:** Reemplaza todos los guiones de diálogo tradicionales (`—`) por un formato estructurado de tipo `Emisor: <Diálogo>`.
* **Identificación del Emisor:**
  * Si el personaje tiene un nombre propio identificado en el contexto inmediato, úsalo. Ejemplo: `Robert Langdon: <Diálogo>`.
  * Si el personaje no tiene nombre propio pero es describible por su rol o apariencia física en la escena, usa esa descripción corta de forma consistente. Ejemplo: `Mujer joven: <Diálogo>` o `Físico de partículas: <Diálogo>`.
* **Tratamiento de Acotaciones e Incisos:**
  * Extrae los verbos de habla (*verba dicendi* como "dijo", "respondió", "suplicó", "insistió") y los gestos/acciones descritos en los incisos de diálogo.
  * Integra estas acciones y gestos de forma fluida dentro de la narrativa que precede o sigue al diálogo, evitando interrumpir la línea de diálogo estructurada.

### 2. Inferencia Emocional y de Tono
* Analiza detalladamente la redacción, la estructura y las palabras seleccionadas en el texto original.
* Deduce el tono (sarcástico, temeroso, autoritario, etc.), la "temperatura" emocional (calma, ira contenida, excitación) y el sentimiento de cada personaje en el momento de hablar.
* Asegúrate de que las descripciones narrativas que rodean al diálogo reflejen o complementen esta inferencia emocional para enriquecer la atmósfera.

### 3. Interacción con el Autor (Preguntas de Clarificación)
* Si al analizar un diálogo o una escena tienes dudas o ambigüedades respecto a:
  * Quién es el emisor de una línea de diálogo.
  * El tono o emoción exacta que se quiere transmitir.
  * El contexto del escenario o la motivación detrás de una acción.
* **No asumas.** En su lugar, genera una sección de **"Preguntas de Clarificación para el Autor"** detallando cada duda para que sea resuelta antes o durante la propuesta de cambios.

---

## Ejemplo de Transformación Esperada

### Texto Original:
> Desde lo alto de los escalones de la Gran Pirámide de Giza, una joven lo llamó, riéndose.
> —¡Date prisa, Robert! ¡Ya sabía yo que debería haberme casado con un hombre más joven! —Su sonrisa era mágica.
> Él se esforzaba por seguir su ritmo, pero las piernas no le respondían.
> —Espera —suplicó—. Por favor...

### Texto Transformado / Propuesta de Estilo:
> Desde lo alto de los escalones de la Gran Pirámide de Giza, una joven lo llamó, riéndose con una sonrisa mágica.
> 
> Mujer joven: ¡Date prisa, Robert! ¡Ya sabía yo que debería haberme casado con un hombre más joven!
> 
> Él se esforzaba por seguir su ritmo, pero las piernas no le respondían. Con tono suplicante, intentó detenerla.
> 
> Robert Langdon: Espera... Por favor...

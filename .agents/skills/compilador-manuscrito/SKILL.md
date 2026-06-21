---
name: compilador-manuscrito
description: Ensambla y compila de forma ordenada los capítulos y escenas del proyecto en un archivo único de manuscrito, aplicando formato limpio para lectura o publicación.
---

# Compilador de Manuscrito Editorial

Este Skill es responsable de escanear el workspace en busca de las distintas escenas y capítulos que han sido escritos y validados por el autor, y unirlos de forma ordenada en un único documento maestro de la novela (ej. `manuscrito_completo.md`), realizando tareas de limpieza editorial automática.

## Instrucciones de Compilación y Limpieza

Al ser invocado para compilar el manuscrito:

### 1. Escaneo y Clasificación de Archivos
*   Busca todos los archivos correspondientes a escenas finalizadas en el workspace siguiendo la ruta:
    `capitulos/capitulo_*/escena_*_final.md` (donde `*` representa la numeración secuencial).
*   Ignora cualquier archivo con el patrón `_borrador.txt` o `escaleta.md`.
*   Ordena los archivos secuencialmente basándose en el número de capítulo primero y luego en el número de escena.

### 2. Procesamiento de Limpieza Editorial
Al unir las secciones, realiza las siguientes tareas de depuración en el texto:
*   **Eliminar Encabezados de Metadata de IA:** Remueve notas de escena, TODOs, listado de personajes y cualquier comentario técnico del asistente. Solo debe quedar la prosa pura del libro.
*   **Normalización de Encabezados:** Estandariza la jerarquía de títulos. Por ejemplo, al iniciar un nuevo capítulo añade el título `# Capítulo X: [Nombre]` y divide las escenas utilizando el separador de tres asteriscos centrados (`***`).
*   **Formateo de Diálogos:** Asegura la uniformidad de todos los diálogos (`Personaje: <Diálogo>`) y la limpieza de los interlineados.

### 3. Generación del Archivo Consolidado
*   Escribe el manuscrito final en un archivo en la raíz del workspace llamado `manuscrito_completo.md`.
*   Inicia el manuscrito con una página de presentación limpia que contenga:
    *   Título de la Obra.
    *   Nombre del Autor.
    *   Fecha de Compilación.
    *   Tabla de Contenidos dinámica en Markdown.

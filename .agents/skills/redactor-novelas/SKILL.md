---
name: redactor-novelas
description: Toma un camino o idea y lo expande en una escena o capítulo completo de forma secuencial, estructurando primero una escaleta de escenas y redactando prosa escena por escena.
---

# Redactor y Expandidor de Novelas

Este Skill es responsable de tomar un camino narrativo (Path) o borrador (Draft) seleccionado por el escritor, planificar su estructura secuencial mediante una escaleta y redactar la prosa literaria de forma de alta calidad escena por escena, gestionando la escritura de forma modular.

## Proceso de Expansión en Dos Pasos y Rutas de Archivo

Para mantener la calidad de la prosa y evitar divagaciones o incoherencias, sigue estrictamente este flujo de trabajo:

### Paso 1: Generación de la Escaleta (Outline)
Antes de redactar prosa extensa, lee los datos de la Wiki y la Bitácora y propón una **Escaleta de Escenas** cronológica para el capítulo `[N]`.
*   **Guardias de Inicialización:**
    - Si los archivos base del proyecto (`premisa_novela.md`, `preferencias_narrativas.md`) no existen en la raíz, el agente debe crearlos de forma autónoma copiando sus respectivas plantillas desde `.agents/templates/`.
    - Si la carpeta `capitulos/capitulo_[N]/` o el archivo `escaleta.md` no existen, el agente creará el directorio de inmediato e inicializará el archivo copiando la plantilla `.agents/templates/escaleta.md` de forma autónoma antes de proponer y escribir el outline.
*   **Número de escenas:** Genera el número de escenas especificado en el parámetro `esc=[K]`. Si no se provee este parámetro, genera **exactamente 5 escenas** por defecto.
*   **Destino del archivo:** Escribe/actualiza la escaleta en `capitulos/capitulo_[N]/escaleta.md`.
*   **Estructura:**
    ```markdown
    # Escaleta Propuesta para el Capítulo [N]

    *   **Escena 1: [Título de la Escena]**
        *   **Objetivo/Hito:** Qué ocurre de relevante en la trama.
        *   **Personajes involucrados:** Quienes participan y su estado.
        *   **Detalles visuales/Ambientación:** Descripción breve de la atmósfera.
    *   **Escena 2: [Título de la Escena]**
        *   ...
    ```

*Detente aquí y solicita la aprobación o retroalimentación del escritor sobre la escaleta antes de comenzar a redactar.*

### Paso 2: Redacción Escena por Escena
Una vez que el escritor apruebe o ajuste la escaleta para el capítulo `[N]`:
1.  **Pre-condición de Registro de Bitácora:** Antes de comenzar a escribir la prosa de la escena `[M]`, lee `capitulos/capitulo_[N]/bitacora_capitulo.md` y asegúrate de que esté creada y actualizada hasta la escena `[M-1]`. Si falta registrar alguna escena previamente escrita y finalizada, actualiza la bitácora antes de redactar.
2.  **Redacta únicamente la escena actual (generalmente la primera escena pendiente).** No escribas todo el capítulo de golpe.
3.  **Entrada de borrador (opcional):** Si el escritor aporta notas crudas, leelas desde `capitulos/capitulo_[N]/escena_[M]_borrador.txt`.
4.  **Generación de Prosa Inicial:** Redacta un borrador inicial de la prosa manteniendo un estilo literario rico, inmersiva, detallado, en la persona narrativa adecuada y aplicando el formato de diálogos estructurados `Personaje: <Diálogo>` de `analizador-novelas` (sin guiones `—`).
5.  **Bucle Automático de Control de Calidad:**
    *   **Filtro 1: Auditoría de Consistencia:** Ejecuta mentalmente el Skill `verificador-consistencia` sobre la prosa generada. Escanea la carpeta `wiki/` y la bitácora anterior. Si se detectan inconsistencias (`[ALERTA DETECTADA]`), reescribe y corrige de inmediato los fragmentos afectados en la prosa.
    *   **Filtro 2: Auditoría de Ritmo:** Ejecuta mentalmente el Skill `analizador-ritmo` sobre la prosa y clasifica el pacing:
        *   *Ritmo Malo o Medio (con grandes valles o info-dumping):* Reescribe de forma autónoma la prosa para optimizar la tensión dramática, balancear diálogos/acciones u acortar/alargar oraciones basándote en las sugerencias editoriales.
        *   *Ritmo Aceptablemente Bueno:* No realices cambios a la prosa y conserva el texto.
6.  **Destino del archivo final:** Escribe la prosa literaria final (con todas las autocorrecciones aplicadas) en `capitulos/capitulo_[N]/escena_[M]_final.md`.
7.  **Presentación al escritor:** Presenta el texto de la escena finalizada y añade a continuación una sección estructurada de **Control de Calidad Realizado**:
    *   **Inconsistencias de Lore:** Detalla si se detectó alguna y cómo se autocorrigió (o indica *"Ninguna detectada. Continuidad OK"*).
    *   **Ritmo Dramático:** Indica la clasificación de ritmo inicial y si se requirió autocorrección. Lista las sugerencias editoriales resultantes (especialmente las pendientes para que las evalúe el escritor).
8.  Al finalizar, solicita al escritor comentarios o su aprobación para proceder con la redacción de la siguiente escena.


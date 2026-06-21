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
1.  **Redacta únicamente la Primera Escena.** No escribas todo el capítulo de golpe.
2.  **Entrada de borrador (opcional):** Si el escritor aporta notas crudas, leelas desde `capitulos/capitulo_[N]/escena_[M]_borrador.txt`.
3.  **Destino del archivo final:** Escribe la prosa literaria de la escena finalizada en `capitulos/capitulo_[N]/escena_[M]_final.md`.
4.  Mantén una prosa literaria rica, inmersiva, detallada y en la persona narrativa adecuada.
5.  **Aplica el formato de diálogos estructurados:** Todos los diálogos que ocurran en la escena deben usar el formato `Personaje: <Diálogo>` de `analizador-novelas` (sin guiones `—`).
6.  **Consistencia de Lore:** Verifica que los rasgos visuales de los personajes y el estado de los lugares coincidan con lo registrado en la carpeta `/wiki/`.
7.  Al finalizar la redacción de la escena, solicita al escritor comentarios o su aprobación para proceder con la redacción de la siguiente escena.

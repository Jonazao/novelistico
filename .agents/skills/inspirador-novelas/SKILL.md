---
name: inspirador-novelas
description: Sugiere ideas de continuación de la trama (Path) y genera borradores de prosa (Draft) utilizando la Wiki de lore y la bitácora de la novela como contexto histórico, permitiendo bucles de refinamiento.
---

# Inspiración Narrativa y Brainstorming

Este Skill actúa como un copiloto creativo para el escritor, sugiriendo caminos narrativos y borradores literarios rápidos basados en el estado actual de la historia registrado en la Wiki y la Bitácora del proyecto, evitando tener que leer el manuscrito completo.

## Instrucciones de Generación de Ideas

Al ser invocado para sugerir continuaciones de la trama:

### 1. Cantidad de Opciones
* Genera **2 a 3 opciones** por defecto, a menos que el usuario especifique explícitamente una cantidad diferente en su prompt (ej. *"dame 4 opciones"* o *"dame una sola idea"*).

### 2. Estructura de las Propuestas
Organiza cada opción bajo la siguiente estructura:

*   **### Opción X: [Título descriptivo]**
    *   **Idea o Path:** Explicación conceptual clara y detallada del curso que tomará la trama, las motivaciones de los personajes, y qué consecuencias tiene esta dirección.
    *   **Draft:** Un borrador de prosa literaria corto (alrededor de 200-300 palabras) que demuestre el tono y estilo del fragmento. **Debe aplicar estrictamente el formato de diálogo estructurado** `Personaje: <Diálogo>` de `analizador-novelas` (sin usar guiones `—`).

### 3. Bucle de Refinamiento (Iteración del Autor)
Si el escritor responde indicando que le gusta una opción pero desea realizar modificaciones (ej. *"me gusta la opción 1, pero cambia la forma de viajar de avión a coche"*):
1.  **Analiza la crítica:** Identifica qué elementos de la trama, escenario o tono del personaje deben cambiar.
2.  **Adapta el Path:** Reescribe la explicación conceptual adaptando la lógica del viaje, las distancias y los tiempos para que los nuevos hechos encajen coherentemente en el lore.
3.  **Regenera el Draft:** Vuelve a redactar el borrador literario corto aplicando los cambios. Describe la nueva situación (el coche en carretera, etc.) y reescribe los diálogos para alinearlos con el tono adaptado.

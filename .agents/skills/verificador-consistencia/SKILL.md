---
name: verificador-consistencia
description: Revisa escenas o capítulos escritos buscando incoherencias lógicas, temporales o físicas respecto a la Wiki de lore y la bitácora de la historia, emitiendo alertas de continuidad.
---

# Verificador de Consistencia de Trama y Continuidad

Este Skill actúa como un editor asistente de control de calidad. Revisa los nuevos borradores de texto de la novela para comprobar si violan la continuidad física o lógica establecida en las fichas de la Wiki (`wiki/`) y las bitácoras anteriores.

## Instrucciones de Análisis de Consistencia

Al ser invocado para auditar un fragmento de texto:

### 1. Lectura del Contexto
*   Escanea la carpeta `wiki/` y los archivos de bitácora previos para recabar el estado físico de los personajes (edad, cicatrices, accesorios, amputaciones), el estado de las ubicaciones (si están destruidas, incendiadas, limpias) y el estado de los objetos.

### 2. Proceso de Auditoría
*   Lee detalladamente el nuevo fragmento de texto.
*   Busca contradicciones directas e indirectas, tales como:
    *   Un personaje realizando acciones físicas imposibles en base a sus lesiones previas (ej. ver con el ojo izquierdo perdido, caminar con piernas paralizadas).
    *   Un personaje vistiendo prendas inconsistentes o portando un objeto clave que actualmente tiene otro personaje.
    *   Un lugar destruido previamente que aparece de repente en perfecto estado sin explicación.
    *   Errores cronológicos en el paso de los días o en las marcas temporales.

### 3. Formato del Reporte de Auditoría
Presenta un reporte estructurado y fácil de leer con las siguientes secciones:

```markdown
# Reporte de Auditoría de Continuidad: [Capítulo/Escena]

## 1. Elementos Verificados y Correctos
- **[Nombre del Elemento]** `[OK]`: Explicación de por qué respeta el lore (ej. *"Se menciona que Robert Langdon usa el parche de cuero negro al subir al coche, consistente con wiki/personajes/robert_langdon.md"*).

## 2. Alertas de Continuidad Detectadas
- **[Nombre del Elemento]** `[ALERTA DETECTADA]`:
  *   **Inconsistencia:** Qué frase o detalle en el borrador viola el lore.
  *   **Lore de Referencia:** Cita la contradicción del archivo de la Wiki o Bitácora (ej. *"En el texto Langdon le guiña el ojo izquierdo a Kohler, pero según wiki/personajes/robert_langdon.md perdió el ojo izquierdo en el Día 2."*).
  *   **Propuesta de Corrección:** Una sugerencia redactada para corregir el error en la prosa.
```

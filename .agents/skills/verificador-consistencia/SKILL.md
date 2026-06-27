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

### 2. Proceso de Auditoría
*   Lee detalladamente el nuevo fragmento de texto.
*   Busca contradicciones directas e indirectas, tales como:
    *   Un personaje realizando acciones físicas imposibles en base a sus lesiones previas (ej. ver con el ojo izquierdo perdido, caminar con piernas paralizadas).
    *   Un personaje vistiendo prendas inconsistentes o portando un objeto clave que actualmente tiene otro personaje.
    *   Contradicciones internas de la propia escena analizada (ej. un objeto o documento que se entrega o se destruye al inicio del fragmento y vuelve a aparecer en posesión o en el inventario del personaje original al final de la misma escena sin una justificación de causa-efecto lineal).
    *   Un lugar destruido previamente que aparece de repente en perfecto estado sin explicación.
    *   Errores cronológicos en el paso de los días o en las marcas temporales.
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

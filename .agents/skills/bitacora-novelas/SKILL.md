---
name: bitacora-novelas
description: Lee un capítulo de una novela y abstrae los eventos, personajes, datos clave y puntos de control en una bitácora estructurada de hechos de la historia.
---

# Bitácora de Novelas Literarias

Este Skill es responsable de leer capítulos de novelas literarias, extraer los acontecimientos clave y estructurar la información en forma de bitácora histórica. Ayuda a mantener una consistencia de trama, personajes, objetos y escenarios a lo largo de la creación del manuscrito.

## Instrucciones de Extracción y Estructuración

Al ser invocado para registrar o analizar un capítulo de la historia, sigue este esquema estructurado para reportar los hallazgos:

### 1. Esquema de Salida Requerido

```markdown
# Bitácora de Historia: Capítulo [Número/Nombre del Capítulo]

## 1. Resumen Breve
*Una descripción en 1 o 2 oraciones del propósito principal o del acontecimiento central de este capítulo.*

## 2. Eventos Importantes (Cronología de Hechos)
- **[Momento/Hito]**: Descripción clara del evento, acciones realizadas y desenlace de la escena.
- **[Momento/Hito]**: ...

## 3. Registro y Actualización de Personajes
- **[Nombre del Personaje / Descripción]**:
  - **Estado actual**: (Ej. Vivo, herido, desaparecido, aturdido).
  - **Revelaciones/Detalles descubiertos**: (Rasgos físicos, edad, psicología, profesión, relaciones o secretos expuestos en este capítulo).

## 4. Pistas, Símbolos y Objetos Clave
- **[Nombre del Objeto/Símbolo]**: Qué es, qué relevancia tiene en la escena y qué implicaciones sugiere para la trama.

## 5. Nuevas Ubicaciones y Entornos
- **[Nombre del Lugar]**: Detalles visuales o atmosféricos descritos en el capítulo.

## 6. Misterios y Preguntas Abiertas
- Lista de preguntas o cabos sueltos que deja el capítulo y que deberán resolverse más adelante.
```

### 2. Rutas de Archivos y Persistencia (Importante)
Cuando proceses el capítulo `[N]`:
1.  **Bitácora Local:** Escribe/actualiza el archivo `capitulos/capitulo_[N]/bitacora_capitulo.md` con los hallazgos del capítulo usando la estructura anterior.
2.  **Bitácora Histórica:** Concatenar o añadir la nueva sección de este capítulo al final de `bitacora_historia.md` en la raíz del workspace para mantener el registro unificado.
3.  **Fidelidad al Texto:** Registra únicamente hechos explícitos o implícitos justificados por la narrativa. Evita especulaciones de trama futura fuera de "Misterios y Preguntas Abiertas".

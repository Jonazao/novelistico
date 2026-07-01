---
name: wiki-novelas
description: Lee un capítulo o texto narrativo y genera o actualiza un registro modular ("Wiki") del universo (personajes, lugares, organizaciones y objetos) con sus atributos visuales detallados y línea de tiempo de cambios.
---

# Wiki y Biblioteca del Universo Literario

Este Skill es responsable de extraer, estructurar y mantener consistente la información del universo narrativo (Wiki) para facilitar la posterior generación de assets visuales (imágenes) y asegurar la consistencia temporal de la historia.

## Pre-requisitos de Ejecución (Obligatorio)
*   **Capítulo Consolidado Existente:** Al invocar el comando `!wiki cap=[N]` o procesar la wiki de un capítulo, es un **requisito obligatorio** que el archivo consolidado `capitulos/capitulo_[N]/capitulo_[N]_completo.md` exista físicamente y esté actualizado.
*   **Inicialización Automática de Estructura de la Wiki:** Antes de procesar la wiki, el agente debe verificar la presencia de la carpeta `wiki/` y del archivo `wiki/README.md` en el workspace. Si no existen, creará la estructura de carpetas y el índice central de forma autónoma copiando `.agents/templates/wiki_README.md` (guardado como `wiki/README.md`) para asegurar la continuidad del flujo.
*   **Control de Errores:** Si el archivo consolidado del capítulo no existe, el asistente **no debe realizar ninguna acción de actualización de Wiki ni de índice**. Debe arrojar un Error explícito al escritor indicándole que hace falta compilar el capítulo completo previamente, sugiriéndole ejecutar primero el script utilitario: `node compilar.js --cap=[N]` (o el comando de atajo `!compilar`).

## Organización de Archivos de la Wiki (Rutero del Workspace)

El contenido debe persistirse de forma modular en archivos individuales y minúsculas bajo la carpeta `wiki/` del workspace:

```text
wiki/
├── README.md               <-- Índice centralizado (tabla de contenidos)
├── personajes/
│   └── [nombre].md         <-- ej. robert_langdon.md
├── lugares/
│   └── [nombre].md         <-- ej. ensenada.md
├── organizaciones/
│   └── [nombre].md         <-- ej. illuminati.md
└── objetos/
    └── [nombre].md         <-- ej. cruz_de_oro.md
```

## Instrucciones de Procesamiento y Actualización

Al procesar una escena o capítulo:

### 1. Gestión del Índice Central (`wiki/README.md`)
*   Si no existe, inicialízalo.
*   Cada vez que se cree un nuevo archivo de asset, agrégalo a la sección correspondiente del índice en el formato:
    `- [[Nombre de la Entidad]]([ruta_relativa_desde_wiki]) - *[Breve descripción de una línea]*`
*   Ejemplo: `- [Robert Langdon](personajes/robert_langdon.md) - *Profesor de iconología de Harvard.*`

### 2. Estructura y Creación de Fichas Individuales (Estandarización Obligatoria)

Para cada entidad identificada en la narrativa, crea o edita su archivo de markdown correspondiente siguiendo estrictamente el formato y campos de la [Guía de Plantillas Estándar](../../../.agents/templates/wiki_plantillas.md).

*   **Ubicación Geográfica Obligatoria (Fichas de Lugares):** Toda ficha de lugar debe indicar de forma explícita en su campo "Ubicación Geográfica" la región y el PAÍS correspondiente (ej. País 7, País 4, Imperio de Solaria) para mantener la consistencia del mapa de lore.

#### A. Ficha de Personajes (`wiki/personajes/[nombre_personaje].md`)
*   **Atributos Visuales Base:** Describe con el máximo detalle físico y de vestimenta la apariencia del personaje (Raza, edad estimada, complexión, rostro, cabello, ojos, marcas y vestimenta habitual). Esto servirá como prompt o guía de generación de imágenes.
*   **Evolución y Estado Cronológico:** Registra cada cambio físico, de vestimenta o de estado de salud bajo un punto cronológico (ej. `- **[Capítulo X / Día Y]:** ...`).

#### B. Ficha de Lugares (`wiki/lugares/[nombre_lugar].md`)
*   **Atributos Visuales y Ambientales:** Describe arquitectura/estilo, clima, iluminación y paleta de colores del lugar.
*   **Evolución y Estado Cronológico:** Registra cambios estructurales (destrucción, incendios, remodelaciones) de forma secuencial.

#### C. Ficha de Organizaciones (`wiki/organizaciones/[nombre_organizacion].md`)
*   **Atributos Visuales e Identidad:** Detalla emblemas, colores oficiales, sede principal y miembros.
*   **Evolución y Estado Cronológico:** Registra su surgimiento, alianzas, guerras o declive.

#### D. Ficha de Objetos (`wiki/objetos/[nombre_objeto].md`)
*   **Atributos Visuales:** Detalla materiales, dimensiones, grabados y portador actual.
*   **Evolución y Estado Cronológico:** Registra cambios de estado (roto, reparado) o de dueño.

### 3. Registro de Cambios Cronológicos
*   **No sobreescribas los datos pasados:** El bloque de "Atributos Visuales Base" refleja el estado general o inicial del asset. Cualquier cambio o suceso que altere ese estado (por ejemplo, perder un ojo, destrucción de un edificio, muerte de un personaje) debe registrarse agregando una nueva línea en la sección **Evolución y Estado Cronológico** con su respectivo identificador de capítulo/día.

---
name: wiki-novelas
description: Lee un capítulo o texto narrativo y genera o actualiza un registro modular ("Wiki") del universo (personajes, lugares, organizaciones y objetos) con sus atributos visuales detallados y línea de tiempo de cambios.
---

# Wiki y Biblioteca del Universo Literario

Este Skill es responsable de extraer, estructurar y mantener consistente la información del universo narrativo (Wiki) para facilitar la posterior generación de assets visuales (imágenes) y asegurar la consistencia temporal de la historia.

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

### 2. Estructura y Creación de Fichas Individuales

Para cada entidad identificada en la narrativa, crea o edita su archivo de markdown correspondiente:

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

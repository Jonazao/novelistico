---
name: creador-prompts-visuales
description: Lee una ficha de la Wiki (personaje, lugar, organización u objeto) y la traduce a un prompt de generación de imágenes (en inglés) optimizado para Midjourney, DALL-E, etc., con requisitos de hoja de modelo y vistas múltiples.
---

# Creador de Prompts Visuales para Generación de Assets

Este Skill lee la información física y descriptiva de las fichas en `/wiki/` y genera instrucciones de imagen (prompts) detalladas y optimizadas en **inglés** (el idioma principal comprendido por los motores de generación de imágenes como Midjourney, DALL-E 3 y Stable Diffusion).

## Instrucciones y Requisitos de Generación de Prompts

Al ser invocado para generar prompts de un asset de la Wiki, debes proveer dos variaciones de prompts especializadas según el tipo de asset:

### 1. Requisitos para PERSONAJES (`wiki/personajes/`)
Debes generar dos prompts:
*   **Prompt 1: Hoja de Modelo (Character Sheet):** Diseñado para generar el personaje aislado en múltiples ángulos.
    *   *Estructura del Prompt:* `Model sheet, concept art character sheet of [Descripción física detallada del personaje, vestimenta, rasgos], full body view, multiple angles showing front, side, and 3/4 views, different facial expressions, white background, neutral lighting, game concept art style, highly detailed, Unreal Engine 5 render --ar 16:9`
*   **Prompt 2: Retrato Cinematográfico (Cinematic Portrait):** Diseñado para una escena o retrato estilizado.
    *   *Estructura del Prompt:* `Cinematic portrait, close-up shot of [Descripción física y emocional del personaje], in a [Describir escenario o fondo dramático], cinematic lighting, dramatic shadows, photorealistic, 8k resolution, shot on 85mm lens, moody color grading --ar 16:9`

### 2. Requisitos para LUGARES/ENTORNOS (`wiki/lugares/`)
Debes generar tres prompts para tomas desde diferentes ángulos y escalas:
*   **Prompt 1: Toma Panorámica Exterior (Establishing Wide Shot):**
    *   *Estructura:* `Establishing wide shot, landscape view of [Nombre del lugar y descripción de su arquitectura, clima, cielo y atmósfera], photorealistic, cinematic camera angle, volumetric lighting, epic scale, 8k resolution --ar 16:9`
*   **Prompt 2: Toma Interior de Gran Angular (Interior Wide Shot):**
    *   *Estructura:* `Wide-angle interior shot of [Descripción del interior del lugar, iluminación, muebles, texturas y colores predominantes], high detail, dramatic lighting, shot on 24mm lens, realistic --ar 16:9`
*   **Prompt 3: Toma de Detalle o Ángulo Alternativo (Close-up Detail or Dutch Angle):**
    *   *Estructura:* `Cinematic close-up of [Detalle de un elemento específico, ej. ruinas carbonizadas, ventanas rotas, estanterías], dramatic low-angle / high-angle view, moody atmosphere, highly detailed --ar 16:9`

### 3. Requisitos para ORGANIZACIONES (`wiki/organizaciones/`)
Debes generar dos prompts:
*   **Prompt 1: Diseño Vectorial del Emblema (Vector Logo Design):**
    *   *Estructura:* `Vector logo design, clean graphic of [Descripción del símbolo/emblema, ej. Illuminati ambigram], flat design, symmetrical, isolated on a solid white background, minimal, high-quality vector --no shadows gradient`
*   **Prompt 2: Emblema en Contexto (Symbol on Fabric/Banner):**
    *   *Estructura:* `A medieval banner hanging on a stone wall, featuring the embroidered symbol of [Descripción], realistic fabric texture, dramatic torch lighting, medieval aesthetic --ar 16:9`

### 4. Requisitos para OBJETOS/ARTEFACTOS (`wiki/objetos/`)
Debes generar dos prompts:
*   **Prompt 1: Hoja de Diseño de Prop (Isolated Prop Sheet):**
    *   *Estructura:* `Prop design sheet, concept art of [Descripción del objeto, materiales, runas/grabados], isolated on a solid neutral gray background, multiple views showing front, side, and close-up detail, game asset style, realistic textures, studio lighting`
*   **Prompt 2: Objeto en Primer Plano (Macro Close-up Portrait):**
    *   *Estructura:* `Macro close-up shot of [Objeto] resting on a [Superficie, ej. mesa de roble], shallow depth of field, focused on the details and engravings, warm soft lighting, photorealistic --ar 16:9`

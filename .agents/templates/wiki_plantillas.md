# Guía de Plantillas Estándar de la Wiki

Este documento establece las estructuras y campos obligatorios para todas las fichas modulares creadas bajo el directorio `wiki/`. Todos los nuevos archivos y actualizaciones deben seguir estrictamente estas especificaciones para garantizar la coherencia del lore y facilitar el análisis automatizado.

---

## 1. Plantilla de Personajes
**Ubicación:** `wiki/personajes/[nombre_personaje].md`  
**Nombre del Archivo:** Minúsculas, separado por guiones bajos (ej. `jareth_reynolds.md`).

```markdown
# Personaje: [Nombre de la Entidad]
- **Afiliación:** [Afiliación principal o facción, ej. Distrito Militar de Eizenbert]

## Atributos Visuales Base
- **Especie/Raza:** [Raza/Especie, ej. Humano (Mago de la reflexión)]
- **Edad estimada:** [Edad en el presente o rango de edad]
- **Complexión y Altura:** [Constitución física y estatura estimada en metros]
- **Rostro:** [Facciones faciales, expresiones habituales, ojeras]
- **Cabello y Ojos:** [Color, estilo de corte, ojos, mirada]
- **Marcas Distintivas:** [Cicatrices, heridas, costuras, canales de maná visibles]
- **Vestimenta Habitual:** [Casacas, abrigos, corsés, calzado y accesorios]

## Evolución y Estado Cronológico
- **[Capítulo X / Escena Y]:** [Suceso, cambio físico, herida o hito cronológico ocurrido]
```

*Nota: Para personajes con múltiples etapas de vida significativas (como Orenz y Jareth en su niñez y adolescencia), se deben crear archivos independientes agregando el sufijo correspondiente (ej. `orenz_12.md` y `orenz_14.md`).*

---

## 2. Plantilla de Lugares
**Ubicación:** `wiki/lugares/[nombre_lugar].md`  
**Nombre del Archivo:** Minúsculas, separado por guiones bajos (ej. `bosque_agujas.md`).

```markdown
# Lugar: [Nombre del Lugar]
- **Tipo:** [Tipo de ubicación, ej. Desfiladero natural / Puesto de control]

## Atributos Visuales y Ambientales
- **Ubicación Geográfica:** [Ubicación detallada indicando región y PAÍS, ej. Frontera norte del País 7 (Eizenbert)]
- **Arquitectura/Estilo:** [Edificios, materiales, vegetación, relieve del terreno]
- **Iluminación y Clima:** [Condiciones climáticas, luz solar, faroles, lámparas de gas]
- **Atmósfera/Paleta de Colores:** [Colores dominantes, texturas, olores del ambiente]

## Evolución y Estado Cronológico
- **[Capítulo X / Escena Y]:** [Cambios estructurales, batallas, destrucción o remodelaciones]
```

*Nota obligatoria: El campo **Ubicación Geográfica** debe identificar de forma explícita la jurisdicción o país donde se encuentra el lugar (ej. País 7, País 4, País 1, Solaria).*

---

## 3. Plantilla de Organizaciones
**Ubicación:** `wiki/organizaciones/[nombre_organizacion].md`  
**Nombre del Archivo:** Minúsculas, separado por guiones bajos (ej. `pais_7_eizenbert.md`).

```markdown
# Organización: [Nombre de la Organización]
- **Tipo:** [Tipo de entidad, ej. Potencia militar / Secta religiosa]

## Atributos Visuales e Identidad
- **Emblema/Símbolo:** [Símbolos, escudos, estandartes o banderas oficiales]
- **Colores Oficiales:** [Colores oficiales utilizados por la facción]
- **Sede Principal:** [Fortaleza o ciudad capital de mando]
- **Miembros Conocidos:** [Miembros relevantes de la organización]

## Evolución y Estado Cronológico
- **[Capítulo X / Escena Y]:** [Pactos, alianzas, pérdidas territoriales, guerras declaradas]
```

---

## 4. Plantilla de Objetos
**Ubicación:** `wiki/objetos/[nombre_objeto].md`  
**Nombre del Archivo:** Minúsculas, separado por guiones bajos (ej. `corse_de_cuero.md`).

```markdown
# Objeto: [Nombre del Objeto]
- **Tipo:** [Tipo de objeto, ej. Armamento táctico / Artefacto rúnico]

## Atributos Visuales
- **Material y Textura:** [Materiales de fabricación, texturas y recubrimientos]
- **Dimensiones estimadas:** [Tamaño y longitud aproximada]
- **Grabados/Detalles especiales:** [Runas, inscripciones, luminiscencia al canalizar maná]
- **Poseedor actual:** [Nombre del portador de la entidad]

## Evolución y Estado Cronológico
- **[Capítulo X / Escena Y]:** [Daños sufridos, reparaciones, transferencias de dueño]
```

# Ejemplo de Compilación de Manuscrito

Este ejemplo ilustra cómo el Skill `compilador-manuscrito` toma dos archivos de escena del workspace y los consolida en una sola salida de manuscrito limpia.

---

## Entrada (Archivos en el Workspace)

### Archivo 1: `capitulos/cap1_escena1.md`
```markdown
---
scene: 1
characters: Robert Langdon, Mujer joven
metadata: Escena del sueño en la pirámide de Giza
TODO: Revisar adjetivos
---
Desde lo alto de los escalones de la Gran Pirámide de Giza, una joven lo llamó, riéndose con una sonrisa mágica.

Mujer joven: ¡Date prisa, Robert! ¡Ya sabía yo que debería haberme casado con un hombre más joven!

Él se esforzaba por seguir su ritmo, pero las piernas no le respondían.
```

### Archivo 2: `capitulos/cap1_escena2.md`
```markdown
# Escena 2: El Despertar
*Personajes:* Robert Langdon
*Hora:* 5:18 a.m.
*Nota de IA: El diálogo con Kohler va en la escena 3.*

Robert Langdon despertó de su pesadilla con un sobresalto. El teléfono que había junto a su cama estaba sonando. Todavía aturdido, descolgó el auricular.
```

---

## Salida (Archivo `manuscrito_completo.md` Generado)

```markdown
# Ángeles y Demonios (Borrador de Trabajo)
**Autor:** Robert Langdon (Simulación)
**Compilado el:** 2026-06-20

## Índice
1. [Capítulo 1](#capítulo-1)

---

# Capítulo 1

Desde lo alto de los escalones de la Gran Pirámide de Giza, una joven lo llamó, riéndose con una sonrisa mágica.

Mujer joven: ¡Date prisa, Robert! ¡Ya sabía yo que debería haberme casado con un hombre más joven!

Él se esforzaba por seguir su ritmo, pero las piernas no le respondían.

***

Robert Langdon despertó de su pesadilla con un sobresalto. El teléfono que había junto a su cama estaba sonando. Todavía aturdido, descolgó el auricular.
```

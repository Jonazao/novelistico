# Ejemplo de Auditoría de Consistencia

Este ejemplo ilustra cómo el Skill `verificador-consistencia` identifica y reporta un error de continuidad en un borrador.

## Entrada (Borrador con Incoherencias)

> Robert Langdon observó fijamente el tablero de controles del todoterreno. El vehículo avanzaba de prisa por la autopista mojada. Conmocionado, Langdon miró de reojo a Kohler y le guiñó el ojo izquierdo en señal de complicidad, esperando una respuesta amistosa del científico. Al no recibir respuesta, Langdon miró por el ventanal hacia la ciudad de Ensenada que quedaba a lo lejos, admirando cómo sus calles relucían limpias e impecables bajo la luna, tal como el primer día.

*   *Datos del Lore:* Según la Wiki actual, Robert Langdon perdió el ojo izquierdo en el Día 2 y usa un parche de cuero negro. La Calle Primera y el Palacio Municipal de Ensenada fueron destruidos e incendiados en el Día 2.

---

## Salida (Reporte de Auditoría Producido)

# Reporte de Auditoría de Continuidad: Escena en Autopista

## 1. Elementos Verificados y Correctos
- **Tablero de controles** `[OK]`: La presencia de controles del todoterreno y el clima lluvioso respetan la ambientación definida en el capítulo anterior.

## 2. Alertas de Continuidad Detectadas
- **Robert Langdon (Gestos)** `[ALERTA DETECTADA]`:
  *   **Inconsistencia:** Se narra que Langdon *"le guiñó el ojo izquierdo en señal de complicidad"*.
  *   **Lore de Referencia:** En `wiki/personajes/robert_langdon.md` consta que en el **[Día 2]** Langdon perdió el ojo izquierdo tras un ataque y ahora lleva un parche de cuero negro sobre esa zona. No puede guiñar un ojo que ya no posee.
  *   **Propuesta de Corrección:** Reemplazar por un asentimiento de cabeza o una mirada intensa con su ojo derecho funcional.
- **Ciudad de Ensenada (Entorno)** `[ALERTA DETECTADA]`:
  *   **Inconsistencia:** Se describe la ciudad de Ensenada como *"limpia e impecable bajo la luna, tal como el primer día"*.
  *   **Lore de Referencia:** Según `wiki/lugares/ensenada.md`, en el **[Día 2]** la Calle Primera fue devastada y el palacio municipal resultó incendiado por pandillas. Ver Ensenada limpia e impecable contradice directamente la destrucción establecida.
  *   **Propuesta de Corrección:** Modificar la frase para describir la ciudad lejana mostrando columnas de humo ascendentes, ruinas a lo lejos, o las luces parpadeantes de las patrullas policiales en una ciudad bajo toque de queda.

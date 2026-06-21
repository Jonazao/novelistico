# Ejemplo de Referencia: Skill 'wiki-novelas'

Este ejemplo ilustra cómo el Skill crea y actualiza los archivos individuales de la Wiki a lo largo del tiempo, manteniendo la consistencia visual y cronológica.

---

## Estado Inicial (Tras procesar Capítulo 1 / Día 1)

### Archivo: `wiki/README.md`
```markdown
# Wiki del Universo de la Novela

## Personajes
- [Robert Langdon](personajes/robert_langdon.md) - Profesor de iconología religiosa en la Universidad de Harvard.

## Lugares
- [Ensenada](lugares/ensenada.md) - Una ciudad costera de Baja California, limpia y pacífica.
```

### Archivo: `wiki/personajes/robert_langdon.md`
```markdown
# Personaje: Robert Langdon
- **Afiliación:** Universidad de Harvard

## Atributos Visuales Base
- **Especie/Raza:** Humano
- **Edad estimada:** 45 años
- **Complexión y Altura:** 1.80 metros de altura, físico esbelto y tonificado de nadador.
- **Rostro:** Sonrisa arrebatadora y desenfadada de atleta, atractivo erudito.
- **Cabello y Ojos:** Espeso pelo castaño con algunos mechones grises / Penetrantes ojos azules.
- **Marcas Distintivas:** Ninguna cicatriz visible inicial.
- **Vestimenta Habitual:** Americana Harris de tweed, chaleco de cachemira, pantalones vaqueros.

## Evolución y Estado Cronológico
- **[Capítulo 1]:** Despierta de una pesadilla a las 5:18 a.m. Se prepara cacao en su cocina descalzo y en bata. Físicamente sano y completo.
```

### Archivo: `wiki/lugares/ensenada.md`
```markdown
# Lugar: Ensenada
- **Tipo:** Ciudad

## Atributos Visuales y Ambientales
- **Ubicación Geográfica:** Costa de Baja California, México.
- **Arquitectura/Estilo:** Ciudad portuaria colonial/moderna.
- **Iluminación y Clima:** Clima templado, brisa marina.
- **Atmósfera/Paleta de Colores:** Tonos azulados y blancos.

## Evolución y Estado Cronológico
- **[Día 1]:** Ciudad limpia, tranquila y bien cuidada. Tráfico calmado y palacio municipal intacto.
```

---

## Estado Actualizado (Tras procesar Capítulo 4 / Día 2)

### Archivo: `wiki/personajes/robert_langdon.md` (Actualizado)
```markdown
# Personaje: Robert Langdon
- **Afiliación:** Universidad de Harvard

## Atributos Visuales Base
- **Especie/Raza:** Humano
- **Edad estimada:** 45 años
- **Complexión y Altura:** 1.80 metros de altura, físico esbelto y tonificado de nadador.
- **Rostro:** Sonrisa arrebatadora y desenfadada de atleta, atractivo erudito.
- **Cabello y Ojos:** Espeso pelo castaño con algunos mechones grises / Penetrantes ojos azules.
- **Marcas Distintivas:** Ninguna cicatriz visible inicial.
- **Vestimenta Habitual:** Americana Harris de tweed, chaleco de cachemira, pantalones vaqueros.

## Evolución y Estado Cronológico
- **[Capítulo 1]:** Despierta de una pesadilla a las 5:18 a.m. Se prepara cacao en su cocina descalzo y en bata. Físicamente sano y completo.
- **[Capítulo 4]:** Se enfrenta a una banda de delincuentes. Durante la pelea sufre un corte grave en el ojo izquierdo. Pierde el ojo y le queda una cicatriz vertical pronunciada. A partir de este momento, comienza a llevar un parche negro de cuero sobre el ojo izquierdo.
```

### Archivo: `wiki/lugares/ensenada.md` (Actualizado)
```markdown
# Lugar: Ensenada
- **Tipo:** Ciudad

## Atributos Visuales y Ambientales
- **Ubicación Geográfica:** Costa de Baja California, México.
- **Arquitectura/Estilo:** Ciudad portuaria colonial/moderna.
- **Iluminación y Clima:** Clima templado, brisa marina.
- **Atmósfera/Paleta de Colores:** Tonos azulados y blancos.

## Evolución y Estado Cronológico
- **[Día 1]:** Ciudad limpia, tranquila y bien cuidada. Tráfico calmado y palacio municipal intacto.
- **[Día 2]:** La calle primera queda completamente destruida tras un enfrentamiento violento entre pandillas rivales. Múltiples tiendas resultan saqueadas y el palacio municipal es incendiado, quedando su estructura exterior carbonizada.
```

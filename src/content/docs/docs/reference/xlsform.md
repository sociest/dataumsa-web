---
title: Referencia de XLSForm
description: Tipos de preguntas, lógicas y especificaciones del estándar XLSForm en la plataforma DATAUMSA.
---

La plataforma **DATAUMSA** es compatible con el estándar **XLSForm** (usado por ODK, KoboToolbox y Enketo) para la definición de cuestionarios complejos utilizando archivos de hoja de cálculo de Excel.

---

## Estructura del Archivo Excel
Tu archivo de Excel debe contener al menos dos hojas obligatorias:
1. **`survey`**: Define la estructura de las preguntas del formulario.
2. **`choices`**: Define las opciones para las preguntas de selección múltiple o única.
3. **`settings`** *(opcional)*: Define metadatos globales como el título del formulario y su identificador.

---

## Tipos de Preguntas Soportados

| Tipo | Descripción | Ejemplo de Entrada |
| :--- | :--- | :--- |
| `text` | Entrada de texto libre (cadenas de caracteres) | Nombre del entrevistado |
| `integer` | Números enteros sin decimales | Edad, número de habitaciones |
| `decimal` | Números reales con decimales | Temperatura, altura en metros |
| `select_one [list_name]` | Selección de una única opción del listado de choices | Género, estado civil |
| `select_multiple [list_name]` | Selección de múltiples opciones del listado | Servicios básicos disponibles |
| `geopoint` | Coordenadas GPS (latitud, longitud, altitud, precisión) | Ubicación de la vivienda |
| `image` | Captura de fotografía o carga de imagen | Foto del carnet de identidad |
| `barcode` | Escaneo de código de barras o código QR | Matrícula universitaria |
| `note` | Mensaje de texto informativo en pantalla sin entrada de datos | Instrucciones de consentimiento |

---

## Lógica Condicional y Validación

### Saltos Condicionales (`relevant`)
La columna `relevant` te permite ocultar o mostrar preguntas basándote en respuestas anteriores.
* *Ejemplo:* Para mostrar una pregunta sobre la cantidad de hijos solo si respondió "SÍ" en la pregunta anterior (`tiene_hijos`):
  ```txt
  ${tiene_hijos} = 'si'
  ```

### Restricciones de Entrada (`constraint`)
La columna `constraint` define reglas lógicas que el dato introducido debe cumplir para ser considerado válido. Si falla, la app mostrará un mensaje de error personalizado definido en `constraint_message`.
* *Ejemplo:* Para restringir que la edad del entrevistado esté entre 18 y 99 años:
  ```txt
  . >= 18 and . <= 99
  ```
  *(El punto `.` representa el valor introducido en la pregunta actual)*.

### Obligatoriedad (`required`)
Coloca `yes` en la columna `required` para impedir que el encuestador envíe el cuestionario si esa pregunta queda en blanco.

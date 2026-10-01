---
title: Creación con Microsoft Excel (XLSForm)
description: Aprende a estructurar tus encuestas de manera masiva y eficiente utilizando el estándar internacional XLSForm en hojas de cálculo.
---

Aunque el Constructor Web de **DATAUMSA** es idóneo para cuestionarios breves, cuando una investigación académica requiere cuestionarios extensos (más de 50 o 100 preguntas), cálculos matemáticos automáticos en campo o traducciones a lenguas originarias, el diseño en **Microsoft Excel** mediante el estándar internacional **XLSForm** representa el método más potente y productivo.

---

## ¿Cómo funciona un archivo XLSForm?

Un archivo XLSForm es un libro de Excel convencional (`.xlsx`) que contiene exactamente **tres hojas de cálculo obligatorias**, identificadas con nombres específicos en minúsculas:

1. `survey`: Contiene todas las preguntas, tipos de datos y lógicas del cuestionario.
2. `choices`: Define las listas de opciones de respuesta para las preguntas de selección.
3. `settings`: Configura los metadatos globales del proyecto (título del formulario e identificador único).

---

## 1. La hoja `survey` (Estructura de Preguntas)

Cada fila de esta hoja representa una pregunta o elemento interactivo del formulario. Las tres columnas fundamentales y obligatorias son:

| Columna | Propósito | Reglas de Sintaxis | Ejemplo |
| :--- | :--- | :--- | :--- |
| `type` | Tipo de dato o control | Palabra clave reservada de XLSForm | `integer`, `text`, `select_one genero` |
| `name` | Identificador de variable en base de datos | **Sin espacios**, sin tildes ni caracteres especiales | `edad_informante`, `nivel_educativo` |
| `label` | Texto visible que leerá el informante | Texto libre, acepta signos de interrogación y acentos | *¿Cuántos años cumplidos tiene?* |

### Columnas avanzadas comunes en `survey`:
* `hint`: Texto explicativo secundario para orientar al encuestador.
* `required`: Escribe `yes` para hacer que la respuesta sea obligatoria.
* `relevant`: Expresión lógica condicional para mostrar la pregunta (ej. `${edad_informante} >= 18`).
* `constraint`: Regla de validación matemática (ej. `${edad_informante} > 0 and ${edad_informante} < 120`).
* `constraint_message`: Mensaje de error personalizado en caso de que el valor no cumpla la restricción.

---

## 2. La hoja `choices` (Listas de Opciones)

Cuando utilizas una pregunta de tipo `select_one [nombre_lista]` o `select_multiple [nombre_lista]`, las opciones de respuesta se definen en esta hoja:

| Columna | Función | Ejemplo |
| :--- | :--- | :--- |
| `list_name` | Identificador que agrupa las opciones de una misma lista | `nivel_instruccion` |
| `name` | Código interno que se almacenará en la base de datos | `primaria`, `secundaria`, `superior` |
| `label` | Texto amigable que se mostrará en pantalla | *Educación Primaria*, *Educación Secundaria* |

### Ejemplo práctico:

| list_name | name | label |
| :--- | :--- | :--- |
| `estado_civil` | `soltero` | Soltero/a |
| `estado_civil` | `casado` | Casado/a |
| `estado_civil` | `conviviente` | Conviviente / Unión libre |
| `estado_civil` | `divorciado` | Divorciado/a |
| `estado_civil` | `viudo` | Viudo/a |

---

## 3. La hoja `settings` (Configuración del Cuestionario)

Esta hoja contiene una única fila con las propiedades del formulario:

* `form_title`: Título formal de la encuesta visible para los usuarios (ej. *Censo Estudiantil Facultad de Ciencias Puras 2026*).
* `form_id`: Identificador alfanumérico único para el servidor (ej. `censo_fcpn_2026`). Sin espacios.
* `version`: Marca de versión numérica (ej. `2026090101`). Cada vez que actualices el cuestionario en campo, incrementa este valor para que la app móvil detecte la actualización.
* `default_language`: Código de idioma predeterminado si el formulario incluye traducciones (ej. `Español (es)`).

---

## Subir y Compilar tu XLSForm en DATAUMSA

1. Guarda tu archivo en formato `.xlsx`.
2. Dirígete a la pantalla principal de proyectos en **DATAUMSA**.
3. Haz clic en **NUEVO** y selecciona **Subir un archivo XLSForm**.
4. Arrastra tu documento Excel o selecciónalo desde tu explorador de archivos.

### Detección y Resolución de Errores

Si tu hoja de Excel contiene algún error de sintaxis (por ejemplo, haber escrito un espacio en un `name` o referenciar una lista en `choices` con un nombre diferente), el motor de validación de DATAUMSA te indicará exactamente:
* El nombre de la hoja (`survey` o `choices`).
* El número exacto de fila donde se produjo la incoherencia.
* La causa específica del error sintáctico.

Basta con corregir la celda en tu Excel, guardar el archivo y volverlo a subir para completar la implementación.

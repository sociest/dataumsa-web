---
title: Configuración de Idiomas en Formularios
description: Aprende cómo añadir múltiples idiomas a tus formularios de DATAUMSA / KoboToolbox y qué códigos de idiomas utilizar.
---

La plataforma **DATAUMSA** y la aplicación móvil **DATAUMSA Collect** soportan la visualización de encuestas en múltiples idiomas de forma nativa. Esto permite a los encuestadores cambiar el idioma del cuestionario en tiempo real desde el dispositivo de recolección o el navegador web.

Por defecto, los formularios suelen configurarse en **Español (es)** e **Inglés (en)**, pero puedes añadir soporte para cualquier otro idioma, incluyendo lenguas originarias como el **Aymara (ay)**, **Quechua (qu)** o **Guaraní (gn)**.

---

## Método 1: Usar XLSForm (Recomendado para encuestas grandes)

Si construyes o editas tu cuestionario usando una plantilla de Excel (XLSForm), puedes gestionar las traducciones estructurando las columnas correspondientes en las pestañas `survey` y `choices`.

### 1. Renombrar las columnas de etiquetas
Para cada columna que muestre texto al usuario (etiquetas, pistas de ayuda, mensajes de error), debes duplicar la columna y añadir la sintaxis `::Nombre del Idioma (código)` en el encabezado.

Ejemplo en la pestaña **`survey`**:
*   `label::Español (es)` | `label::English (en)` | `label::Aymara (ay)`
*   `hint::Español (es)` | `hint::English (en)` | `hint::Aymara (ay)`

Ejemplo en la pestaña **`choices`**:
*   `label::Español (es)` | `label::English (en)` | `label::Aymara (ay)`

> [!WARNING]
> Las columnas estructurales como `type`, `name` y `list_name` **no** deben traducirse ni duplicarse, ya que son identificadores internos de la base de datos.

### 2. Definir el idioma predeterminado
En la pestaña **`settings`** de tu Excel:
1. Crea una columna llamada `default_language`.
2. En la celda inferior, escribe el nombre exacto del idioma tal como lo definiste en los encabezados, por ejemplo: `Español (es)` o `es`.

---

## Método 2: Usar el Form Builder en Línea (KoboToolbox)

Si prefieres diseñar tu cuestionario desde la interfaz web de KoboToolbox:

1. Ve a tu lista de proyectos y abre el formulario que deseas traducir.
2. En la pestaña **Formulario**, haz clic en el botón de menú (tres puntos verticales) o en el botón **Administrar Traducciones** (ícono de globo/planeta).
3. Haz clic en **Añadir Idioma**.
4. Define el nombre del idioma (ej. `Aymara`) y su código de idioma correspondiente (ej. `ay`).
5. En la matriz de traducciones que se despliega, introduce la traducción de cada pregunta y opción en los campos correspondientes.
6. Guarda los cambios.

---

## Códigos de Idioma Soportados (Estándar IANA)

Puedes usar cualquier código de idioma estándar de dos letras (ISO 639-1). A continuación, se detallan los códigos más comunes y relevantes para la región:

| Idioma | Código | Ejemplo de encabezado XLSForm |
| :--- | :--- | :--- |
| **Español** | `es` | `label::Español (es)` |
| **Inglés** | `en` | `label::English (en)` |
| **Aymara** | `ay` | `label::Aymara (ay)` |
| **Quechua** | `qu` | `label::Quechua (qu)` |
| **Guaraní** | `gn` | `label::Guaraní (gn)` |
| **Portugués** | `pt` | `label::Português (pt)` |
| **Francés** | `fr` | `label::Français (fr)` |

> [!TIP]
> Si deseas utilizar una variante regional específica o un dialecto que no cuenta con un código ISO 639-1 de dos letras, puedes utilizar el estándar ISO 639-3 de tres letras o definir una cadena personalizada, asegurándote de usarla de manera idéntica en todo el documento.

---

## Visualización en Campo

Una vez subido y publicado el formulario:
*   **En la Web (Enketo webforms):** Aparecerá un menú desplegable en la esquina superior derecha del formulario que permitirá al encuestado cambiar el idioma.
*   **En DATAUMSA Collect / KoboCollect:** Al abrir el formulario para llenar, el encuestador puede presionar el menú de opciones (tres puntos) y seleccionar **Cambiar idioma** para alternar entre las traducciones disponibles.

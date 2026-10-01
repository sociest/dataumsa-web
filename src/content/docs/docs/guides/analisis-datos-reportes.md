---
title: Análisis Rápido, Gráficos y Mapas GPS
description: Herramientas integradas en DATAUMSA para visualizar reportes estadísticos y mapas territoriales al instante.
---

No es estrictamente necesario descargar los datos y procesarlos en herramientas externas para tener una primera lectura de los resultados. **DATAUMSA** incorpora herramientas de análisis descriptivo y visualización geoespacial en tiempo real.

Para acceder a estas herramientas, abre tu proyecto y dirígete a la pestaña **Datos**.

---

## Informes y Gráficos Estadísticos Automáticos

Al hacer clic en la sección **Informes** del submenú lateral izquierdo, DATAUMSA genera automáticamente representaciones gráficas para cada variable del cuestionario:

* **Preguntas de opción simple (`select_one`):** Gráficos de barras y circulares (torta) con distribución porcentual y conteo absoluto de frecuencias.
* **Preguntas de opción múltiple (`select_multiple`):** Gráficos de frecuencia desagregados por cada alternativa seleccionada.
* **Preguntas numéricas (`integer`, `decimal`):** Estadísticos descriptivos clave como media, mediana y valores mínimos/máximos.
* **Preguntas de fecha:** Histogramas de línea temporal para monitorear el ritmo de recolección diaria o semanal.

### Personalizar tus Gráficos de Reporte

Puedes adaptar el informe visual según las necesidades de tu presentación académica o institucional:
* **Alternar tipo de gráfico:** Cambia con un clic entre gráficos de barras horizontales, barras verticales o torta.
* **Depuración de variables:** Oculta preguntas secundarias o identificadores (como folios o firmas) haciendo clic en el icono de visibilidad.
* **Exportación directa a PDF:** Presiona `Ctrl + P` (o `Cmd + P` en macOS) en el navegador para imprimir el reporte o guardarlo como informe ejecutivo en PDF listo para compartir.

---

## Visualización Geoespacial en Mapa Interactivo

Si al formular tu cuestionario agregaste una pregunta de tipo **Punto GPS** (`geopoint`), cada envío quedará georreferenciado con sus coordenadas de latitud, longitud y precisión satelital.

1. Dentro de la pestaña **Datos**, selecciona la opción **Mapa**.
2. La plataforma desplegará un mapa base interactivo con chinchetas o clústeres indicando cada registro levantado.
3. Haz clic sobre cualquier punto para abrir una ventana emergente que despliega el resumen completo de la entrevista realizada en esa ubicación exacta.

```
       [ Mapa Interactivo DATAUMSA ]
  ┌─────────────────────────────────────────┐
  │  ▲ [La Paz - Sede Central]              │
  │    📍 Punto A: 15 encuestas completadas │
  │                                         │
  │  ▲ [El Alto - Zona Norte]               │
  │    📍 Punto B: 24 encuestas completadas │
  │                                         │
  │  ▲ [Cota Cota - Campus Universitario]   │
  │    📍 Punto C: 42 encuestas completadas │
  └─────────────────────────────────────────┘
```

> [!TIP]
> **Planificación de trabajo de campo:** El mapa es ideal para supervisar la cobertura territorial de brigadas universitarias, verificar que los encuestadores cubran los sectores asignados y detectar omisiones de muestreo antes de finalizar la campaña.

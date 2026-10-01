---
title: Recolección en Terreno y Web
description: Métodos de recolección de respuestas mediante formularios web interactivos y la aplicación móvil DATAUMSA Collect para operativos offline en campo.
---

Una vez que un proyecto ha sido diseñado e implementado en **DATAUMSA**, está listo para comenzar a registrar respuestas. Dependiendo del perfil de la población objetivo y de las condiciones de conectividad en el área de estudio, puedes elegir entre dos modalidades de recolección complementarias.

---

## Método 1: Formularios Web (Respuestas a Distancia)

Esta modalidad es ideal para encuestas institucionales autoadministradas, evaluaciones académicas o cuestionarios donde los informantes responden directamente desde sus computadoras personales o dispositivos móviles con conexión a internet.

1. Ingresa a tu proyecto en **DATAUMSA**.
2. Ve a la pestaña **Formulario**.
3. En la sección **Recopilar datos**, asegúrate de que esté seleccionada la opción *"En línea-fuera de línea (varios envíos)"*.
4. Haz clic en el botón **Copiar enlace**.
5. Distribuye este enlace a través de correo electrónico institucional, grupos de WhatsApp o canales universitarios.

El informante interactuará con el motor web **Enketo**, el cual procesa las reglas de validación y saltos condicionales en el navegador sin requerir la instalación de software adicional.

---

## Método 2: Aplicación Móvil DATAUMSA Collect (Operativos Offline)

Para brigadistas y equipos de campo que deben recolectar información en comunidades rurales, zonas periurbanas, valles o cordillera donde la señal celular es inestable o inexistente, la aplicación móvil **DATAUMSA Collect** (disponible para dispositivos Android) es la solución estándar.

### Flujo Operativo en Terreno

```
[1. En la Universidad/Casa]          [2. En la Comunidad Rural]         [3. Retorno a Cobertura]
   Conexión Wi-Fi                     100% Sin Internet                  Conexión Wi-Fi / Datos
Descarga de boletas en blanco ───> Llenado de boletas en campo ───> Envío masivo en bloque
```

---

### Configuración Paso a Paso de DATAUMSA Collect

> [!IMPORTANT]
> Los pasos de configuración inicial y descarga de boletas deben realizarse mientras el teléfono móvil cuenta con acceso a internet.

1. **Instalación:** Accede al [Centro de Descargas](/app-movil/descargas) desde tu dispositivo Android e instala el archivo APK oficial de **DATAUMSA Collect**.
2. **Ajustes de Servidor:**
   - Abre la aplicación en tu celular.
   - Presiona el botón de menú (o el ícono de perfil) y accede a **Ajustes del Servidor**.
   - En el campo **URL**, ingresa la dirección de tu servidor institucional: `https://app.data.umsa.bo` (o la URL indicada por el coordinador del operativo).
   - En **Usuario** y **Contraseña**, introduce tus credenciales asignadas de encuestador.
3. **Descargar Formularios en Blanco:**
   - Regresa a la pantalla principal de la app.
   - Toca la opción **Obtener formulario en blanco**.
   - La aplicación listará los proyectos a los que tienes acceso autorizado. Marca la casilla de la encuesta correspondiente y presiona **Descargar seleccionados**.

---

### Procedimiento de Encuesta en Campo

1. Ya puedes desconectar los datos móviles y el Wi-Fi para ahorrar batería en campo.
2. En la pantalla principal, selecciona **Llenar nuevo formulario**.
3. Elige la encuesta descargada e inicia la entrevista.
4. Responde cada variable secuencialmente. En caso de solicitar coordenadas GPS, ubícate a cielo abierto para que el sensor satelital alcance una precisión óptima (< 5 metros).
5. Al finalizar, presiona **Guardar formulario y salir**. La boleta quedará almacenada de forma segura y encriptada en la memoria local del teléfono.
6. Repite el proceso con cada informante de tu muestra.

---

### Sincronización y Envío de Boletas

1. Al regresar al campamento base, facultad o zona con cobertura de red (Wi-Fi institucional o datos), abre **DATAUMSA Collect**.
2. Toca la opción **Enviar formulario finalizado**.
3. La aplicación mostrará el listado con el número de encuestas acumuladas durante la jornada.
4. Presiona **Seleccionar todo** y luego **Enviar seleccionados**.
5. Las respuestas se transferirán al servidor central de DATAUMSA y se marcarán como enviadas en el dispositivo, evitando cualquier duplicación involuntaria.

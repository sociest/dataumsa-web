---
title: Seguridad y Soberanía de Datos
description: Arquitectura de seguridad, soberanía institucional y protocolos éticos en la gestión de datos universitarios.
---

En proyectos de investigación académica, proyectos de extensión social y levantamientos administrativos, la confidencialidad de los participantes y el resguardo de la información son principios inviolables.

La infraestructura de **DATAUMSA** ha sido diseñada para garantizar soberanía tecnológica, control de acceso por roles y cumplimiento de estándares de ciberseguridad.

---

## Soberanía Institucional de la Información

A diferencia de soluciones comerciales privadas donde los datos suelen residir en servidores internacionales bajo legislaciones foráneas, DATAUMSA garantiza la gobernanza universitaria:

* **Gestión Local:** Los servidores y almacenes de datos están desplegados bajo la infraestructura de la Universidad Mayor de San Andrés, resguardando la información bajo la legislación y normativa nacional.
* **Sin comercialización de información:** Los datos recopilados en los formularios jamás son cedidos, indexados, vendidos ni utilizados para entrenamiento de modelos de terceros.
* **Propiedad de los Investigadores:** El control absoluto de los cuestionarios y las respuestas recolectadas corresponde al equipo de investigación y a las unidades académicas responsables.

---

## Cifrado y Transmisión Segura

Desde que el encuestador recopila la información en un dispositivo móvil hasta su almacenamiento final en base de datos:

1. **Cifrado en tránsito (HTTPS/TLS):** Toda la comunicación entre navegadores, la aplicación DATAUMSA Collect y los servidores centrales se realiza mediante túneles cifrados SSL/TLS con algoritmos modernos.
2. **Almacenamiento temporal en dispositivos:** Cuando un encuestador trabaja sin conexión (offline) en áreas rurales o periféricas, los registros se almacenan de manera local y encriptada en el teléfono hasta que se detecta conectividad para su sincronización segura.
3. **Control de Acceso Basado en Roles (RBAC):** El acceso a los proyectos se gestiona mediante credenciales institucionales. El administrador del proyecto puede asignar permisos granulares (sólo llenado, visualización de datos, edición de cuestionarios o administración total).

---

## Recomendaciones Éticas para Investigadores

La tecnología proporciona los canales seguros, pero la ética en campo depende del equipo ejecutor:

> [!IMPORTANT]
> **Principios de Manejo de Datos Sensibles:**
> 1. **Consentimiento informado:** Siempre incluye una pantalla inicial explicando el propósito de la investigación y solicitando la autorización explícita del encuestado antes de iniciar las preguntas.
> 2. **Minimización de datos:** Recolecta únicamente los datos estrictamente necesarios para el estudio. Evita registrar números de cédula de identidad, números telefónicos o nombres completos a menos que sean indispensables para el seguimiento longitudinal.
> 3. **Custodia de credenciales:** No utilices cuentas compartidas ni compartas enlaces de administración por canales no seguros de mensajería instantánea.

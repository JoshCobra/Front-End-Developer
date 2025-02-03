# AJAX y API's

## Introducción

AJAX (Asynchronous JavaScript and XML) es una técnica de desarrollo web para crear aplicaciones interactivas. Permite que las páginas web se actualicen de manera asíncrona intercambiando pequeñas cantidades de datos con el servidor detrás de escena. Esto significa que es posible actualizar partes de una página web, sin recargar toda la página.

## ¿Qué es una API?

Una API (Application Programming Interface) es un conjunto de reglas que permite que un software se comunique con otro. En el contexto de desarrollo web, las API's son utilizadas para permitir que las aplicaciones web interactúen con servicios externos, como bases de datos, servicios de terceros, etc.

## Uso de AJAX con API's

Para utilizar AJAX con API's, generalmente se sigue el siguiente flujo:

1. **Crear una solicitud XMLHttpRequest**: Este objeto permite intercambiar datos con un servidor web.
2. **Configurar la solicitud**: Especificar el método HTTP (GET, POST, etc.) y la URL de la API.
3. **Enviar la solicitud**: Enviar la solicitud al servidor.
4. **Manejar la respuesta**: Procesar la respuesta del servidor cuando esté disponible.

### Ejemplo de uso de AJAX con una API

```javascript
// Crear una nueva solicitud
let xhr = new XMLHttpRequest();

// Configurar la solicitud
xhr.open('GET', 'https://api.example.com/data', true);

// Manejar la respuesta
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};

// Enviar la solicitud
xhr.send();
```

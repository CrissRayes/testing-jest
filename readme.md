# Tests de Operaciones CRUD

Este proyecto implementa pruebas automatizadas utilizando Jest y la biblioteca 'supertest' para probar las operaciones CRUD de una API REST.
El objetivo es verificar el correcto funcionamiento de la API y garantizar que cumpla con los requisitos funcionales.

## Pre-requisitos

- Asegúrate de tener instalado Node.js en tu sistema.
- Asegúrate de tener instalado npm en tu sistema.
- Instala las dependencias necesarias ejecutando el siguiente comando en tu terminal:

```
$ npm install
```

## Ejecutar los tests

Para ejecutar las pruebas, utiliza el siguiente comando en tu terminal:

```
$ npm test
```

## Descripción de las pruebas

Las pruebas se han dividido en cuatro bloques de 'describe' de acuerdo con las operaciones CRUD.

### Obtención de cafés

- Prueba 1: Obtiene un status code 200: Verifica que la ruta /cafes devuelve un código de estado 200, indicando una respuesta exitosa.
- Prueba 2: Tipo de dato recibido es un array: Verifica que el tipo de dato recibido en la respuesta de la ruta /cafes sea un array.
- Prueba 3: Dato recibido tiene al menos un elemento: Verifica que el array recibido en la respuesta de la ruta /cafes contenga al menos un elemento.

### Eliminación de cafés

- Prueba 4: Obtiene código 404 al eliminar café con id inexistente: Verifica que al intentar eliminar un café con un id inexistente, la API devuelve un código de estado 404 y un mensaje de error adecuado.

### Creación de cafés

- Prueba 5: Agregar un nuevo café: Verifica que se pueda agregar un nuevo café a la API y que esté presente en la respuesta recibida.
- Prueba 6: Obtiene código 201 al agregar un nuevo café: Verifica que al agregar un nuevo café, la API devuelve un código de estado 201, indicando una creación exitosa.

### Actualización de cafés

- Prueba 7: Obtiene código 404 al actualizar café con id distinto en parámetros y payload: Verifica que al intentar actualizar un café con un id diferente en los parámetros de la ruta y en el cuerpo de la solicitud, la API devuelve un código de estado 404.

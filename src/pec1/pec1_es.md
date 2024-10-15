# Respuestas a las preguntas teóricas

## Ejercicio T1

* (1,5 puntos) T1.1 (1p) Describe cada uno de los comandos que ha realizado el desarrollador `Dev1` y valora si son correctos/incorrectos o necesarios/innecesario.
git add style.css : Añadir un único archivo llamado "style.css"

git commit -m "new style" : Guardar nuestros cambios. Es un punto de control de código en el que puedes volver más tarde si es necesario. Entre comillas va un mensaje de confirmación.

git push : Es para enviar tus cambios al repositorio remoto.

Los pasos los considero correctos, pero sin hacer un git pull antes de todos los pasos realizados, puede que haya una modificación que no la tuviera y se sobreescriba. Con esos pasos en ese orden se añaden todos los cambios realizados en tu repositorio al repositorio remoto, pero no descarga lo que ya hay en el repositorio remoto.

* (1,5 puntos) T1.2 Describe cada uno de los comandos que ha realizado el desarrollador `Dev2` y valora si son correctos/incorrectos o necesarios/innecesarios.

git pull : Para recibir actualización del repositorio remoto.

git commit -m "new index" : Guardar nuestros cambios. Es un punto de control de código en el que puedes volver más tarde si es necesario. Entre comillas va un mensaje de confirmación.

git push : Es para enviar tus cambios al repositorio remoto.

Todos los pasos los considero correctos. Con esos pasos en ese orden se descarga el código ya existente para despues añadir los nuevos cambios realizados al repositorio remoto.

## Ejercicio T2

* (2 puntos) T2.1 ¿Qué commits están considerados en la rama `developer-1`?

El c2, c3 y c4 son commits en la rama developer-1. Desde la rama developer-1 el c1 corresponde a un git pull y c5 un git push (estos solo son commit mirandolo desde la rama main).

* (2 puntos) T2.2 Una vez que se hace el _merge_ de la rama `developer-1` en la rama `main` y se crea el commit `c5`, ¿qué cambios se incorporan a la rama `main`? (debes indicar qué commits contribuyen a realizar cambios en la rama `main`).

El cambio que se realiza en la rama main es el commit c4 que son los ultimos cambios que se ha realizado en la rama developer-1, que ese c4 contendrá los cambios anteriores que son el c2 y c3, es decir que el commit c5 contendrá todos los commits de la rama developer-1 aunque solo haga commit del c4 al c5.

# Wally Challenge

# Objetivo

Se desea construir una aplicación Android, que nos permita acceder a una pantalla principal a través de un login, ingresando un usuario y una contraseña. 
La pantalla principal o Home a la cual accedemos deberá mostrarnos un listado de cualquier contenido. 
El contenido puede ser obtenido conectándose a algún API de Google (Books, Maps, etc.) o puede ser una lista en duro dentro de la aplicación (a elección del candidato). 
En caso el candidato decida usar una lista en duro, considerar también un flujo de registro que pueda alimentar dicha lista.

# **Especificación**

1. Toda la aplicación deberá ser hecha con Angular (versión compatible) y Nativescript(v8).

2. El proceso de login no se conectará con ningún servicio o API que valide la autenticación (se deberá realizar una validación local contra datos en duro). Puntos extra si llega a realizar algún flujo de error con un mensaje en la pantalla o en un popup.

3. Como mencionado, está a decisión del candidato si usar alguna API de Google o generar el mismo el contenido de su lista. La finalidad de este punto es poder ver si el candidato es capaz de consumir algún servicio REST desde Nativescript y realizar las configuraciones necesarias para que eso suceda. De tener alguna otra API disponible para consumir, podrá usarla sin problemas (el contenido usado es indiferente a la calificación). Puntos extra si logra consumir una API.

4. Se evaluará también la estructura de componentes y el orden que el candidato usa en su desarrollo. No es necesario trabajar mucho el tema de estilos o UI.

5. EL candidato tendrá que enviar el código desarrollado en un zip o subirlo a un repositorio. Así mismo se pedirá que el candidato envíe el apk generado de este desarrollo.

# Anexo

## **Herramientas**

- **API:** [https://developers.google.com/books](https://developers.google.com/books)
- **Framework:** Angular 13 y Nativescript 8.2


## Running

Run `ns run android`.

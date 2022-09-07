# Open - Closed Principle

Las entidades que tengamos en nuestro software tienen que estar abiertas para extender pero cerradas para ser modificadas.
En componentes de React tienen sentido.
Cuando una parte de tu software o un componente tenga que renderizar algo diferente, en lugar de tener que tocar dentro del componente,
lo cual podría provocar que cosas que estan funcionando dejen de funcionar, lo que se debe hacer es que desde fuera sea capaz de extender
la funcionalidad que tiene ese componente.

Abierto a extensión
Cerrado a modificación

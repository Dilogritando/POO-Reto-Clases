## Reto para el curso de programación orientada objetos ##
Debes realizar el ejercicio en el lenguaje de tu preferencia:

# 1. Crea una clase llamada Persona. #
La clase Persona tendrá los siguientes atributos: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
- Por defecto, todos los atributos menos el DNI serán valores por defecto según su tipo (0 números, cadena vacía para String, etc.).
- Sexo sera hombre por defecto, usa una constante para ello.

Debes implementar varios constructores:
- Un constructor por defecto.
- Un constructor con el nombre, edad y sexo, el resto por defecto.
- Un constructor con todos los atributos como parámetro.

# 2. Crea una Clase llamada Ejecutable (donde ejecutarás los métodos de la clase Persona) #
La clase Ejecutable es la que ejecutará los métodos esMayorDeEdad & comprobarSexo.

Los métodos que se implementarán son:
- esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano (manejar encapsulamiento).
- comprobarSexo(char sexo): comprueba que el sexo introducido es correcto. Si no es correcto, sera H. No será visible al exterior.
- toString(): devuelve toda la información del objeto.

# Ahora, en la clase Ejecutable haz lo siguiente: #
- Pide por teclado el nombre, la edad, sexo, peso y altura.
- Crea 3 objetos de la clase anterior,
    - el primer objeto obtendrá las anteriores variables pedidas por teclado,
    - el segundo objeto obtendrá todos los anteriores menos el peso y la altura
    - y el último por defecto, para este último utiliza los métodos set para darle a los atributos un valor.
- Indicar para cada objeto si es mayor de edad.
- Por último, mostrar la información de cada objeto.

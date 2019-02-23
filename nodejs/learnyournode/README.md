## Argumentos pasados al script

- Es un array que se accede desde `process.argv`. 
- Del puesto 2 en adelante son los argumentos pasados. El 0 y 1 son `node` y el nombre del script.

## Coerción de enteros

- Símbolo más (+) al inicio: `+process.argv[2]`.
- Usar *Number*: `Number(process.argv[2])`

## Arreglos

Slice: `myArray.slice(3)`, corta desde la posición 3 en adelante.
Filter: `myArray.filter(function(element) { SENTENCIA_QUE_RETORNE_TRUE })`, filtra los element que cumplan con la SENTENCIA_QUE_RETORNE_TRUE.
Length: `myArray.length`, retorna el último índice usado + 1, no retorna la cantidad de elementos definidos. 

```javascript
  var a = []
  a[3] = "hola"
  a.length // 4
```

## Lazos

```javascript
myList.forEach( function(element) { ... } )

myList.forEach( element => { ... } )

myList.forEach( (element, index) => { ... } )
```


## Reduce

Necesita un reducer, un array  y un valor inicial.
Reducer: `const reducer = (accumulator, currentValue) => accumulator + currentValue;`
Reduce: `myArray.reduce(reducer, initialValue)`

```javascript
 const sum = (sumOfNumbers, currentNumber) => sumOfNumbers + currentNumber
 let numbers = [1, 2, 3, 4]
 numbers.reduce(sum, 0) // 10
```

## Archivos

```javascript
var fs = require('fs')
var contents = fs.readFileSync('PATH/TO/FILE')
```

Contenido del archivo a string

Opcion 1, usando `toString()`
```javascript 
var fs = require('fs')
var contents = fs.readFileSync('PATH/TO/FILE').toString()
```

Opción 2, pasando el encoding como argumento. Ej: `utf8`
```javascript Opcion 2
var fs = require('fs')
var contents = fs.readFileSync('PATH/TO/FILE', 'utf8')
```


## Callbacks

- No sabes cuando pero sabes donde.


```javascript
function bar (callback) {  // PASAS UN CALLBACK
  foo(function (err, data) { // DENTRO LLAMAS A UNA FUNCION, EJ. LEER ARCHIVO, 
    if (err)  // SI LA FUNCION LLAMADA BOTA ERROR
      return callback(err) // early return  // RETORNAS EL CALLBACK SOLO CON EL ERROR,ESTO SE LLAMA EARLY RETURN.
  
    // ... no error, continue doing cool things with `data`  // NO HAY ERROR, HACES LO QUE TENGAS QUE HACER CON LA DATA DEVUELTA.
  
    // all went well, call callback with `null` for the error argument  
  
    callback(null, data)  // RETORNAS EL CALLBACK CON ERROR=NULL Y LA DATA GENERADA O PROCESADA.
  })  
}  
```


## Modulos

Ejemplo de exportar módulo

`module.exports = function (args) { /* ... */ }` 

`module.exports = function(a,b, callback) { /* ... */ } `

La función exportada puede ser usada directamente

```javascript
myModule = require('my_module.js')
myModule(a, b, callback)
```

## HTTP

- `http.get()` recibe la url y un callback.
- El callback tiene la firma: `function callback (response) { /* ... */ }` . Nótese no tiene un argumento de error el callback.
- El `response` es un objeto *Stream* de Node, que "emite" eventos. Los 3 eventos que tiene el `response` son `data`, `error` y `end`.
- Para escuchar un evento emitido por el *Stream*: `response.on("data", function(data) { /* ... */ })`
- Si quieres que el evento `data` del `response` (*Stream*) no sea un *Buffer* sino *String*, puedes setear el encoding del `response`.

Ejemplo:

```javascript
    var http = require('http')
    
    http.get('https://...', function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    }).on('error', console.error)
```

Cuando el servidor envía varios streams se pueden tomar todos usando el paquete `bl` (buffer list), `npm install bl`.

```javascript
    var http = require('http')
    var bl = require('bl')

    http.get('https://....', function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        console.log(data.toString())
      }))
    })
```

Pasar contenido de un archivo como respuesta a un requerimiento http

```javascript
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' }) // status code y content-type

  fs.createReadStream(process.argv[3]).pipe(res) // pasa el stream leido a la respuesta.
})

server.listen(Number(process.argv[2]))
```

- En un requerimiento http, `request` y `response` son *Stream*, puedes usar *pipe*.


https://github.com/maxogden/art-of-node#callbacks
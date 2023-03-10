# stio_studio 

This is a language I want to make in the future :)

Please give me ideas of how it should work, by making a issue here on github or a comment on my [scratch profile](https://scratch.mit.edu/users/stio_studio/)!

### What I want with my language 
That you can change it to your liking. You will not be stopped by anything. You can use any word except `()` `{}` `[]` `` and space

### Options for variables
```
number / num 

string / text

boolean / bool

function / func / def

object / obj / struct

class

int / float

locked
```
`locked` is a option that makes it so you can use it right beside other variables.
```
function {locked} [num _num1]:[num _num2] = {
    return _num1 * _num2;
};

let hi = 5;
let wow = 9;

console.log(hi:wow);
```
The down side is that you can not use that word somewhere else

Anything that can be an option (existing types, even your own classes and more), are to represent how the variable is being stored and used.


### Variable definition keywords 
Of pretty much all keywords that exist in world of programming, we have these:
```
var

let

int

float

function

const
```

### How to make a variable:

```
The thing that defines the variable. Can be anything in the "Variabel definitions"  
 |      Options. This is optional. It can be anything in the "Option on variable"  
 |      |           The name of the variable  
 |      |           |        Can be =, +=, -=, *=, /=, ^=, add, change, subtract, multiply, divide, mod, and, nand, or, xor,  
 |      |           |        |      The value of the variable  
 |      |           |        |      |  
var {string} I_am_a_variable = "hello world"
```
You can use `()` and `[]` when adding parameters to a function 

`()` Does so, that you need to have a `()` in your function when giving a parameter, like this:  
```js
// Create the function
var hello(e) = (
    console.log(e);
);
// Use the function
hello("hi");
```

<br>

`[]` does so that you don't need to use `()` at all, (you can have `()` if you want), like this:
```js
// Create the function
var hello[e] = (
    console.log(e);
);
// Use the function
hello"hi"
```
`{}` for opening functions are same as the `()`.

### Some functions (that is in the compiler) :
```js
object option = {
    // The things here edit how the code works. So you can edit everything (not recommended for new coders)
    // (I don't know what to place here)
    object variable = {
        object var = {

        }
    },

}

function for(){
    // your code
};
// just like the normal for loop

function repeat(num times){
    // your code
};

function loop(num time_in_seconds){
    // your code
};

function while(bool boolean){
    // your code
};

function forever{
    // your code
};

function setTimeout(num time_in_seconds){
    // your code
};

function setInterval(num time_in_seconds){
    // your code
};

object console = {
    function show(bool _bool),
    function hide(bool _bool),
    function show,
    function hide,
    function log(_message),
    function error(_message),
    function warn(_message),
    function warning(_message),
};

object window = {
    function create, {
        //what the function gives.
        function open(bool _bool),
        function close(bool _bool),
        function open,
        function close,
        function show(bool _bool),
        function hide(bool _bool),
        function show,
        function hide,
        var x,
        var y,
        var height,
        var width,
        function max,
        function min,
        function fullscreen(bool _bool),
        function fullscreen,
        object draw = {
            // some drawing functions
        },
    }
};


function cos(num _num);

function sin(num _num);

function (num _num1)mod(num _num2);

function abs(num _num);
function absolute(num _num);

function round(num _num);

function ceil(num _num);
function ceiling(num _num);

function floor(num _num);

function sqrt(num _nun);
function squareroot(num _nun);

function pick_random(num _num1)to(num _num2);
function random_from(num _num1)to(num _num2);

function [bool _bool1]and[bool _bool2];
function {locked} [bool _bool1]&[bool _bool2];
function {locked} [bool _bool1]&&[bool _bool2];

function (bool _bool1)nand(bool _bool2);

function [bool _bool1]or[bool _bool2];
function {locked} [bool _bool1]|[bool _bool2];
function {locked} [bool _bool1]||[bool _bool2];

function (bool _bool1)xor(bool _bool2);

function not(bool _bool);
function {locked} ![bool _bool];

function join(_string1)with(_string2);
function join(_string1)(_string2);

function letter(num _num)of(_string);

function length_of(_string);

function (_string1)contains(_string2);

number 0; // A build in return of 0
number 1; // A build in return of 1
number 2; // A build in return of 2
number 4; // A build in return of 4
number 5; // A build in return of 5
number 6; // A build in return of 6
number 7; // A build in return of 7
number 8; // A build in return of 8
number 9; // A build in return of 9

function {locked} [a]+[b];
function {locked} [a]-[b];
function {locked} [a]*[b];
function {locked} [a]/[b];

```

```stio

function raw[a]; // Returns RawData struct with values of the given variable/function or other objects (variable = options, name, value, and more)

```

It returns a RawData struct with values about the object you gave it. Here is a example from a Vector2 const

```
var { Vec2, const } variable = Vec2{5, 5};

console.log(raw variable)
```

Returns:
```
RawData {
   options = { Vec2, const }
   name = "variable"
   value = Vec2 { 5, 5 } 
}
```

--------------------

### How to get the raw function
This is because all functions runs automaticly, even if they don't have a () in it
```
`I_am_a_function`
```

-----------

### Ways to make functions/variables
```js
//making the function
function hello(hello) = {
    console.log(hello);
};
//using the function
hello("why?");

// creating the function
function [a]+[b]hei = {
    //I don't know how to show this XD
    //maybe:
    return a+b; //I don't know
};
//using the function
20+10hei;


////// Classes and structs

// create the Vec2 class and print function for it
class Vector2 = {
    let x { int }
    let y { int }

    function print() =
    {
        console.log("X: " + x + " Y: " + y)   
    }
}
// using the function

var {Vector2, const} vec = Vector2(20, 30)

vec.print(); // prints the x and y values

// Structs


struct Vec2 = {
    let x { int }
    let y { int }
}

let vec = Vec2{ 5, 5 }

```

### License

stio_studio is MIT licensed.

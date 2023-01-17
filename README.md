# stio_studio

This is a language I want to make in the future :)
Pleas give me ideas of how it whouled have worked. By making a issue or a comment on: https://scratch.mit.edu/users/stio_studio/

### Options on variable:
```
number / num 

string / text

boolean / bool

function / func / def

object / obj / struct

class

int / float
```

Anything that can be an option is to how the variable is stored and used.


### Variabel definitions
Of pretty much all variables defenisions that exist, we have those:
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

function (bool _bool1)and(bool _bool2);
function (bool _bool1)&(bool _bool2);
function (bool _bool1)&&(bool _bool2);

function (bool _bool1)nand(bool _bool2);

function (bool _bool1)or(bool _bool2);
function (bool _bool1)|(bool _bool2);
function (bool _bool1)||(bool _bool2);

function (bool _bool1)xor(bool _bool2);

function not(bool _bool);

function join(_string1)with(_string2);
function join(_string1)(_string2);

function letter(num _num)of(_string);

function length_of(_string);

function (_string1)contains(_string2);

num 0 = // A build in return of 0
num 1 = // A build in return of 1
num 2 = // A build in return of 2
num 4 = // A build in return of 4
num 5 = // A build in return of 5
num 6 = // A build in return of 6
num 7 = // A build in return of 7
num 8 = // A build in return of 8
num 9 = // A build in return of 9
```
### How to get the raw function
This is because all functions runs automaticly, even if they don't have a () in it
```
|I_am_a_function|
```

### Some ways to make functions/variables
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
class Vec2 = {
    let x { int }
    let y { int }

    function print() =
    {
        console.log("X: " + x + " Y: " + y)   
    }
}
// using the function

var {Vec2, const} vec = Vec2(20, 30)

Vec2.print(); // prints the x and y values


```

### License

stio_studio is MIT licensed.

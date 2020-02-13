# Functions 
Today we're going to learn about `functions`

#### Learning Objectives 

By the end of the block, you will know how to do the following: 

> Declare and invoke a function in JavaScript

In order to do this, it's important to know a few things:

* **Data Types**
* `undefined` value 
* **Control Flow** 

These will be important as far as understanding how the Interpreter is going to execute our code, and what types of data you can pass into it, and what comes out of it.

## How to think about `functions` abstractly as a programmer (We Do)
Let's take off our developer hats for a second, and try to create an abstract definition about what a `function` really is. 

## How to think about `functions` concretely (I do)
So now that we know what functions are in an `abstract` sense, let's look at them as they directly relate to JavaScript. To do so, there are some key terms to note:

* `function declaration`
> The act of creating a function with a name, using the `function` statement
* `parameters`
> Variables used when creating a function which will act as `inputs`, and be replaced with real values when the function is called
* `Function invocation/calling a function`
> The act of executing a function in JavaScript
* `arguments`
> The values that are passed into a function when it is `invoked`, which replace the parameters. 
* `return` statement 
> Determines what the `output` of the function is when it is called (defaults to `undefined` if nothing is declared)


I'm going to `declare` a function, and then I am going to `invoke` it.

```JavaScript
 1| function microwaveFood(rawFood, time){
 2|    while(time !==0){
 3|        console.log(`Heating ${rawFood}, ${time} seconds left`)
 4|        time--;
 5|    }
 6|    console.log("Food is done!");
 7|    return “Cooked “+rawFood;
 8|}
 9|
10|microwaveFood("Chicken", 10);
//=> "Cooked Chicken"
```
Lines 1-8 are all part of the `function declaration`, or the act of **CREATING** a function, assigning it a name, inputs (`parameters`), the code we want to be a part of the function, and its `output` (determined by the `return` statement)

Line 10 is where we actually `invoke` our function.

## Create a function that multiplies two numbers (You Do)
We are now going to open up Google Chrome and work through creating our very first function! 

#### Requirements
2. Declare a function named   multiply
1. Have parameters named `a` and `b`,
2. Return the value of multiplying `a` and `b`
3. Invoke the function

Important things to note:
> When invoking a function, you MUST use parentheses

Lets look at the following lines of code:

```JavaScript
microwaveFood;

let randomName = microwaveFood

microwaveFood("chicken",5);
//=> "cooked chicken"

randomName("chicken", 5);
//=> "cooked chicken"
```

The first line of code is referred to as a `function reference`, it is used to reference the function, not to invoke it. We can use `function referencing` to assign a function to an arbitrary variable name, and call the function using that name. 


## Summary 
We have now learned the basic concepts behind `functions`, and have practiced both `declaring` a function, as well as `invoking` it. There is still a lot more to learn about functions, but this should give you a good foundation so that new concepts can be introduced. 

In a future block of instruction, we'll learn about the following: 

* Anonymous Functions 
* Arrow Functions
* Default Parameters 

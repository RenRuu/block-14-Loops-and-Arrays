See workShop folder for "Block 14 Workshop: Loops and Arrays"

WIIFM;
Simple Code - Arrays allow you to group together similar variables, resulting in fewer lines of code, variables names, and possible syntax errors.

Efficiency - Both loops and arrays will allow you be to perform more tasks with fewer lines of code and resources.

Data Structures = formats in JS that help access data in more efficient ways to make modifications when required.
- strings
- numbers
- booleans
- null
- undefined

Arrays = types of data structure that are used to store multiple values in a single variable.
    Can hold multiple data types (Strings, Numbers, Other Arrays)

    Ex) const dataTypes = ["strings", variables, 0 , 1, 4];
        const vegetables = ["carrots", "cabbage", "lettuce", "onions", "celery"];

   **Array is a list of object descriptions (personal understanding)**

Arrays are 0-indexed = first item in the array is considered to be at index 0.

    Ex) const vegetables = ["carrots", "cabbage", "lettuce", "onions", "celery"];

        vegetables[0] === "carrots";
        vegetables[3] === "onions";

Creating an Array with a single line of code:

            const array = [];

Use "const" instead of "let" because we don't want to assign a new value to the array variable.

*"[]" is the first indicator of an array*

How to modify an array

        Using different methods to add, delete, and update the contents of an array. These methods are called with a period ".", followed by the method name, and then ended with open and closed parens:

        Ex) arrayName.methodName(optionalParams)

    Methods:
    - .pop()
    - .push()
    - .shift()
    - .unshift()
    - .slice()
    - .splice()
    Rest Parameters (The "spread" or "rest" operator)

*see demonstration.js*

(Skipped over Splice)

Spread Operator = allows one to "spread" the contents of an array into separate arguments.

    Ex) math.max(1, 3, 5) // 5;
        math.max([1, 3, 5]) // NaN, because an array is not a number;
        math.max(...[1, 3, 5]) // 5; <---

Rest Operator = similar to the "spread operator", can be used to enclose the "rest" of specific user-supplied values into an array.
(Self note: Need better understanding of)


Loop = offer a quick and easy way to do something repeatedly.
    Used to -
        - Traverse over a large set of data
        - Repeat an action over the items in an array
        - Do something until a certain condition is met

    Class is focusing on only two types of loops "for" and "while".

For
    loop through a block of code a 'number' of times.
        - loop over a block of code a 'set number' of times.
        - 'for loop' statement is created with three expressions.
            parentheses "()", semicolons ";", and curly braces "{}"

    Ex) for(initialization; condition; afterthought)v{
        // statement;
        } 
    
    Initialization = executed once before the execution.
    Condition = defines the condition for executing the code block.
    Afterthought = executed after the code block finishes.

    *launch debugger by running command 'node demo.js' within JavaScript Debug Terminal (VSCode)*

*see for-loops.js*

    Index value is incremented by 1 and used to access the Object to access a specific index.

    Ex) const operatingSystems = ['windows', 'linus', 'mac'];

        for(let index = 0; index < operatingSystems.length; index++) {
            console.log(operatingSystem[index]);
        }

        Prints: windows linux mac

    Ex) const countdown = [1, 2, 3, 4, 5]; 
        
        for(let index = countdown.length - 1; index >= 0; index--) {
            console.log(countdown[index]);
        };

        Prints: 5 4 3 2 1
     (index-- = count down // index++ = counting up)
    

While
    loop through a block of code while a 'specific condition' is true.
        - loop through a block of code as long as a 'specified condition' is met.

    Ex) while (condition) {
        // code block to be executed
        }

*see while-loops.js*

Stack Overflow = error that occurs if the condition is always true, resulting in the while loop looping infinitely.
    (Needs to have an exit out of the loop)

**Strings are also 0 indexed, so therefore we can loop over strings just like arrays.**



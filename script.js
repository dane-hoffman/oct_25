//create four functions, that use two numbers; to add, mult, sub, divide

//Create function the takes in two numbers as an argument
const addTwoNumbers = (num1, num2) => {
    //use the "+" operator within the parameters of the function
    return num1 + num2;
};

//Create function the takes in two numbers as an argument
const multiplyTwoNumbers = (num1, num2) => {
    //use the "*" operator within the parameters of the function
    return num1 * num2;
};

//Create function the takes in two numbers as an argument
const subtractTwoNumbers = (num1, num2) => {
    //use the "-" operator within the parameters of the function
    return num1 - num2;
};

//Create function the takes in two numbers as an argument
const divideTwoNumbers = (num1, num2) => {
    //use the "/" operator within the parameters of the function
    return num1 / num2;
};

//Display the solution to each of the functions.
//Test each as create
console.log (addTwoNumbers(2,2));
console.log (multiplyTwoNumbers(2,2));
console.log (subtractTwoNumbers(2,2));
console.log (divideTwoNumbers(2,0));
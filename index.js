console.log("hello world")
function greet(name,callback) {
    console.log("Hello" + name);
    callback();
}
function sayBye() {
    console.log("Goodbye");
}
greet("Jatin", sayBye);

function checkEvenOdd(callback) {
    const num = Math.floor(Math.random() * 100) + 1;

    console.log("Random number = " + num);

    if (num % 2 === 0) {
        callback(num + " is even", null);
    } else {
        callback(num + " is odd", null);
    }
}

function result(message, error) {
    console.log(message);
}

checkEvenOdd(result);
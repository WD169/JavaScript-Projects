
//Imediately invoked function expression

(function abc() {
     console.log("This is testing");
    })();                        //"()" - 1st was for funct defining, "()" - 2nd for execution

//Semicolon is imp

( () => {
    console.log("This is testing 2");
})();


( (name) => {
    console.log(`My name is ${name}`);
} )('Chinmay')
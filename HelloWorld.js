var HelloWorld = (function () {
    function HelloWorld(yourFirstName, yourLastName) {
        this.yourFirstName = yourFirstName;
        this.yourLastName = yourLastName;
    }
    HelloWorld.prototype.sayHello = function () {
        console.log('Hello World!' + ' My name is ' + this.yourFirstName + ' ' + this.yourLastName + '.');
    };
    return HelloWorld;
})();
var myHelloClassInstance = new HelloWorld('Gurkanwar', 'Singh');
myHelloClassInstance.sayHello();
